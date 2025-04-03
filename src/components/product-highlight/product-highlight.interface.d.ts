import { BlocksContent } from '@strapi/blocks-react-renderer';
import { MouseEvent } from 'react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { HeaderLongProps } from '../header-long';
import { ZpsButtonVariant } from '../zps-button';
import { FunctionalIconNames } from '../../../node_modules/@zepdev/design-system-component-library-react';

export interface ProductHighLightProps extends Partial<Omit<HeaderLongProps, 'variant'>> {
    imageAlignment?: 'left' | 'right';
    imageSrc: string;
    imageAlt: string;
    productDetails: BlocksContent[];
    buttonText?: string;
    buttonVariant?: ZpsButtonVariant | 'link';
    onClick?: (ev: MouseEvent<HTMLElement>) => void;
    variant?: GlobalVariants;
    id?: string;
    buttonUrl?: string;
    buttonType?: 'download' | 'default';
    buttonIcon?: FunctionalIconNames;
    buttonIconPosition?: 'left' | 'right';
}
//# sourceMappingURL=product-highlight.interface.d.ts.map