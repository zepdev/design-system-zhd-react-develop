import { BlocksContent } from '@strapi/blocks-react-renderer';
import { MouseEvent } from 'react';
import { FunctionalIconNames, TableColumn } from '@zepdev/design-system-component-library-react';
import { ZpsButtonVariant } from '../zps-button';
import { GlobalVariants } from '../../interfaces/global-variants';
import { HeaderLongComponentProps } from '../header-long-component';

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
//# sourceMappingURL=TablePattern.interface.d.ts.map