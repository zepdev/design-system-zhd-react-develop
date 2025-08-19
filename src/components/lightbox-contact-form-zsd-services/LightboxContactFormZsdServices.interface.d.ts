import { LocaleVariants } from '../../interfaces/global-variants';

export interface LightboxContactFormZsdServicesProps {
    onSubmit: (data: unknown) => void;
    locale: LocaleVariants;
    isOpen: boolean;
    setIsOpen: (x: boolean) => void;
    loading?: boolean;
    contactArea?: string;
    privacyPolicyUrl: string;
}
//# sourceMappingURL=LightboxContactFormZsdServices.interface.d.ts.map