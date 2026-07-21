export type CountryCode = 'DE' | 'FR' | 'GB' | 'IT' | 'IN' | 'US' | 'CN';
/**
 * Maps the various localized / aliased country labels that may arrive from the
 * CMS (German, English, abbreviations) to a canonical ISO country code.
 */
export declare const COUNTRY_CODE_MAP: Record<string, CountryCode>;
/**
 * Native (endonym) country names, shown in the language switcher so users can
 * immediately recognise their country in their own language / script
 * (e.g. Italia, भारत) instead of a translated designation (Italien, Indien).
 */
export declare const COUNTRY_NATIVE_NAME_MAP: Record<CountryCode, string>;
/**
 * Resolves a (possibly localized) country label to its native endonym.
 * Falls back to the original label when the country is not mapped.
 */
export declare const getNativeCountryName: (country?: string) => string;
//# sourceMappingURL=countryNames.d.ts.map