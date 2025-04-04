import { ProductIcons } from '@zepdev/design-system-component-library-react';
import { GlobalVariants } from '../../interfaces/global-variants';

export type ProductIconNames = keyof typeof ProductIcons;

export enum HeaderShortDefault {
  default = 'default',
}

export interface USPProps {
  iconName?: ProductIconNames;
  count?: string;
  headline: string;
  description: string;
  variant?: GlobalVariants | HeaderShortDefault;
  className?: string;
}
