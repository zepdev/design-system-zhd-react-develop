import { ReactNode } from 'react';

export declare enum MediaTextVariant {
    Zps = "ZPS",
    Cat = "CAT"
}
export interface BaseMediaProps {
    variant?: MediaTextVariant;
    imageAlignment?: 'left' | 'right';
}
export interface MediaTextContentProps {
    headline?: string;
    tagline?: string;
    description?: string;
    children?: ReactNode;
}
export interface MediaTextBodyProps {
    children: ReactNode;
}
export interface MediaTextImageProps {
    src: string;
    alt: string;
    aspectRatio?: '4:3' | '3:4';
    orientation?: 'landscape' | 'portrait';
    imageAlignment?: 'left' | 'right';
    variant?: MediaTextVariant;
}
export interface MediaTextTaglineProps {
    children: ReactNode;
}
export interface MediaTextBodyProps {
    children: ReactNode;
}
export interface MediaTextHeadlineProps {
    children: ReactNode;
}
export interface MediaTextDescriptionProps {
    children: ReactNode;
}
export interface MediaTextButtonProps {
    children?: ReactNode;
    labelPrimary: string;
    labelSecondary: string;
    onClickPrimary?: () => void;
    onClickSecondary?: () => void;
}
//# sourceMappingURL=mediaText.interface.d.ts.map