import { HTMLAttributes } from 'react';

export interface RadioProps extends HTMLAttributes<HTMLInputElement> {
    id: string;
    name: string;
    checked?: boolean;
    label: string;
    value?: string;
    required?: boolean;
    disabled?: boolean;
    error?: boolean;
}
//# sourceMappingURL=radio.interface.d.ts.map