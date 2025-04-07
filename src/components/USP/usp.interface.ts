import { ProductIcons } from '@zepdev/design-system-component-library-react';

export type ProductIconNames = keyof typeof ProductIcons;

export enum HeaderShortDefault {
  default = 'default',
}

export interface USPProps {
  iconName?: ProductIconNames;
  count?: string;
  headline: string;
  description: string;
  className?: string;
}
