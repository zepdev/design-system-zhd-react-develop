import { FunctionalIconNames } from '@zepdev/design-system-component-library-react';

export interface SmallHeroZhdProps {
    imageSrc: string;
    imageAlt?: string;
    headline?: string;
    subline?: string;
    description?: string;
    variant?: 'default' | 'indigo';
    buttonPrimary?: string;
    buttonSecondary?: string;
    buttonPrimaryUrl?: string;
    buttonSecondaryUrl?: string;
    buttonPrimaryIcon?: FunctionalIconNames;
    buttonSecondaryIcon?: FunctionalIconNames;
    buttonPrimaryIconPosition?: 'left' | 'right' | 'none';
    buttonSecondaryIconPosition?: 'left' | 'right' | 'none';
    isErrorPage?: boolean;
    buttonPrimaryAction?: 'none' | 'open-external-link' | 'open-internal-link' | 'download-file';
    buttonSecondaryAction?: 'none' | 'open-external-link' | 'open-internal-link' | 'download-file';
}
//# sourceMappingURL=small-hero-zhd.interface.d.ts.map