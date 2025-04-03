import { LocaleVariants } from '../../interfaces/global-variants';
import { LinkListItemProps } from '../link-list-item';

export interface ContactFormProps {
    onSubmit: (data: unknown) => void;
    headline: string;
    tagline?: string;
    linkLists?: LinkListItemProps[];
    locale: LocaleVariants;
    loading?: boolean;
    privacyPolicyUrl: string;
}
//# sourceMappingURL=contact-form-interface.d.ts.map