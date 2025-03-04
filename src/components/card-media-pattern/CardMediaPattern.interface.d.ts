import { CardMediaProps } from './card-media-component';
import { HeaderLongProps } from '../header-long';
import { Tab } from '../anchor-navigation-list/anchor-navigation-tab';

export interface CardsSectionProps extends Tab {
    cards: CardMediaProps[];
}
export interface CardMediaPatternProps extends Omit<HeaderLongProps, 'textColor'> {
    className?: string;
    tabs: CardsSectionProps[];
    imageOrientation?: 'horizontal' | 'vertical';
}
//# sourceMappingURL=CardMediaPattern.interface.d.ts.map