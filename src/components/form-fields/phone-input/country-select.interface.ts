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

  // `<select/>` options.
  options: Array<Option>;

  // Country flag component.
  iconComponent: React.ElementType;

  // Select arrow component.
  arrowComponent: React.ElementType;

  // Set to `true` to render Unicode flag icons instead of SVG images.
  unicodeFlags: boolean;
}
