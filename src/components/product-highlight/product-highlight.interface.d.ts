import { ButtonHTMLAttributes, MouseEvent } from 'react';
import { ZsdButtonVariant } from '../zsd-button';

export type ProductItem = {
    title?: string;
    content: string;
};
export interface ProductHighLightProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    imageAlignment?: 'left' | 'right';
    productImageSrc: string;
    imageAlt: string;
    productDetails: ProductItem[];
    buttonText: string;
    buttonTitle?: string;
    buttonVariant?: ZsdButtonVariant;
    onClick?: (ev: MouseEvent<HTMLElement>) => void;
}
//# sourceMappingURL=product-highlight.interface.d.ts.map