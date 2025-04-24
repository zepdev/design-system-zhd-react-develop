import { FunctionalIconNames } from '@zepdev/design-system-component-library-react';

export interface HeroProps {
    headline: string;
    image: string;
    imageAlt?: string;
    description?: string;
    buttonPrimary?: string;
    buttonSecondary?: string;
    buttonPrimaryUrl?: string;
    buttonSecondaryUrl?: string;
    buttonPrimaryIcon?: FunctionalIconNames;
    buttonSecondaryIcon?: FunctionalIconNames;
    buttonPrimaryIconPosition?: 'left' | 'right' | 'none';
    buttonSecondaryIconPosition?: 'left' | 'right' | 'none';
    isErrorPage?: boolean;
}
//# sourceMappingURL=hero.interface.d.ts.map