import { HTMLAttributes } from 'react';
import { LinkListItemProps } from '../link-list-item';
import { HeaderShortProps } from '../header-short';

export interface SingleLinkListProps extends HTMLAttributes<HTMLDivElement>, HeaderShortProps, LinkListItemProps {
    title: string;
    id?: string;
}
//# sourceMappingURL=SingleLinkList.interface.d.ts.map