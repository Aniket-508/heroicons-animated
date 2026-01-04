const SITE = {
  NAME: "heroicons-animated",
  URL: "https://heroicons-animated.vercel.app",
  OG_IMAGE: "/og.png",
  AUTHOR: {
    NAME: "Aniket Pawar",
    TWITTER: "@alaymanguy",
  },
  DESCRIPTION: {
    LONG: "Free open-source library of 316 beautifully animated React icons. Built with Motion and Heroicons. Copy-paste ready, MIT licensed, fully customizable SVG icons with smooth animations.",
    SHORT:
      "Free animated React icons library with 316 smooth Motion-powered Heroicons. MIT licensed, copy-paste ready.",
  },
  KEYWORDS: [
    "animated icons",
    "react icons",
    "motion icons",
    "heroicons",
    "heroicons animated",
    "animated heroicons",
    "heroicons react",
    "svg icons",
    "animated svg",
    "react components",
    "icon library",
    "open source icons",
    "framer motion icons",
    "animated react components",
    "free icons",
    "MIT license icons",
    "copy paste icons",
    "tailwind icons",
    "nextjs icons",
  ],
} as const;

const LINK = {
  TWITTER: "https://x.com/alaymanguy",
  GITHUB: "https://github.com/Aniket-508/heroicons-animated",
  HEROICONS: "https://heroicons.com",
  MOTION: "https://motion.dev",
  LICENSE: "https://github.com/Aniket-508/heroicons-animated/blob/main/LICENSE",
  SPONSOR: "https://github.com/sponsors/Aniket-508",
} as const;

const PACKAGE_MANAGER = {
  PNPM: "pnpm",
  NPM: "npm",
  YARN: "yarn",
  BUN: "bun",
} as const;

export { LINK, PACKAGE_MANAGER, SITE };
