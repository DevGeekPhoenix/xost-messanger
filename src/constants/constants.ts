import { CientCookieConfigType, ILanguages } from "./index.d";
import type { OptionsType } from "cookies-next/lib/types";
import { LanguageItem } from "types";

// client config
export const clientCookieOption: OptionsType = {
  maxAge: 60 * 60 * 24 * 30 * 12, // 1year
};

export enum ClientCookiesName {
  theme = "theme",
  language = "language",
}

export const languages: ILanguages = {
  fa: {
    languageCode: "fa",
    direction: "rtl",
    textAlign: "right",
  },
  en: {
    languageCode: "en",
    direction: "ltr",
    textAlign: "left",
  },
};

export const defaultlanguage: LanguageItem = languages.fa;

export const clientCookieConfig: CientCookieConfigType = {
  theme: "dark",
  language: defaultlanguage.languageCode,
  accessToken: "",
};
