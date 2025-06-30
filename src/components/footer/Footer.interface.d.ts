import { MultiLinkListProps } from '../multi-link-list';
import { LinkProps } from '@zepdev/design-system-component-library-react';
import { GlobalVariants } from '../../interfaces/global-variants';

export interface FooterProps extends Omit<MultiLinkListProps, 'variant'> {
    socialMediaLinks: LinkProps[];
    socialMediaTitle: string;
    footerLinks: LinkProps[];
    footerText?: string;
    variant?: GlobalVariants;
}
//# sourceMappingURL=Footer.interface.d.ts.map