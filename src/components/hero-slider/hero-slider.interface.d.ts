import { ElementType } from 'react';
/**
 * Types for the ZHD `HeroSlider` — a port of the ZBM design-system
 * `HeroSlider` (design-system-zbm-react `components/hero-stage`). The data
 * shape is kept identical so the Strapi `module.hero-slider` adapter can be
 * shared between the brands.
 */
/** Polymorphic link element (e.g. Next.js `<Link>`). Defaults to a native `<a>`. */
export type HeroLinkComponent = ElementType;
export interface HeroImageProps {
    src: string;
    alt: string;
    className?: string;
}
/**
 * Polymorphic image component. Defaults to a native `<img>`; inject a thin
 * `next/image` wrapper (with `fill`) to get responsive `srcset`s without the
 * design system depending on any framework. It receives only
 * `{ src, alt, className }` and must keep the image filling its (relative)
 * parent box. Define it at module scope (stable identity) so the image isn't
 * remounted on every render.
 */
export type HeroImageComponent = ElementType<HeroImageProps>;
export type HeroHeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
/** A call to action — rendered as a button-styled link. */
export interface HeroCta {
    label: string;
    href: string;
    /** Opens in a new tab with a safe `rel` when true. */
    external?: boolean;
}
/** The content + media of a single slide. */
export interface HeroSlideData {
    /** Category chip shown top-left over the image (e.g. "Sofort verfügbar"). */
    tag?: string;
    headline: string;
    subheadline?: string;
    image: HeroImageProps;
    /**
     * Horizontal focus point as a percentage (0–100) for `object-position`, so the
     * subject stays in frame as the image is cropped. Default `50`. Mirrors the
     * Strapi `horizontalFocusPointPercentage` field.
     */
    focusX?: number;
    /** Primary action — filled brand button. */
    primaryCta?: HeroCta;
    /** Secondary action — transparent/white-outline button (legible on the image). */
    secondaryCta?: HeroCta;
}
export interface HeroSliderLabels {
    /** Accessible name for the play control. Default `"Play"`. */
    play?: string;
    /** Accessible name for the pause control. Default `"Pause"`. */
    pause?: string;
    /** Prefix for a pagination dot; the slide number is appended. Default `"Go to slide"`. */
    goToSlide?: string;
    /** Builds the live-region status text. Default ``(i, n) => `Slide ${i} of ${n}` ``. */
    slideStatus?: (current: number, total: number) => string;
}
export interface HeroSliderProps {
    slides: HeroSlideData[];
    /**
     * Accessible name for the carousel region (e.g. the page/section heading).
     * Strongly recommended — without it the region is unnamed.
     */
    label?: string;
    /** Start auto-advancing. Default `true` (ignored under reduced motion). */
    autoplay?: boolean;
    /** Autoplay dwell per slide, in ms. Default `5000`. */
    interval?: number;
    /** Heading level for each slide's headline. Default `2`. */
    headingLevel?: HeroHeadingLevel;
    /** Localisable control strings. Each field has an English default. */
    labels?: HeroSliderLabels;
    imageComponent?: HeroImageComponent;
    linkComponent?: HeroLinkComponent;
    /** Fires when a slide's CTA is clicked (host wires analytics). */
    onCtaClick?: (slide: HeroSlideData, index: number) => void;
    /** Fires after the active slide changes. */
    onSlideChange?: (index: number) => void;
    className?: string;
}
//# sourceMappingURL=hero-slider.interface.d.ts.map