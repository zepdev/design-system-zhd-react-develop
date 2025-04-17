import { FunctionalIconNames } from '@zepdev/design-system-component-library-react';

export interface CardProps {
    imageSrc: string;
    imageAlt?: string;
    url?: string;
    tagline?: string;
    title: string;
    description?: string;
    linkLabel?: string;
    linkType?: 'internal-link' | 'external-link' | 'download' | 'none';
    icon?: FunctionalIconNames;
    iconPosition?: 'before' | 'after';
    gtmHeadline?: string;
    gtmid?: string;
}
//# sourceMappingURL=card.interface.d.ts.map