import { enCommon } from "./en/common";
import { enHome } from "./en/home";
import { enPages } from "./en/pages";

import { teCommon } from "./te/common";
import { teHome } from "./te/home";
import { tePages } from "./te/pages";

import { hiCommon } from "./hi/common";
import { hiHome } from "./hi/home";
import { hiPages } from "./hi/pages";

export type Locale = "en" | "te" | "hi";

export const translations = {
  en: {
    common: enCommon,
    home: enHome,
    ...enPages,
  },
  te: {
    common: teCommon,
    home: teHome,
    ...tePages,
  },
  hi: {
    common: hiCommon,
    home: hiHome,
    ...hiPages,
  },
};

export type TranslationTree = typeof translations.en;
