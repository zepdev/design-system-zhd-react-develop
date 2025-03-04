import { ButtonHTMLAttributes, MouseEvent } from 'react';

export interface TeaserSimpleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    teaserText: string;
    buttonText: string;
    buttonTitle?: string;
    onClick?: (ev: MouseEvent<HTMLElement>) => void;
}
//# sourceMappingURL=teaser-simple.interface.d.ts.map