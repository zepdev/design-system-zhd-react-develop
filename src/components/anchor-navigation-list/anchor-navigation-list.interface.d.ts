import { ReactNode } from 'react';
import { AnchorNavigationCardProps } from '../anchor-navigation-card';
import { HeaderLongProps } from '../header-long';
import { GlobalVariants } from '../../interfaces/global-variants';

export interface AnchorNavigationListProps extends Partial<Omit<HeaderLongProps, 'variant'>> {
    navigationCards: Omit<AnchorNavigationCardProps, 'variant'>[];
    variant: GlobalVariants;
    children?: ReactNode;
    className?: string;
}
//# sourceMappingURL=anchor-navigation-list.interface.d.ts.map