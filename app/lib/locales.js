export const locales = ["fr", "en"]

export function isLocale(locale) {
  return locales.includes(locale)
}

export function getLocaleParams() {
  return locales.map((locale) => ({ locale }))
}
