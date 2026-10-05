import { HeroCta, HeroHeadingLevel, HeroImageComponent, HeroImageProps, HeroLinkComponent, HeroSlideData } from './hero-slider.interface';
/**
 * Shared building blocks of the ZHD `HeroSlider` — the tag chip, the CTA row,
 * the media and the overlay content. Behaviour is ported from the ZBM
 * design-system `hero-stage/_shared.tsx`; the visuals follow the Figma
 * "ZEP-New-Teaser-Homepage" design (`Teaser/Slider-16:9`, node 4:5344).
 */
export declare const HERO_FOCUS_RING: string;
/** Optional category chip pinned top-left over the image, as in the ZBM hero (renders only when set). */
export declare function HeroTag({ label }: {
    label: string;
}): import("react/jsx-dev-runtime").JSX.Element;
/**
 * Row of up to two CTAs, 16px apart (Figma "button container"). On mobile they
 * each take an equal half, from `sm` upward their natural width.
 */
export declare function HeroCtas({ primaryCta, secondaryCta, linkComponent, interactive, onCtaClick, }: {
    primaryCta?: HeroCta;
    secondaryCta?: HeroCta;
    linkComponent?: HeroLinkComponent;
    interactive?: boolean;
    onCtaClick?: () => void;
}): import("react/jsx-dev-runtime").JSX.Element | null;
/**
 * Fills its (relative) parent with the cover image. The horizontal focus point
 * is published as a CSS variable and read by the image's `object-position`, so
 * it works for the native `<img>` and an injected `next/image` alike. The Figma
 * teaser lays the content straight on the photo, so there is no scrim.
 */
export declare function HeroMedia({ image, focusX, imageComponent, }: {
    image: HeroImageProps;
    focusX?: number;
    imageComponent?: HeroImageComponent;
}): import("react/jsx-dev-runtime").JSX.Element;
/**
 * The content overlaid bottom-left on a slide (Figma "content hero": 831px
 * wide, 156px from the left and 80px from the bottom on desktop; headline,
 * 16px, description, 24px, buttons). Rendered absolutely over the media inside
 * a `relative` parent.
 */
export declare function HeroOverlayContent({ slide, headingLevel, linkComponent, interactive, onCtaClick, }: {
    slide: HeroSlideData;
    headingLevel?: HeroHeadingLevel;
    linkComponent?: HeroLinkComponent;
    interactive?: boolean;
    onCtaClick?: () => void;
}): import("react/jsx-dev-runtime").JSX.Element;
/**
 * The `relative` aspect-ratio box every slide sits in (square corners, per
 * Figma); `overflow-hidden` clips the image to it. 16:9 from `md` up (Figma
 * 1677×943); the ratio steps down on smaller screens so the slide never gets
 * disproportionately tall.
 */
export declare const HERO_MEDIA_BOX: string;
//# sourceMappingURL=HeroSliderParts.d.ts.map