import { HTMLAttributes } from 'react';
import { GlobalVariants } from '../../interfaces/global-variants';

export interface CardSquareProps extends HTMLAttributes<HTMLDivElement> {
    imageSrc: string;
    imageAlt: string;
    headline: string;
    description?: string;
    variant?: GlobalVariants;
    url: string;
    gtmHeadline?: string;
    gtmId?: string;
}
//# sourceMappingURL=card-square.interface.d.ts.map