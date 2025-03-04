import { BaseMediaProps, MediaTextBodyProps, MediaTextButtonProps, MediaTextContentProps, MediaTextImageProps, MediaTextVariant } from './mediaText.interface';

export declare const useMediaTextContext: () => {
    imageAlignment: string;
    variant: MediaTextVariant;
    headline: string;
    tagline: string;
    description: string;
};
declare const MediaText: {
    ({ imageAlignment, children, variant, headline, tagline, description, }: MediaTextContentProps & BaseMediaProps): import("react/jsx-dev-runtime").JSX.Element;
    Image: ({ src, alt, aspectRatio }: MediaTextImageProps) => import("react/jsx-dev-runtime").JSX.Element;
    Body: ({ children }: MediaTextBodyProps) => import("react/jsx-dev-runtime").JSX.Element;
    Tagline: () => import("react/jsx-dev-runtime").JSX.Element;
    Headline: () => import("react/jsx-dev-runtime").JSX.Element;
    Description: () => import("react/jsx-dev-runtime").JSX.Element;
    Button: ({ labelPrimary, labelSecondary, onClickPrimary, onClickSecondary }: MediaTextButtonProps) => import("react/jsx-dev-runtime").JSX.Element;
};
export { MediaText };
//# sourceMappingURL=MediaText.d.ts.map