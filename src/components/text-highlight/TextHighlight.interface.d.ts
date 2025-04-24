import { ZsdButtonVariant } from '../zsd-button';
import { BlocksContent } from '@strapi/blocks-react-renderer';
import { FunctionalIconNames, TableColumn } from '@zepdev/design-system-component-library-react';
import { MouseEvent, ReactElement } from 'react';
import { AccordionContent } from '../accrodion-pattern';
import { HeaderLongProps } from '../header-long';

export interface AccordionProps {
    contents: AccordionContent[];
}
export interface TableProps {
    columns: TableColumn<object>[];
    dataSource: object[];
    tableMessage?: string;
}
export interface RichTextProps {
    content: BlocksContent;
}
export interface THContext {
    buttonOnClick?: (ev: MouseEvent<HTMLElement>) => void;
    buttonText?: string;
    message: string;
    buttonUrl?: string;
    buttonVariant?: ZsdButtonVariant | 'link';
    buttonType?: 'download' | 'default' | 'none';
    buttonIcon?: FunctionalIconNames;
    buttonIconPosition?: 'left' | 'right' | 'none';
}
export interface TextHighlightProps extends Partial<Omit<HeaderLongProps, 'variant'>>, Omit<THContext, 'variant'> {
    children: ReactElement<AccordionProps> | ReactElement<TableProps> | ReactElement<RichTextProps>;
    imageSrc: string;
    imageAlt: string;
    imageAlignment?: 'left' | 'right' | 'none';
    topDescription?: BlocksContent;
    bottomDescription?: BlocksContent;
    id?: string;
}
//# sourceMappingURL=TextHighlight.interface.d.ts.map