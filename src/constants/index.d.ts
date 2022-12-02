import { LanguageItem, LanguagesValue } from "types";

export type ClientAppTheme = "dark" | "light";

export interface CientCookieConfigType {
  theme: ClientAppTheme;
  language: LanguagesValue;
  accessToken: string | undefined;
}

export type ILanguages = Record<LanguagesValue, LanguageItem>;
