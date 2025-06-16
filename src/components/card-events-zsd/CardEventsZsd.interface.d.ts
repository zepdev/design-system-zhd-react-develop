import { CardEventProps } from './card-event';
import { HeaderLongProps } from '../header-long';

export interface CardEventsZsdProps extends HeaderLongProps {
    cards: CardEventProps[];
    setCurrentPage: (page: number) => void;
    currentPage: number;
    total: number;
}
//# sourceMappingURL=CardEventsZsd.interface.d.ts.map