import { default as React } from 'react';
import { ClassGroup, ClassGroupId } from 'tailwind-merge/src/lib/types';
import { ZpsButtonProps } from './zsd-button.interface';

export declare const zpsButtonVariants: Record<ClassGroupId, ClassGroup>;
export declare const zsdButton: (props?: ({
    variant?: string | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export declare const Button: React.FC<ZpsButtonProps>;
//# sourceMappingURL=ZsdButton.d.ts.map