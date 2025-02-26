import { CardSquareProps } from './card-square';
import { HeaderLongProps } from '../header-long';

export interface CardSquareListProps extends Partial<HeaderLongProps> {
  items: CardSquareProps[];
}
