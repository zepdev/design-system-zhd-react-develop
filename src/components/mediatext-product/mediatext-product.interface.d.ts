import { ReactNode } from '../../../node_modules/@types/react';

export interface MediaTextProductProps {
    className?: string;
    headline: string;
    subline?: string;
    description?: string;
    contents?: {
        title: string;
        content: ReactNode;
    }[];
    imageSrc: string;
    imageAlt?: string;
    buttonLabel?: string;
    fileSizes?: string;
    hasButton?: boolean;
}
//# sourceMappingURL=mediatext-product.interface.d.ts.map