import { BlocksContent } from '@strapi/blocks-react-renderer';
import { MouseEvent } from 'react';
import { FunctionalIconNames, TableColumn } from '@zepdev/design-system-component-library-react';
import { ZpsButtonVariant } from '@/components/zps-button';
import { GlobalVariants } from '../../interfaces/global-variants';
import { HeaderLongComponentProps } from '@/components/header-long-component';

export interface TablePatternProps extends Omit<HeaderLongComponentProps, 'variant'> {
  columns: TableColumn<object>[];
  dataSource: object[];
  content?: BlocksContent;
  message?: string;
  tableButtonLabel?: string;
  tableButtonOnClick?: (ev: MouseEvent<HTMLElement>) => void;
  tableButtonVariant?: ZpsButtonVariant;
  tableButtonIcon?: FunctionalIconNames;
  tableButtonIconPosition?: 'left' | 'right';
  tableButtonUrl?: string;
  variant?: GlobalVariants;
  id?: string;
}
