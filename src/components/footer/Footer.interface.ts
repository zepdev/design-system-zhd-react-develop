import { MultiLinkListProps } from '@/components/multi-link-list';
import { LinkProps } from '@zepdev/design-system-component-library-react';

export interface FooterProps extends Omit<MultiLinkListProps, 'variant'> {
  socialMediaLinks: LinkProps[],
  socialMediaTitle: string,
  footerLinks: LinkProps[],
  footerText?: string,
}
