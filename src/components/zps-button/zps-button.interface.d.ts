import { ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react';
import { FunctionalIconNames } from '@zepdev/design-system-component-library-react';

export declare enum ZpsButtonVariant {
    Primary = "primary",
    Secondary = "secondary",
    SecondaryCat = "secondary-cat",
    SecondaryZps = "secondary-zps",
    Tertiary = "tertiary"
}
export interface ZpsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    label?: string;
    variant?: ZpsButtonVariant;
    icon?: FunctionalIconNames;
    iconPosition?: 'left' | 'right';
    isLoading?: boolean;
    children?: ReactNode;
    href?: string;
    buttonType?: 'default' | 'download';
    onClick?: (ev: MouseEvent<HTMLElement>) => void;
}
//# sourceMappingURL=zps-button.interface.d.ts.map