import { BlocksContent } from '@strapi/blocks-react-renderer';
import { LinkProps } from '@zepdev/design-system-component-library-react';
import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';

export interface LinkListItemProps {
    headline?: string;
    description?: BlocksContent;
    links: LinkProps[];
    variant?: GlobalVariants | GlobalVariantExtended;
    isMultiListItem?: boolean;
    className?: string;
    isFooterList?: boolean;
    type?: 'default' | 'download';
    gtmId?: string;
    gtmHeadline?: string;
}
//# sourceMappingURL=LinkListItem.interface.d.ts.map