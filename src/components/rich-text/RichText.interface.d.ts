import { MouseEvent, PropsWithChildren, ReactElement, ReactNode } from 'react';
import { BlocksContent } from '@strapi/blocks-react-renderer';
import { HeaderShortComponentProps } from '../header-short-component';
import { TableProps } from '@zepdev/design-system-component-library-react';

export interface AccordionContent {
    title: string;
    accordionContent: BlocksContent;
}
export interface AccordionProps {
    contents: AccordionContent[];
}
export interface Image {
    src: string;
    alt: string;
}
export interface ImagesProps {
    images: Array<Image>;
}
export type HeaderProps = PropsWithChildren<{
    level: 1 | 2 | 3 | 4 | 5 | 6;
}>;
export interface ListProps {
    items: ReactNode[];
    ordered: boolean;
}
export interface BlocksRichTextProps {
    content: BlocksContent;
}
export interface CertificatesProps {
    certificateImages: Image[];
    title: string;
}
export interface RichTextProps extends HeaderShortComponentProps {
    children: ReactElement<TableProps> | ReactElement<AccordionProps> | ReactElement<ImagesProps> | ReactElement<BlocksRichTextProps> | ReactElement<CertificatesProps>;
    onDownload: (ev: MouseEvent<HTMLElement>) => void;
    description: string;
    buttonText: string;
}
//# sourceMappingURL=RichText.interface.d.ts.map