import { CardProps } from '../card/card.interface';
import { HeaderLongProps } from '../header-long';

export interface CardPatternProps extends Partial<Omit<HeaderLongProps, 'variant'>> {
    items: Omit<CardProps, 'variant'>[];
    id?: string;
}
//# sourceMappingURL=CardPattern.interface.d.ts.map