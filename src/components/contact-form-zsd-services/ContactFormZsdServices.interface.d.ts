import { LocaleVariants } from '../../interfaces/global-variants';

export interface ContactFormZsdServicesProps {
    onSubmit: (data: unknown) => void;
    headline: string;
    tagline?: string;
    locale: LocaleVariants;
    loading?: boolean;
    privacyPolicyUrl: string;
    success?: boolean;
    isLightbox?: boolean;
}
//# sourceMappingURL=ContactFormZsdServices.interface.d.ts.map