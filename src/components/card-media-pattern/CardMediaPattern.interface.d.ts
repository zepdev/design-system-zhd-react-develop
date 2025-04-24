import { CardMediaProps } from '../card-media-component';
import { HeaderLongProps } from '../header-long';

export interface CardMediaPatternProps extends Omit<HeaderLongProps, 'variant'> {
    cards: CardMediaProps[];
    className?: string;
    imageOrientation?: 'horizontal' | 'vertical' | 'none';
    id?: string;
}
//# sourceMappingURL=CardMediaPattern.interface.d.ts.map