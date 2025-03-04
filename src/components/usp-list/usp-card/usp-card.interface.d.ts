import { ProductIcons } from '@zepdev/design-system-component-library-react';

export type ProductIconNames = keyof typeof ProductIcons;
export interface USPProps {
    iconName?: ProductIconNames;
    count?: string;
    headline: string;
    description: string;
    className?: string;
}
//# sourceMappingURL=usp-card.interface.d.ts.map