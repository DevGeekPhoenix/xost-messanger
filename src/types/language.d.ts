export type LanguagesValue = "fa" | "en";

export interface LanguageItem {
  languageCode: LanguagesValue;
  direction: "rtl" | "ltr";
  textAlign: "right" | "left";
}
