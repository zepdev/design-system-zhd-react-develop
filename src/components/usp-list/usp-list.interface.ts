import { USPProps } from './usp-card';
import { HeaderLongComponentProps } from '../header-long-component';

export interface USPListProps extends HeaderLongComponentProps {
  uspCards: USPProps[];
}
