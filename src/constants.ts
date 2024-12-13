import { Label } from './types.js';

export const DELETE = 'insert-rkey-of-delete-post-here';
export const LABEL_LIMIT = 1;
export const LABELS: Label[] = [
  // {
  //   rkey: 'insert-rkey-here',
  //   identifier: 'test',
  //   locales: [
  //     { lang: 'en', name: 'Test', description: 'Test'},
  //   ],
  //   word_flags: ["test-flag"]
  // },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-bdsm',
    locales: [
      { lang: 'en', name: 'BDSM', description: 'Filter for everything that includes the words: bdsm bondage submission masochism sadomaso torture slave master'},
    ],
    word_flags: ["bdsm", "bondage", "submission", "masochism", "sadomaso", "torture", "slave", "master"],
    severity: "inform",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-penis',
    locales: [
      { lang: 'en', name: 'Penis, Cocks, Dicks...', description: 'Filter for everything that includes the words: cock dick gock boyclit penis'},
    ],
    word_flags: ["cock", "dick", "gock", "boyclit", "penis"],
    severity: "inform",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-vagina',
    locales: [
      { lang: 'en', name: 'Penis, Cocks, Dicks...', description: 'Filter for everything that includes the words: vagina pussy clit twat cooch'},
    ],
    word_flags: ["vagina", "pussy", "clit", "twat", "cooch"],
    severity: "inform",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true
  },
];
