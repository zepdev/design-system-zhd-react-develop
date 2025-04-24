import { ButtonHTMLAttributes } from 'react';

export interface TeaserSimpleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    teaserText: string;
    buttonText: string;
    buttonTitle?: string;
    buttonUrl?: string;
    buttonAction?: 'none' | 'open-external-link' | 'open-internal-link' | 'download-file';
}
//# sourceMappingURL=teaser-simple.interface.d.ts.map