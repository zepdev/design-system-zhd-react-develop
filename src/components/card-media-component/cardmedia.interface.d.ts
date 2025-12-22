import { FunctionalIconNames } from '../../../node_modules/@zepdev/design-system-component-library-react/dist/lib';
import { GlobalVariants } from '../../interfaces/global-variants';

export interface CardMediaProps {
    imageSrc: string;
    imageAlt: string;
    imageOrientation?: 'vertical' | 'horizontal' | 'none';
    headline: string;
    description: string;
    linkText: string;
    linkSrc: string;
    linkType?: 'internal-link' | 'external-link' | 'download' | 'none';
    variant?: GlobalVariants;
    className?: string;
    icon?: FunctionalIconNames | 'none';
    iconPlacement?: 'before' | 'after';
    fullWidth?: boolean;
}
//# sourceMappingURL=cardmedia.interface.d.ts.map