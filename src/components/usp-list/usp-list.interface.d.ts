import { USPProps } from '../USP';
import { HeaderLongProps } from '../header-long';

export interface USPListProps extends Omit<HeaderLongProps, 'headline'> {
    headline: string;
    uspCards?: USPProps[];
    id?: string;
}
//# sourceMappingURL=usp-list.interface.d.ts.map