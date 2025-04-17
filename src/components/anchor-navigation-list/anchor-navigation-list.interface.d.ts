import { ReactNode } from 'react';
import { AnchorNavigationCardProps } from '../anchor-navigation-card';
import { HeaderLongProps } from '../header-long';

export interface AnchorNavigationListProps extends Partial<Omit<HeaderLongProps, 'variant'>> {
    navigationCards: Omit<AnchorNavigationCardProps, 'variant'>[];
    children?: ReactNode;
    className?: string;
}
//# sourceMappingURL=anchor-navigation-list.interface.d.ts.map