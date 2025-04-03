import { BlocksContent } from '@strapi/blocks-react-renderer';
import { ReactNode } from 'react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { FunctionalIconNames } from '@zepdev/design-system-component-library-react';

export interface MediaTextContentProps extends MediaTextImageProps, MediaTextButtonProps {
    headline?: string;
    tagline?: string;
    content: BlocksContent;
    variant?: GlobalVariants;
    imageAlignment?: 'left' | 'right';
}
export interface MediaTextBodyProps {
    children: ReactNode;
}
export interface MediaTextImageProps {
    src: string;
    alt: string;
}
export interface MediaTextButtonProps {
    labelPrimary?: string;
    labelSecondary?: string;
    onClickPrimary?: () => void;
    onClickSecondary?: () => void;
    urlPrimary?: string;
    urlSecondary?: string;
    iconPrimary?: FunctionalIconNames;
    iconSecondary?: FunctionalIconNames;
    iconPrimaryPosition?: 'left' | 'right';
    iconSecondaryPosition?: 'left' | 'right';
}
//# sourceMappingURL=MediaText.interface.d.ts.map