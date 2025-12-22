import { CardMediaProps } from '../card-media-component';
import { HeaderLongProps } from '../header-long';

export interface CardMediaGridProps extends Omit<HeaderLongProps, 'variant'> {
    cards: CardMediaProps[];
    className?: string;
    imageOrientation?: 'horizontal' | 'vertical' | 'none';
    id?: string;
}
//# sourceMappingURL=CardMediaGrid.interface.d.ts.map