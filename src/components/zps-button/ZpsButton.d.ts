import { ZpsButtonProps, ZpsButtonVariant } from './zps-button.interface';
import { FC } from 'react';

export declare const zpsButtonVariants: {
    primary: string[];
    "secondary-zps": string[];
    secondary: string[];
    "secondary-cat": string[];
    tertiary: string[];
};
export declare const zpsbutton: (props?: ({
    variant?: ZpsButtonVariant | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export declare const Button: FC<ZpsButtonProps>;
//# sourceMappingURL=ZpsButton.d.ts.map