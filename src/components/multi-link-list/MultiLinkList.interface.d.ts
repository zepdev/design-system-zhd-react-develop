import { HeaderLongComponentProps } from '../header-long-component';
import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';
import { LinkListItemProps } from '../link-list-item';

export interface MultiLinkListProps extends Partial<Omit<HeaderLongComponentProps, 'variant'>> {
    linkLists: LinkListItemProps[];
    variant?: GlobalVariants | GlobalVariantExtended;
    isPatternPart?: boolean;
    linkListItemClassname?: string;
    isFooterList?: boolean;
    id?: string;
}
//# sourceMappingURL=MultiLinkList.interface.d.ts.map