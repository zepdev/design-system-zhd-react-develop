import { BlocksContent } from '@strapi/blocks-react-renderer';
import { MouseEvent } from 'react';
import { FunctionalIconNames } from '../../../node_modules/@zepdev/design-system-component-library-react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { HeaderLongProps } from '../header-long';
import { ZsdButtonVariant } from '../zsd-button';

export interface ProductHighLightProps extends Partial<Omit<HeaderLongProps, 'variant'>> {
    imageAlignment?: 'left' | 'right' | 'none';
    imageSrc: string;
    imageAlt: string;
    productDetails: BlocksContent[];
    buttonText?: string;
    buttonVariant?: ZsdButtonVariant | 'link';
    onClick?: (ev: MouseEvent<HTMLElement>) => void;
    variant?: GlobalVariants;
    id?: string;
    buttonUrl?: string;
    buttonType?: 'download' | 'default' | 'none';
    buttonIcon?: FunctionalIconNames;
    buttonIconPosition?: 'left' | 'right' | 'none';
}
//# sourceMappingURL=product-highlight.interface.d.ts.map