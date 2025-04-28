import { GlobalVariants } from '../../interfaces/global-variants';
import { HeaderLongComponentProps } from '../header-long-component';
import { CardEventProps } from './card-event';

export interface CardEventPatternProps extends HeaderLongComponentProps {
    items: Omit<CardEventProps, 'variant'>[];
    variant?: GlobalVariants;
    buttonLabel: string;
    locale?: string;
}
//# sourceMappingURL=card-event-pattern.interface.d.ts.map