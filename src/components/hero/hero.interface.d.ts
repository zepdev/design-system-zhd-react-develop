import { FunctionalIconNames } from '@zepdev/design-system-component-library-react';
import { MouseEvent } from 'react';

export interface HeroProps {
    headline: string;
    image: string;
    imageAlt?: string;
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
    isErrorPage?: boolean;
}
//# sourceMappingURL=hero.interface.d.ts.map