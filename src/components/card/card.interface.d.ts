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
    icon?: FunctionalIconNames | 'none';
    iconPosition?: 'before' | 'after' | 'none';
    gtmHeadline?: string;
    gtmid?: string;
}
//# sourceMappingURL=card.interface.d.ts.map