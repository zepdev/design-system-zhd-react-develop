import { HeaderLongComponentProps } from '../header-long-component';
import { LinkListItemProps } from '../link-list-item';

export interface MultiLinkListProps extends Partial<Omit<HeaderLongComponentProps, 'variant'>> {
    linkLists: LinkListItemProps[];
    isPatternPart?: boolean;
    linkListItemClassname?: string;
    isFooterList?: boolean;
    id?: string;
}
//# sourceMappingURL=MultiLinkList.interface.d.ts.map