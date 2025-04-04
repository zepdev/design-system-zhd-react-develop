import { CardProps } from "../card/card.interface";
import { HeaderLongProps } from '@/components/header-long';

export interface CardPatternProps extends Partial<Omit<HeaderLongProps, 'variant'>> {
  items: Omit<CardProps, 'variant'>[];
  id?: string;
}