import { HTMLAttributes } from 'react';

export interface CardSquareProps extends HTMLAttributes<HTMLDivElement> {
    imageSrc: string;
    imageAlt: string;
    headline: string;
    description?: string;
    linkType?: 'internal-link' | 'external-link' | 'none' | 'download';
    url: string;
    gtmHeadline?: string;
    gtmId?: string;
}
//# sourceMappingURL=card-square.interface.d.ts.map