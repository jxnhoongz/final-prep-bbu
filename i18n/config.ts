export const locales = ["en", "km"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Cookie that persists the reader's chosen language across requests. */
export const LOCALE_COOKIE = "NEXT_LOCALE";

/** Endonyms shown on the language switcher (a language names itself). */
export const localeLabel: Record<Locale, string> = {
  en: "English",
  km: "ភាសាខ្មែរ",
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}
