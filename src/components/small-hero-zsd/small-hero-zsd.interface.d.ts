import { FunctionalIconNames } from '@zepdev/design-system-component-library-react';
import { MouseEvent } from 'react';

export interface SmallHeroZsdProps {
    imageSrc: string;
    imageAlt?: string;
    headline: string;
    subline: string;
    description?: string;
    buttonPrimary?: string;
    buttonSecondary?: string;
    buttonPrimaryUrl?: string;
    buttonSecondaryUrl?: string;
    buttonPrimaryOnClick?: (ev: MouseEvent<HTMLElement>) => void;
    buttonPrimaryIcon?: FunctionalIconNames;
    buttonSecondaryIcon?: FunctionalIconNames;
    buttonPrimaryIconPosition?: 'left' | 'right' | 'none';
    buttonSecondaryIconPosition?: 'left' | 'right' | 'none';
    buttonPrimaryAction?: 'none' | 'open-external-link' | 'open-internal-link' | 'download-file' | 'open-contact-modal';
    buttonSecondaryAction?: 'none' | 'open-external-link' | 'open-internal-link' | 'download-file' | 'open-contact-modal';
    backgroundVariant?: 'indigo' | 'gradient';
}
//# sourceMappingURL=small-hero-zsd.interface.d.ts.map