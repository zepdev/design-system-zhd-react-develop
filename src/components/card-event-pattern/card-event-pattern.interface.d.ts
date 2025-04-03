import { GlobalVariants } from '../../interfaces/global-variants';
import { CardEventProps } from './card-event';
import { HeaderLongComponentProps } from '../header-long-component';

export interface CardEventPatternProps extends HeaderLongComponentProps {
    items: Omit<CardEventProps, 'variant'>[];
    variant?: GlobalVariants;
    buttonLabel: string;
}
//# sourceMappingURL=card-event-pattern.interface.d.ts.map