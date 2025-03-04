import { Tab } from '../anchor-navigation-list/anchor-navigation-tab';
import { ContactCardProps } from '../contact-card/contact-card.interface';
import { HeaderLongProps } from '../header-long/headerlong.interface';

export interface ContactCardSectionProps extends Tab {
    contacts: ContactCardProps[];
}
export interface ContactCardPatternProps extends Omit<HeaderLongProps, 'textColor'> {
    tabs: ContactCardSectionProps[];
}
//# sourceMappingURL=contact-card-pattern.interface.d.ts.map