import { FunctionalIconNames } from '@zepdev/design-system-component-library-react';
import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: FunctionalIconNames;
    hasInfoIcon?: boolean;
    infoTitle?: string;
    placeholder?: string;
    required?: boolean;
    notRequiredHint?: string;
    message?: string;
    messageAriaLive?: 'assertive' | 'polite' | 'off';
    state?: 'error' | 'info' | 'default' | 'disabled';
    onIconToggle?: () => void;
    onIconInfoClick?: () => void;
}
export declare const InputScope = "zep-input";
//# sourceMappingURL=input.interface.d.ts.map