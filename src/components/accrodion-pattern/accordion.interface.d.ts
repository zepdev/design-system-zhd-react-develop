import { ZsdButtonVariant } from '../zsd-button';
import { BlocksContent } from '@strapi/blocks-react-renderer';
import { FunctionalIconNames, LinkTarget, TableColumn } from '@zepdev/design-system-component-library-react';
import { MouseEvent } from 'react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { HeaderLongProps } from '../header-long';

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
    buttonVariant?: ZsdButtonVariant;
    buttonOnClick?: (ev: MouseEvent<HTMLElement>) => void;
    buttonUrl?: string;
    buttonIcon?: FunctionalIconNames;
}
export interface AccordionPatternProps extends Partial<Omit<HeaderLongProps, 'variant'>> {
    topDescription?: BlocksContent;
    bottomDescription?: BlocksContent;
    contents: AccordionContent[];
    variant?: GlobalVariants;
    headerPosition?: 'top' | 'left' | 'none';
    buttonText?: string;
    buttonOnClick?: (ev: MouseEvent<HTMLElement>) => void;
    buttonUrl?: string;
    buttonVariant?: 'primary-dark' | 'secondary-dark';
    buttonIcon?: FunctionalIconNames;
    id?: string;
    target?: LinkTarget;
}
//# sourceMappingURL=accordion.interface.d.ts.map