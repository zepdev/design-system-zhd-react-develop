import { BlocksContent } from '@strapi/blocks-react-renderer';
import { FunctionalIconNames, LinkTarget } from '@zepdev/design-system-component-library-react';
import { MouseEvent } from 'react';
import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';

export interface LinkComponentProps {
    linkText?: string;
    linkHref?: string;
    type?: 'primary-dark' | 'secondary-dark' | 'link' | 'none';
    onClick?: (ev: MouseEvent<HTMLElement>) => void;
    variant?: GlobalVariants | GlobalVariantExtended;
    className?: string;
    headerButtonIcon?: FunctionalIconNames;
    headerButtonIconPosition?: 'left' | 'right' | 'none';
    target?: LinkTarget;
}
export interface HeaderLongComponentProps extends LinkComponentProps {
    tagline?: string;
    headline: string;
    description?: BlocksContent;
}
//# sourceMappingURL=HeaderLongComponent.interface.d.ts.map