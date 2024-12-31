import { ComAtprotoLabelDefs } from '@atcute/client/lexicons';
import { CommitCreateEvent } from '@skyware/jetstream';
import { LabelerServer } from '@skyware/labeler';

import { DID, SIGNING_KEY } from './config.js';
import { DELETE, LABELS, LABEL_LIMIT } from './constants.js';
import logger from './logger.js';

export const labelerServer = new LabelerServer({ did: DID, signingKey: SIGNING_KEY, dbPath: "./data/labels.db" });

export const label = (did: string, rkey: string) => {
  logger.info(`Received rkey: ${rkey} for ${did}`);

  if (rkey === 'self') {
    logger.info(`${did} liked the labeler. Returning.`);
    return;
  }
  try {
    const labels = fetchCurrentLabels(did);

    if (rkey.includes(DELETE)) {
      deleteAllLabels(did, labels);
    } else {
      addOrUpdateLabel(did, rkey, labels);
    }
  } catch (error) {
    logger.error(`Error in \`label\` function: ${error}`);
  }
};

function fetchCurrentLabels(did: string) {
  const query = labelerServer.db
    .prepare<string[]>(`SELECT * FROM labels WHERE uri = ?`)
    .all(did) as ComAtprotoLabelDefs.Label[];

  const labels = query.reduce((set, label) => {
    if (!label.neg) set.add(label.val);
    else set.delete(label.val);
    return set;
  }, new Set<string>());

  if (labels.size > 0) {
    logger.info(`Current labels: ${Array.from(labels).join(', ')}`);
  }

  return labels;
}

function deleteAllLabels(did: string, labels: Set<string>) {
  const labelsToDelete: string[] = Array.from(labels);

  if (labelsToDelete.length === 0) {
    logger.info(`No labels to delete`);
  } else {
    logger.info(`Labels to delete: ${labelsToDelete.join(', ')}`);
    try {
      labelerServer.createLabels({ uri: did }, { negate: labelsToDelete });
      logger.info('Successfully deleted all labels');
    } catch (error) {
      logger.error(`Error deleting all labels: ${error}`);
    }
  }
}

function addOrUpdateLabel(did: string, rkey: string, labels: Set<string>) {
  const newLabel = LABELS.find((label) => label.rkey === rkey);
  if (!newLabel) {
    logger.warn(`New label not found: ${rkey}. Likely liked a post that's not one for labels.`);
    return;
  }
  logger.info(`New label: ${newLabel.identifier}`);

  if (labels.size >= LABEL_LIMIT) {
    try {
      labelerServer.createLabels({ uri: did }, { negate: Array.from(labels) });
      logger.info(`Successfully negated existing labels: ${Array.from(labels).join(', ')}`);
    } catch (error) {
      logger.error(`Error negating existing labels: ${error}`);
    }
  }

  try {
    labelerServer.createLabel({ uri: did, val: newLabel.identifier });
    logger.info(`Successfully labeled ${did} with ${newLabel.identifier}`);
  } catch (error) {
    logger.error(`Error adding new label: ${error}`);
  }
}

export function labelPost(event: CommitCreateEvent<'app.bsky.feed.post'>) {
  const apply_labels: string[] = [];
  let suggestive = false;
  let nsfw = false;

  if (event.commit.record.labels?.$type == 'com.atproto.label.defs#selfLabels') {
    suggestive = true;
    nsfw = true;
  }

  for (const LABEL of LABELS) {
    if (
      LABEL.word_flags
        .map((w) => w.toLowerCase())
        .find(
          (w) =>
            event.commit.record.text.toLowerCase().includes(w) ||
            (event.commit.record.embed?.$type == 'app.bsky.embed.images' &&
              event.commit.record.embed.images
                .map((i) => i.alt.toLowerCase())
                .join(' ')
                .includes(w)) ||
            (event.commit.record.embed?.$type == 'app.bsky.embed.video' &&
              event.commit.record.embed.alt?.toLowerCase().includes(w)),
        )
    ) {
      if (LABEL.identifier == 'kink-label-suggestive') suggestive = true;
      if (LABEL.identifier == 'kink-label-nsfw') nsfw = true;
      apply_labels.push(LABEL.identifier);
    }
  }

  for (let i = 0; i < apply_labels.length; i++) {
    const LABEL = LABELS.find((l) => l.identifier == apply_labels[i]);
    if (!LABEL) continue;

    if (LABEL.suggestive && !suggestive) {
      apply_labels.splice(i, 1);
      i--;
      continue;
    }
    if (LABEL.nsfw && !nsfw) {
      apply_labels.splice(i, 1);
      i--;
      continue;
    }

    if (
      (LABEL.required_labels &&
        apply_labels.filter((l) => LABEL.required_labels?.includes(l)).length == LABEL.required_labels.length) ||
      !LABEL.required_labels
    ) {
      continue;
    }

    apply_labels.splice(i, 1);
    i--;
  }

  if (apply_labels.length == 0) return;

  console.log(
    'LABELS APPLIED:',
    event.commit.record.labels?.$type == 'com.atproto.label.defs#selfLabels',
    `at://${event.did}/${event.commit.record.$type}/${event.commit.rkey}`,
    apply_labels,
  );
  labelerServer.createLabels(
    { uri: `at://${event.did}/${event.commit.record.$type}/${event.commit.rkey}` },
    { create: apply_labels },
  );
}
