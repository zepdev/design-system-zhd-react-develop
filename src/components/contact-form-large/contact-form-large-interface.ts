import { LocaleVariants } from '../../interfaces/global-variants';

export interface ContactFormLargeProps {
  onSubmit: (data: unknown) => void;
  headline: string;
  tagline?: string;
  locale: LocaleVariants;
  loading?: boolean;
  privacyPolicyUrl: string;
}
