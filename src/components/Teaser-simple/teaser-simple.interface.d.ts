import { ButtonHTMLAttributes, MouseEvent } from 'react';

export interface TeaserSimpleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    teaserText: string;
    buttonText: string;
    buttonTitle?: string;
    buttonUrl?: string;
    buttonAction?: 'none' | 'open-external-link' | 'open-internal-link' | 'download-file' | 'open-contact-modal';
    onClick?: (ev: MouseEvent<HTMLElement>) => void;
}
//# sourceMappingURL=teaser-simple.interface.d.ts.map