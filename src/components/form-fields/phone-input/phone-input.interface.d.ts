import { InputHTMLAttributes } from 'react';
import { DefaultInputComponentProps, Props } from 'react-phone-number-input';

export interface PhoneInputProps extends Pick<Props<DefaultInputComponentProps>, 'readOnly' | 'className' | 'disabled' | 'defaultCountry'>, InputHTMLAttributes<HTMLInputElement> {
    id?: string;
    name: string;
    label?: string;
    error?: string;
    required?: boolean;
    notRequiredHint?: string;
    onChange: (event: {
        target: {
            value: string;
            name: string;
        };
    }) => void;
    value?: string;
}
//# sourceMappingURL=phone-input.interface.d.ts.map