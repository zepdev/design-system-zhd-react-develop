import { BlocksContent } from '@strapi/blocks-react-renderer';
import { FunctionalIconNames } from '@zepdev/design-system-component-library-react';
import { default as React } from 'react';

export interface RichTextProps extends Partial<RichTextBaseProps> {
    content: BlocksContent;
    className?: string;
    button?: string;
    buttonUrl?: string;
    buttonIcon?: FunctionalIconNames;
    buttonIconPosition?: 'left' | 'right' | 'none';
    buttonAction?: 'none' | 'open-external-link' | 'open-internal-link' | 'download-file';
}
export interface ImageProps {
    url: string;
    alt: string;
    description: string;
}
export interface RichTextBaseProps {
    children: React.ReactNode;
    className?: string;
}
export interface HeaderProps extends RichTextBaseProps {
    level: 1 | 2 | 3 | 4 | 5 | 6;
}
export interface ListProps extends Omit<RichTextBaseProps, 'children'> {
    items: React.ReactNode[];
    ordered: boolean;
}
//# sourceMappingURL=RichText.interface.d.ts.map