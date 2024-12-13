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
    identifier: 'kink-label-nsfw',
    locales: [
      { lang: 'en', name: '[GENERAL] NSFW', description: 'Filtered Words: nsfw notsafeforwork porn goon'},
    ],
    word_flags: ["nsfw", "notsafeforwork", "porn", "goon"],
    severity: "inform",
    blurs: "content",
    defaultSetting: "ignore",
    adultOnly: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-penis',
    locales: [
      { lang: 'en', name: '[BODYPART] Penis', description: 'Filtered Words: cock dick gock boyclit penis'},
    ],
    word_flags: ["cock", "dick", "gock", "boyclit", "penis"],
    severity: "inform",
    blurs: "media",
    defaultSetting: "ignore",
    adultOnly: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-vagina',
    locales: [
      { lang: 'en', name: '[BODYPART] Vagina', description: 'Filtered Words: vagina pussy clit twat cooch'},
    ],
    word_flags: ["vagina", "pussy", "clit", "twat", "cooch"],
    severity: "inform",
    blurs: "media",
    defaultSetting: "ignore",
    adultOnly: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-feet',
    locales: [
      { lang: 'en', name: '[BODYPART] Feet', description: 'Filtered Words: feet toes'},
    ],
    word_flags: ["feet", "toes"],
    severity: "inform",
    blurs: "media",
    defaultSetting: "ignore",
    adultOnly: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-ass',
    locales: [
      { lang: 'en', name: '[BODYPART] Ass', description: 'Filtered Words: ass booty buttocks cheeks'},
    ],
    word_flags: ["ass", "booty", "buttocks", "cheeks"],
    severity: "inform",
    blurs: "media",
    defaultSetting: "ignore",
    adultOnly: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-thighs',
    locales: [
      { lang: 'en', name: '[BODYPART] Thighs', description: 'Filtered Words: thighs'},
    ],
    word_flags: ["thighs"],
    severity: "inform",
    blurs: "media",
    defaultSetting: "ignore",
    adultOnly: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-stomache',
    locales: [
      { lang: 'en', name: '[BODYPART] Stomache', description: 'Filtered Words: stomache tummy'},
    ],
    word_flags: ["stomache", "tummy"],
    severity: "inform",
    blurs: "media",
    defaultSetting: "ignore",
    adultOnly: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-bdsm',
    locales: [
      { lang: 'en', name: '[KINK] BDSM', description: 'Filter Words: bdsm bondage submission masochism sadomaso torture slave master'},
    ],
    word_flags: ["bdsm", "bondage", "submission", "masochism", "sadomaso", "torture", "slave", "master"],
    severity: "inform",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-furries',
    locales: [
      { lang: 'en', name: '[KINK] Furries', description: 'Filter Words: furry furries knot paws'},
    ],
    word_flags: ["furry", "furries", "knot", "paws"],
    severity: "inform",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-mursuits',
    locales: [
      { lang: 'en', name: '[KINK] Mursuits', description: 'Filter Words: mursuit murs'},
    ],
    word_flags: ["mursuit", "murs"],
    severity: "inform",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-softsuits',
    locales: [
      { lang: 'en', name: '[KINK] Softsuits', description: 'Filter Words: softsuit '},
    ],
    word_flags: ["softsuit"],
    severity: "inform",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-gore',
    locales: [
      { lang: 'en', name: '[KINK] Gore', description: 'Filter Words: gore cuts blood bleed wound'},
    ],
    word_flags: ["gore", "cuts", "blood", "bleed", "wound"],
    severity: "inform",
    blurs: "content",
    defaultSetting: "hide",
    adultOnly: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-smell',
    locales: [
      { lang: 'en', name: '[KINK] Smell', description: 'Filter Words: musk sweat smell'},
    ],
    word_flags: ["musk", "sweat", "smell"],
    severity: "inform",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-liquids-sperm',
    locales: [
      { lang: 'en', name: '[KINK] Sperm/Lactation', description: 'Filter Words:  sperm cum lactate lactation milk'},
    ],
    word_flags: ["sperm", "cum", "lactate", "lactation", "milk"],
    severity: "inform",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-liquids-urine',
    locales: [
      { lang: 'en', name: '[KINK] Urine', description: 'Filter Words: urine piss'},
    ],
    word_flags: ["urine", "piss"],
    severity: "inform",
    blurs: "content",
    defaultSetting: "hide",
    adultOnly: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-scat',
    locales: [
      { lang: 'en', name: '[KINK] Scat', description: 'Filter Words: scat shit feces excrement'},
    ],
    word_flags: ["scat", "shit", "feces", "excrement"],
    severity: "inform",
    blurs: "content",
    defaultSetting: "hide",
    adultOnly: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-abdl',
    locales: [
      { lang: 'en', name: '[KINK] ABDL', description: 'Filter Words: abdl diaper "adult baby" baby "age play"'},
    ],
    word_flags: ["abdl", "diaper", "adult baby", "baby", "age play"],
    severity: "inform",
    blurs: "content",
    defaultSetting: "hide",
    adultOnly: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-anal',
    locales: [
      { lang: 'en', name: '[KINK] Anal', description: 'Filter Words: anal assfuck'},
    ],
    word_flags: ["anal", "assfuck"],
    severity: "inform",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-oral',
    locales: [
      { lang: 'en', name: '[KINK] Furries', description: 'Filter Words: oral mouth throat'},
    ],
    word_flags: ["oral", "mouth", "throat"],
    severity: "inform",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-oviposition',
    locales: [
      { lang: 'en', name: '[KINK] Oviposition', description: 'Filter Words: oviposition eggs'},
    ],
    word_flags: ["oviposition", "eggs"],
    severity: "inform",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-breath',
    locales: [
      { lang: 'en', name: '[KINK] Breathplay', description: 'Filter Words: breathplay choke suffocate'},
    ],
    word_flags: ["breathplay", "choke", "suffocate"],
    severity: "inform",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-petplay',
    locales: [
      { lang: 'en', name: '[KINK] Petplay', description: 'Filter Words: pet fempup'},
    ],
    word_flags: ["pet", "fempup"],
    severity: "inform",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-masturbation',
    locales: [
      { lang: 'en', name: '[KINK] Masturbation', description: 'Filter Words: masturbation masturbate goon jerking jorking'},
    ],
    word_flags: ["masturbation", "masturbate", "goon", "jerking", "jorking"],
    severity: "inform",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-latex',
    locales: [
      { lang: 'en', name: '[KINK] Latex/Rubber', description: 'Filter Words: latex rubber'},
    ],
    word_flags: ["latex", "rubber"],
    severity: "inform",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-chastity',
    locales: [
      { lang: 'en', name: '[KINK] Chastity', description: 'Filter Words: chastity cage locked'},
    ],
    word_flags: ["chastity", "cage", "lock"],
    severity: "inform",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-groups',
    locales: [
      { lang: 'en', name: '[KINK] Groups', description: 'Filter Words: group orgy'},
    ],
    word_flags: ["group", "orgy"],
    severity: "inform",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true
  },
];
