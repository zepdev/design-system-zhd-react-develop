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
}
//# sourceMappingURL=cardmedia.interface.d.ts.map