import { BlocksContent } from '@strapi/blocks-react-renderer';
import { GlobalVariants } from '../../interfaces/global-variants';
import { HeaderLongProps } from '../header-long';
import { MouseEvent } from 'react';
import { ZpsButtonVariant } from '../zps-button';
import { FunctionalIconNames, TableColumn } from '@zepdev/design-system-component-library-react';

export interface TableProps {
    columns: TableColumn<object>[];
    dataSource: object[];
    message?: string;
}
export interface AccordionContent {
    title: string;
    accordionContent: BlocksContent;
    table?: TableProps;
    message?: string;
    buttonText?: string;
    buttonVariant?: ZpsButtonVariant;
    buttonOnClick?: (ev: MouseEvent<HTMLElement>) => void;
    buttonUrl?: string;
    buttonIcon?: FunctionalIconNames;
}
export interface AccordionPatternProps extends Partial<Omit<HeaderLongProps, 'variant'>> {
    topDescription?: BlocksContent;
    bottomDescription?: BlocksContent;
    contents: AccordionContent[];
    variant?: GlobalVariants;
    headerPosition?: 'top' | 'left';
    buttonText?: string;
    buttonOnClick?: (ev: MouseEvent<HTMLElement>) => void;
    buttonUrl?: string;
    buttonVariant?: ZpsButtonVariant;
    buttonIcon?: FunctionalIconNames;
    id?: string;
}
//# sourceMappingURL=accordion.interface.d.ts.map