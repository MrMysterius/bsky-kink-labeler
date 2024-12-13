import { LabelValueDefinitionStrings } from '@atproto/api/dist/client/types/com/atproto/label/defs.js';

export interface Label {
  rkey: string;
  identifier: string;
  locales: LabelValueDefinitionStrings[];
  word_flags: string[];
  severity: 'inform' | 'alert' | 'none';
  blurs: 'content' | 'media' | 'none';
  defaultSetting: 'warn' | 'ignore' | 'hide';
  adultOnly: boolean;
  required_labels?: string[];
}
