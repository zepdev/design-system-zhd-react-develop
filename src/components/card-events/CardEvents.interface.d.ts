import { CardEventProps } from './card-event';
import { HeaderLongProps } from '../header-long';

export interface CardEventsProps extends HeaderLongProps {
    cards: CardEventProps[];
    setCurrentPage: (page: number) => void;
    currentPage: number;
    total: number;
}
//# sourceMappingURL=CardEvents.interface.d.ts.map