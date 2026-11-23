import { HeroCta, HeroHeadingLevel, HeroImageComponent, HeroImageProps, HeroLinkComponent, HeroSlideData } from './hero-slider.interface';
/**
 * Shared building blocks of the ZHD `HeroSlider` — the CTA row, the media and
 * the overlay content. Behaviour is ported from the ZBM design-system
 * `hero-stage/_shared.tsx`; the visuals follow the Figma
 * "ZEP-New-Teaser-Homepage" design (`Teaser/Slider-16:9`, node 96:5080).
 */
export declare const HERO_FOCUS_RING: string;
/** Figma: the headline holds at most 40 characters, then it is truncated. */
export declare const HERO_HEADLINE_MAX_LENGTH = 40;
/** Figma: the subheadline holds at most 240 characters, then it is truncated. */
export declare const HERO_SUBHEADLINE_MAX_LENGTH = 240;
/**
 * Cuts `text` down to `maxLength` characters, ellipsis included. The cut backs
 * up to the last word boundary when one is close enough, so a word is only
 * split when it is (nearly) as long as the limit itself.
 */
export declare function truncateHeroText(text: string, maxLength: number): string;
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
 * it works for the native `<img>` and an injected `next/image` alike.
 *
 * Figma "teaser detail": the image sits at 70% opacity on the card's Grey500
 * background (see `HERO_SLIDE_BOX`), under a bottom-up gradient from black at
 * 70% (15% of the height) to a transparent #666 (75%). That treatment alone
 * carries the legibility of the white content — the text has no shadow.
 */
export declare function HeroMedia({ image, focusX, imageComponent, }: {
    image: HeroImageProps;
    focusX?: number;
    imageComponent?: HeroImageComponent;
}): import("react/jsx-dev-runtime").JSX.Element;
/**
 * The content overlaid bottom-left on a slide (Figma "content hero": 960px
 * wide, 156px from the left and 80px from the bottom on desktop; headline,
 * 16px, description, 24px, buttons). It is laid out *in flow* inside the slide
 * box, so the box can never be shorter than its text and CTAs. Headline and
 * subheadline are truncated to the Figma limits.
 */
export declare function HeroOverlayContent({ slide, headingLevel, linkComponent, interactive, onCtaClick, }: {
    slide: HeroSlideData;
    headingLevel?: HeroHeadingLevel;
    linkComponent?: HeroLinkComponent;
    interactive?: boolean;
    onCtaClick?: () => void;
}): import("react/jsx-dev-runtime").JSX.Element;
/**
 * The box every slide sits in (square corners, per Figma): a one-cell grid on
 * the card's Grey500 background that clips the absolutely positioned media.
 * Its height is the taller of `HeroSlideSizer` and the content, so text and
 * CTAs are never cut off. The `greyscale-500` token compiles to an 8-digit hex
 * with alpha, hence the literal.
 */
export declare const HERO_SLIDE_BOX = "zep-relative zep-grid zep-overflow-hidden zep-bg-[#a5a5a5]";
/**
 * Gives the slide box its designed height: 16:9 from `md` up (Figma 1676×943),
 * stepping down to 3:2 on tablets, 4:3 on large phones and a portrait ratio on
 * small phones. Below `md` the height is additionally capped to what is left
 * of the viewport beside the page header and the slider controls, so a slide
 * shows completely — image, text and CTAs — without scrolling.
 */
export declare function HeroSlideSizer(): import("react/jsx-dev-runtime").JSX.Element;
//# sourceMappingURL=HeroSliderParts.d.ts.map