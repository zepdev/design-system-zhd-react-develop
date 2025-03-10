export type Option = {
    value: string;
    label: string;
    divider: boolean;
};
export interface CountrySelectProps {
    /**
     * A two-letter country code.
     * Example: "US", "RU", etc.
     */
    value: string;
    /**
     * A function of `value: string`.
     * Updates the `value` property.
     */
    onChange: (value?: string) => void;
    options: Array<Option>;
    iconComponent: React.ElementType;
    arrowComponent: React.ElementType;
    unicodeFlags: boolean;
}
//# sourceMappingURL=country-select.interface.d.ts.map