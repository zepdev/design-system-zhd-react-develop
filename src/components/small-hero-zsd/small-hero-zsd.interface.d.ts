import { FunctionalIconNames } from '@zepdev/design-system-component-library-react';

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
    buttonPrimaryIcon?: FunctionalIconNames;
    buttonSecondaryIcon?: FunctionalIconNames;
    buttonPrimaryIconPosition?: 'left' | 'right' | 'none';
    buttonSecondaryIconPosition?: 'left' | 'right' | 'none';
    buttonPrimaryAction?: 'none' | 'open-external-link' | 'open-internal-link' | 'download-file';
    buttonSecondaryAction?: 'none' | 'open-external-link' | 'open-internal-link' | 'download-file';
    backgroundVariant?: 'indigo' | 'gradient';
}
//# sourceMappingURL=small-hero-zsd.interface.d.ts.map