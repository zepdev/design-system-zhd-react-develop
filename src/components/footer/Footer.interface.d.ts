import { MultiLinkListProps } from '../multi-link-list';
import { LinkProps } from '@zepdev/design-system-component-library-react';
import { GlobalVariants } from '../../interfaces/global-variants';

export interface FooterProps extends Omit<MultiLinkListProps, 'variant'> {
    socialMediaLinks: LinkProps[];
    socialMediaTitle: string;
    footerLinks: LinkProps[];
    footerText?: string;
    variant?: GlobalVariants;
    /**
     * When true, displays social icons larger (40x40) and uses colored variants.
     * Default: false (maintains backward compatibility)
     */
    prominentSocialIcons?: boolean;
}
//# sourceMappingURL=Footer.interface.d.ts.map