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
    identifier: 'kink-label-suggestive',
    locales: [
      { lang: 'en', name: '⚠️ [GENERAL] Lewd/Nude', description: 'Filtered Words: lewd nude naked suggestive underwear lingerie'},
    ],
    word_flags: ["lewd", "nude", "naked", "suggestive", "lingerie", "horny"],
    severity: "alert",
    blurs: "content",
    defaultSetting: "ignore",
    adultOnly: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-nsfw',
    locales: [
      { lang: 'en', name: '⚠️ [GENERAL] NSFW', description: 'Filtered Words: nsfw notsafeforwork porn goon onlyfans horny'},
    ],
    word_flags: ["nsfw", "notsafeforwork", "porn", "goon", "onlyfans"],
    severity: "alert",
    blurs: "content",
    defaultSetting: "ignore",
    adultOnly: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-penis',
    locales: [
      { lang: 'en', name: '⚠️ [BODYPART] Penis', description: 'NSFW/SUGGESTIVE + Filtered Words: cock dick gock boyclit penis frot balls testicles shaft 🍆'},
    ],
    word_flags: ["cock", "dick", "gock", "boyclit", "penis", "frot", "balls", "testicles shaft", "🍆"],
    severity: "alert",
    blurs: "media",
    defaultSetting: "ignore",
    adultOnly: true,
    nsfw: true,
    suggestive: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-vagina',
    locales: [
      { lang: 'en', name: '⚠️ [BODYPART] Vagina', description: 'NSFW/SUGGESTIVE + Filtered Words: vagina pussy clit twat cooch'},
    ],
    word_flags: ["vagina", "pussy", "clit", "twat", "cooch"],
    severity: "alert",
    blurs: "media",
    defaultSetting: "ignore",
    adultOnly: true,
    nsfw: true,
    suggestive: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-feet',
    locales: [
      { lang: 'en', name: '⚠️ [BODYPART] Feet', description: 'NSFW/SUGGESTIVE + Filtered Words: feet toes'},
    ],
    word_flags: ["feet", "toes"],
    severity: "alert",
    blurs: "media",
    defaultSetting: "ignore",
    adultOnly: true,
    nsfw: true,
    suggestive: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-ass',
    locales: [
      { lang: 'en', name: '⚠️ [BODYPART] Ass', description: 'NSFW/SUGGESTIVE + Filtered Words: ass booty buttocks cheeks bussy boypussy 🍑'},
    ],
    word_flags: ["ass", "booty", "buttocks", "cheeks", "bussy", "boypussy", "🍑"],
    severity: "alert",
    blurs: "media",
    defaultSetting: "ignore",
    adultOnly: true,
    nsfw: true,
    suggestive: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-thighs',
    locales: [
      { lang: 'en', name: '⚠️ [BODYPART] Thighs', description: 'NSFW/SUGGESTIVE + Filtered Words: thighs'},
    ],
    word_flags: ["thighs"],
    severity: "alert",
    blurs: "media",
    defaultSetting: "ignore",
    adultOnly: true,
    nsfw: true,
    suggestive: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-stomache',
    locales: [
      { lang: 'en', name: '⚠️ [BODYPART] Stomache', description: 'NSFW/SUGGESTIVE + Filtered Words: stomache tummy'},
    ],
    word_flags: ["stomache", "tummy"],
    severity: "alert",
    blurs: "media",
    defaultSetting: "ignore",
    adultOnly: true,
    nsfw: true,
    suggestive: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-chest',
    locales: [
      { lang: 'en', name: '⚠️ [BODYPART] Chest/Areolas', description: 'NSFW/SUGGESTIVE + Filtered Words: tits tities boobs areolas nipple nips teet'},
    ],
    word_flags: ["tits", "tities", "boob", "areolas", "nipple", "nips", "teet"],
    severity: "alert",
    blurs: "media",
    defaultSetting: "ignore",
    adultOnly: true,
    nsfw: true,
    suggestive: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-armpits',
    locales: [
      { lang: 'en', name: '⚠️ [BODYPART] Armpits', description: 'NSFW/SUGGESTIVE + Filtered Words: armpits pits underarm armhole'},
    ],
    word_flags: ["armpits", "pits", "underarm", "armhole"],
    severity: "alert",
    blurs: "media",
    defaultSetting: "ignore",
    adultOnly: true,
    nsfw: true,
    suggestive: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-bodyhair',
    locales: [
      { lang: 'en', name: '⚠️ [BODYPART] Bodyhair', description: 'NSFW/SUGGESTIVE + Filtered Words: hairy bush'},
    ],
    word_flags: ["hairy", "bush"],
    severity: "alert",
    blurs: "media",
    defaultSetting: "ignore",
    adultOnly: true,
    nsfw: true,
    suggestive: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-bdsm',
    locales: [
      { lang: 'en', name: '⚠️ [KINK] BDSM', description: 'NSFW/SUGGESTIVE + Filter Words: bdsm bondage submission masochism sadomaso torture slave master'},
    ],
    word_flags: ["bdsm", "bondage", "submission", "masochism", "sadomaso", "torture", "slave", "master"],
    severity: "alert",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true,
    nsfw: true,
    suggestive: true,
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-pain-light',
    locales: [
      { lang: 'en', name: '⚠️ [KINK] Light Pain', description: 'NSFW/SUGGESTIVE + Filter Words: spank slap pinch scratch bite'},
    ],
    word_flags: ["spank", "slap", "pinch", "scratch", "bite"],
    severity: "alert",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true,
    nsfw: true,
    suggestive: true,
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-furries',
    locales: [
      { lang: 'en', name: '⚠️ [KINK] Furries', description: 'NSFW/SUGGESTIVE + Filter Words: furry furries knot paws'},
    ],
    word_flags: ["furry", "furries", "knot", "paws"],
    severity: "alert",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true,
    nsfw: true,
    suggestive: true,
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-mursuits',
    locales: [
      { lang: 'en', name: '⚠️ [KINK] Mursuits', description: 'NSFW/SUGGESTIVE + Filter Words: mursuit murs'},
    ],
    word_flags: ["mursuit", "murs"],
    severity: "alert",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true,
    nsfw: true,
    suggestive: true,
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-softsuits',
    locales: [
      { lang: 'en', name: '⚠️ [KINK] Softsuits', description: 'NSFW/SUGGESTIVE + Filter Words: softsuit '},
    ],
    word_flags: ["softsuit"],
    severity: "alert",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true,
    nsfw: true,
    suggestive: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-gore',
    locales: [
      { lang: 'en', name: '⚠️ [KINK] Gore', description: 'NSFW/SUGGESTIVE + Filter Words: gore cuts blood bleed wound'},
    ],
    word_flags: ["gore", "cuts", "blood", "bleed", "wound"],
    severity: "alert",
    blurs: "content",
    defaultSetting: "hide",
    adultOnly: true,
    nsfw: true,
    suggestive: true,
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-smell',
    locales: [
      { lang: 'en', name: '⚠️ [KINK] Smell', description: 'NSFW/SUGGESTIVE + Filter Words: musk sweat smell'},
    ],
    word_flags: ["musk", "sweat", "smell"],
    severity: "alert",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true,
    nsfw: true,
    suggestive: true,
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-liquids-sperm',
    locales: [
      { lang: 'en', name: '⚠️ [KINK] Sperm/Lactation', description: 'NSFW/SUGGESTIVE + Filter Words:  sperm cum lactate lactation milk 💦 🥛 🐄'},
    ],
    word_flags: ["sperm", "cum", "lactate", "lactation", "milk", "💦", "🥛", "🐄"],
    severity: "alert",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true,
    nsfw: true,
    suggestive: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-liquids-urine',
    locales: [
      { lang: 'en', name: '⚠️ [KINK] Urine', description: 'NSFW/SUGGESTIVE + Filter Words: urine piss'},
    ],
    word_flags: ["urine", "piss"],
    severity: "alert",
    blurs: "content",
    defaultSetting: "hide",
    adultOnly: true,
    nsfw: true,
    suggestive: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-scat',
    locales: [
      { lang: 'en', name: '⚠️ [KINK] Scat', description: 'NSFW/SUGGESTIVE + Filter Words: scat feces excrement'},
    ],
    word_flags: ["scat", "feces", "excrement"],
    severity: "alert",
    blurs: "content",
    defaultSetting: "hide",
    adultOnly: true,
    nsfw: true,
    suggestive: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-abdl',
    locales: [
      { lang: 'en', name: '⚠️ [KINK] ABDL', description: 'NSFW/SUGGESTIVE + Filter Words: abdl diaper adult_baby baby age_play'},
    ],
    word_flags: ["abdl", "diaper", "adult baby", "baby", "age play"],
    severity: "alert",
    blurs: "content",
    defaultSetting: "hide",
    adultOnly: true,
    nsfw: true,
    suggestive:true,
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-anal',
    locales: [
      { lang: 'en', name: '⚠️ [KINK] Anal', description: 'NSFW/SUGGESTIVE + Filter Words: anal assfuck'},
    ],
    word_flags: ["anal", "assfuck"],
    severity: "alert",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true,
    nsfw: true,
    suggestive: true,
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-oral',
    locales: [
      { lang: 'en', name: '⚠️ [KINK] Oral', description: 'NSFW/SUGGESTIVE + Filter Words: oral mouth throat'},
    ],
    word_flags: ["oral", "mouth", "throat"],
    severity: "alert",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true,
    nsfw: true,
    suggestive: true,
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-oviposition',
    locales: [
      { lang: 'en', name: '⚠️ [KINK] Oviposition', description: 'NSFW/SUGGESTIVE + Filter Words: oviposition eggs'},
    ],
    word_flags: ["oviposition", "eggs"],
    severity: "alert",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true,
    nsfw: true,
    suggestive: true,
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-breath',
    locales: [
      { lang: 'en', name: '⚠️ [KINK] Breathplay', description: 'NSFW/SUGGESTIVE + Filter Words: breathplay choke suffocate'},
    ],
    word_flags: ["breathplay", "choke", "suffocate"],
    severity: "alert",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true,
    nsfw: true,
    suggestive: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-petplay',
    locales: [
      { lang: 'en', name: '⚠️ [KINK] Petplay', description: 'NSFW/SUGGESTIVE + Filter Words: pet fempup leash collar kennel dog_bowl'},
    ],
    word_flags: ["pet", "fempup", "leash", "collar", "cage", "kennel", "dog bowl"],
    severity: "alert",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true,
    nsfw: true,
    suggestive: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-masturbation',
    locales: [
      { lang: 'en', name: '⚠️ [KINK] Masturbation', description: 'NSFW/SUGGESTIVE + Filter Words: masturbation masturbate goon jerking jorking'},
    ],
    word_flags: ["masturbation", "masturbate", "goon", "jerking", "jorking"],
    severity: "alert",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true,
    suggestive: true,
    nsfw: true,
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-latex',
    locales: [
      { lang: 'en', name: '⚠️ [KINK] Latex/Rubber', description: 'NSFW/SUGGESTIVE + Filter Words: latex rubber'},
    ],
    word_flags: ["latex", "rubber"],
    severity: "alert",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true,
    nsfw: true,
    suggestive: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-chastity',
    locales: [
      { lang: 'en', name: '⚠️ [KINK] Chastity', description: 'NSFW/SUGGESTIVE + Filter Words: chastity cage locked'},
    ],
    word_flags: ["chastity", "cage", "lock"],
    severity: "alert",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true,
    nsfw: true,
    suggestive: true,
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-groups',
    locales: [
      { lang: 'en', name: '⚠️ [KINK] Groups', description: 'NSFW/SUGGESTIVE + Filter Words: group orgy gang'},
    ],
    word_flags: ["group", "orgy", "gang"],
    severity: "alert",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true,
    nsfw: true,
    suggestive: true,
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-findom',
    locales: [
      { lang: 'en', name: '⚠️ [KINK] Findom', description: 'Filter Words: findom paypig'},
    ],
    word_flags: ["findom", "paypig"],
    severity: "alert",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true,
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-feminization',
    locales: [
      { lang: 'en', name: '⚠️ [KINK] Feminization', description: 'Filter Words: feminization bimbo sissy sissies'},
    ],
    word_flags: ["feminization", "bimbo", "sissy", "sissies"],
    severity: "alert",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-crossdress',
    locales: [
      { lang: 'en', name: '⚠️ [KINK] Cosplay/Crossdress', description: 'NSFW/SUGGESTIVE + Filter Words: femboy tomboy crossdress cosplay femboi twink trap femsky'},
    ],
    word_flags: ["femboy", "tomboy", "crossdress", "cosplay", "femboi", "trap", "femsky"],
    severity: "alert",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true,
    nsfw: true,
    suggestive: true
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'kink-label-pain-sounding',
    locales: [
      { lang: 'en', name: '⚠️ [KINK] Sounding', description: 'NSFW/SUGGESTIVE + Filter Words: sounding urethra'},
    ],
    word_flags: ["sounding", "urethra"],
    severity: "alert",
    blurs: "content",
    defaultSetting: "warn",
    adultOnly: true,
    nsfw: true,
    suggestive: true,
  },
];
