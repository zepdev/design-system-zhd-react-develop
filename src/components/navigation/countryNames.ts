export type CountryCode = 'DE' | 'FR' | 'GB' | 'IT' | 'IN' | 'US' | 'CN';

/**
 * Maps the various localized / aliased country labels that may arrive from the
 * CMS (German, English, abbreviations) to a canonical ISO country code.
 */
export const COUNTRY_CODE_MAP: Record<string, CountryCode> = {
  Germany: 'DE',
  Deutschland: 'DE',
  France: 'FR',
  Frankreich: 'FR',
  'Great Britain': 'GB',
  Großbritannien: 'GB',
  'United Kingdom': 'GB',
  Italy: 'IT',
  Italien: 'IT',
  India: 'IN',
  Indien: 'IN',
  'United States': 'US',
  USA: 'US',
  US: 'US',
  America: 'US',
  'Vereinigte Staaten': 'US',
  VSA: 'US',
  China: 'CN',
};

/**
 * Native (endonym) country names, shown in the language switcher so users can
 * immediately recognise their country in their own language / script
 * (e.g. Italia, भारत) instead of a translated designation (Italien, Indien).
 */
export const COUNTRY_NATIVE_NAME_MAP: Record<CountryCode, string> = {
  DE: 'Deutschland',
  FR: 'France',
  GB: 'United Kingdom',
  IT: 'Italia',
  IN: 'भारत',
  US: 'United States',
  CN: '中国',
};

/**
 * Resolves a (possibly localized) country label to its native endonym.
 * Falls back to the original label when the country is not mapped.
 */
export const getNativeCountryName = (country?: string): string => {
  if (!country) return '';
  const code = COUNTRY_CODE_MAP[country];
  return (code && COUNTRY_NATIVE_NAME_MAP[code]) || country;
};
