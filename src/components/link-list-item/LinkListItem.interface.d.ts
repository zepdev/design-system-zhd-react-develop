import { LinkProps } from '@zepdev/design-system-component-library-react';
import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';
import { BlocksContent } from '@strapi/blocks-react-renderer';

export interface LinkListItemProps {
    headline?: string;
    description?: BlocksContent;
    links: LinkProps[];
    variant?: GlobalVariants | GlobalVariantExtended;
    isMultiListItem?: boolean;
    className?: string;
    isFooterList?: boolean;
    type?: 'default' | 'download';
}
//# sourceMappingURL=LinkListItem.interface.d.ts.map