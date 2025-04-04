import { FunctionalIconNames } from '@zepdev/design-system-component-library-react';
import { ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react';

export declare enum ZsdButtonVariant {
    PrimaryDark = "primary-dark",
    SecondaryDark = "secondary-dark",
    SecondaryLight = "secondary-light",
    PrimaryLight = "primary-light"
}
export interface ZsdButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    label?: string;
    variant?: ZsdButtonVariant;
    href?: string;
    icon?: FunctionalIconNames;
    iconPosition?: 'left' | 'right';
    buttonType?: 'default' | 'download';
    isLoading?: boolean;
    children?: ReactNode;
    onClick?: (ev: MouseEvent<HTMLElement>) => void;
}
//# sourceMappingURL=zsd-button.interface.d.ts.map