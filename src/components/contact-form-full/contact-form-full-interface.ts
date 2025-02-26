import { LocaleVariants } from '../../interfaces/global-variants';

export interface ContactFormProps {
  onSubmit: () => void;
  headline: string;
  tagline?: string;
  locale: LocaleVariants;
}
