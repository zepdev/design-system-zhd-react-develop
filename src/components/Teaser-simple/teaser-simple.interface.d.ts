import { ButtonHTMLAttributes, MouseEvent } from 'react';
import { FunctionalIconNames } from '@zepdev/design-system-component-library-react';

export interface TeaserSimpleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    teaserText: string;
    buttonText: string;
    buttonTitle?: string;
    buttonUrl?: string;
    buttonAction?: 'none' | 'open-external-link' | 'open-internal-link' | 'download-file' | 'open-contact-modal';
    iconPosition?: 'none' | 'left' | 'right';
    icon?: FunctionalIconNames | 'none';
    onClick?: (ev: MouseEvent<HTMLElement>) => void;
}
//# sourceMappingURL=teaser-simple.interface.d.ts.map