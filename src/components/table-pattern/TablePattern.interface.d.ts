import { HeaderLongComponentProps } from '../header-long-component';
import { ZsdButtonVariant } from '../zsd-button';
import { BlocksContent } from '@strapi/blocks-react-renderer';
import { FunctionalIconNames, TableColumn } from '@zepdev/design-system-component-library-react';
import { MouseEvent } from 'react';
import { GlobalVariants } from '../../interfaces/global-variants';

export interface TablePatternProps extends Omit<HeaderLongComponentProps, 'variant'> {
    columns: TableColumn<object>[];
    dataSource: object[];
    content?: BlocksContent;
    message?: string;
    tableButtonLabel?: string;
    tableButtonOnClick?: (ev: MouseEvent<HTMLElement>) => void;
    tableButtonVariant?: ZsdButtonVariant;
    tableButtonIcon?: FunctionalIconNames;
    tableButtonIconPosition?: 'left' | 'right';
    tableButtonUrl?: string;
    variant?: GlobalVariants;
    id?: string;
}
//# sourceMappingURL=TablePattern.interface.d.ts.map