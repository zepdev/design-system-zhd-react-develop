import { default as React } from 'react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { AnchorNavigationCardProps } from './anchor-navigation-card.interface';

export declare const anchorCardVariants: {
    ZPS: string[];
    CAT: string[];
};
export declare const anchorNavigationCardCva: (props?: ({
    variant?: GlobalVariants.Zps | GlobalVariants.Cat | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export declare const AnchorNavigationCard: React.FC<AnchorNavigationCardProps>;
//# sourceMappingURL=AnchorNavigationCard.d.ts.map