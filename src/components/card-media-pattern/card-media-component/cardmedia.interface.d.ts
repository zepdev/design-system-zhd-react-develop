import { MouseEvent } from 'react';

export interface CardMediaProps {
    imageSrc: string;
    imageAlt: string;
    imageOrientation?: 'vertical' | 'horizontal';
    headline: string;
    description: string;
    linkText: string;
    onDownload: (ev: MouseEvent<HTMLElement>) => void;
    className?: string;
}
//# sourceMappingURL=cardmedia.interface.d.ts.map