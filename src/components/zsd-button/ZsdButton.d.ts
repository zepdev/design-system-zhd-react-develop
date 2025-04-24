import { FC } from 'react';
import { ClassGroup, ClassGroupId } from 'tailwind-merge/src/lib/types';
import { ZsdButtonProps } from './zsd-button.interface';

export declare const zsdButtonVariants: Record<ClassGroupId, ClassGroup>;
export declare const zsdButton: (props?: ({
    variant?: string | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export declare const Button: FC<ZsdButtonProps>;
//# sourceMappingURL=ZsdButton.d.ts.map