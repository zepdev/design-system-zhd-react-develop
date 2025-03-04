import { MouseEvent } from 'react';

export interface LinkComponentProps {
    linkText?: string;
    linkHref?: string;
    type?: 'primary-button' | 'secondary-button' | 'link' | 'none';
    onClick?: (ev: MouseEvent<HTMLElement>) => void;
}
export interface HeaderLongComponentProps extends LinkComponentProps {
    tagline?: string;
    headline: string;
    description?: string;
}
//# sourceMappingURL=HeaderLongComponent.interface.d.ts.map