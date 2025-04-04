import { FunctionalIconNames } from '@zepdev/design-system-component-library-react';

export interface SmallHeroProps {
    imageSrc: string;
    imageAlt?: string;
    headline?: string;
    subline?: string;
    description?: string;
    buttonPrimary?: string;
    buttonSecondary?: string;
    buttonPrimaryUrl?: string;
    buttonSecondaryUrl?: string;
    buttonPrimaryIcon?: FunctionalIconNames;
    buttonSecondaryIcon?: FunctionalIconNames;
    buttonPrimaryIconPosition?: 'left' | 'right';
    buttonSecondaryIconPosition?: 'left' | 'right';
    isErrorPage?: boolean;
}
//# sourceMappingURL=small-hero.interface.d.ts.map