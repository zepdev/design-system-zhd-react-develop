import { GlobalVariants } from '../../interfaces/global-variants';
import { CardSquareProps } from '../card-square';
import { HeaderLongProps } from '@/components/header-long';

export interface CardSquareListProps extends Partial<Omit<HeaderLongProps, 'variant'>> {
  items: Omit<CardSquareProps, 'variant'>[];
  variant?: GlobalVariants;
  id?: string;
}
