import clsx from 'clsx';
import { CSSProperties, ElementType } from 'react';
import {
  HeroCta,
  HeroHeadingLevel,
  HeroImageComponent,
  HeroImageProps,
  HeroLinkComponent,
  HeroSlideData,
} from './hero-slider.interface';

/**
 * Shared building blocks of the ZHD `HeroSlider` — the CTA row, the media and
 * the overlay content. Behaviour is ported from the ZBM design-system
 * `hero-stage/_shared.tsx`; the visuals follow the Figma
 * "ZEP-New-Teaser-Homepage" design (`Teaser/Slider-16:9`, node 96:5080).
 */

export const HERO_FOCUS_RING = clsx(
  'focus-visible:zep-outline',
  'focus-visible:zep-outline-3',
  'focus-visible:zep-outline-offset-1',
  'focus-visible:zep-outline-focus',
);

/** Every in-flow child of the slide box shares its single grid cell. */
const HERO_SLIDE_CELL = 'zep-col-start-1 zep-row-start-1';

// ---------------------------------------------------------------------------
// Text limits
// ---------------------------------------------------------------------------

/** Figma: the headline holds at most 40 characters, then it is truncated. */
export const HERO_HEADLINE_MAX_LENGTH = 40;
/** Figma: the subheadline holds at most 240 characters, then it is truncated. */
export const HERO_SUBHEADLINE_MAX_LENGTH = 240;

/**
 * Cuts `text` down to `maxLength` characters, ellipsis included. The cut backs
 * up to the last word boundary when one is close enough, so a word is only
 * split when it is (nearly) as long as the limit itself.
 */
export function truncateHeroText(text: string, maxLength: number): string {
  const chars = Array.from(text.trim());
  if (chars.length <= maxLength) return chars.join('');
  const kept = chars.slice(0, maxLength - 1);
  const endsOnWord = /\s/.test(chars[maxLength - 1]);
  const lastSpace = kept.map((char) => /\s/.test(char)).lastIndexOf(true);
  const cut = !endsOnWord && lastSpace >= maxLength / 2 ? kept.slice(0, lastSpace) : kept;
  return `${cut.join('').replace(/[\s.,;:!?–—-]+$/u, '')}…`;
}

// ---------------------------------------------------------------------------
// CTA
// ---------------------------------------------------------------------------

type HeroCtaVariant = 'primary' | 'secondary';

// Figma `.base/button/default`: 16/24 Roboto Medium, 16×12 padding. The 5px
// radius in Figma sits on an unclipped wrapper, so the button renders square —
// like the site's zsd `Button`.
// Mirrors the ZSD `PrimaryLight` / `SecondaryLight` button variants, but on an
// anchor — the `enabled:` guards the button variants use never match an `<a>`,
// so the hover/active states are spelled out plainly here.
const CTA_BASE = clsx(
  'zep-flex zep-flex-1 zep-items-center zep-justify-center sm:zep-flex-none',
  'zep-text-base zep-leading-1.5 zep-px-1 zep-py-0.75 zep-font-500 zep-no-underline',
  HERO_FOCUS_RING,
);

const CTA_VARIANT: Record<HeroCtaVariant, string> = {
  // Figma "Primary": #F6F6F6 fill, #262626 text.
  primary: clsx(
    'zep-bg-typography-neutral-light-default zep-text-typography-dark-100',
    'hover:zep-bg-typography-neutral-light-hover active:zep-bg-typography-neutral-light-active',
  ),
  // Figma "Secondary": transparent, 2px #F6F6F6 border, #F6F6F6 text.
  secondary: clsx(
    'zep-bg-transparent zep-text-typography-neutral-light-default',
    'zep-ring-2 zep-ring-inset zep-ring-typography-neutral-light-default',
    'hover:zep-ring-0 hover:zep-bg-neutral-light-default hover:zep-text-typography-dark-100',
    'active:zep-ring-0 active:zep-bg-typography-neutral-light-active active:zep-text-typography-dark-100',
  ),
};

function Cta({
  cta,
  variant,
  linkComponent,
  interactive = true,
  onClick,
}: {
  cta: HeroCta;
  variant: HeroCtaVariant;
  linkComponent?: HeroLinkComponent;
  /** When false, the CTA is kept out of the tab order (e.g. a slider loop clone). */
  interactive?: boolean;
  onClick?: () => void;
}) {
  const Comp = (linkComponent ?? 'a') as ElementType;
  const externalProps = cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <Comp
      href={cta.href}
      onClick={onClick}
      tabIndex={interactive ? undefined : -1}
      className={clsx(CTA_BASE, CTA_VARIANT[variant])}
      {...externalProps}
    >
      {cta.label}
    </Comp>
  );
}

/**
 * Row of up to two CTAs, 16px apart (Figma "button container"). On mobile they
 * each take an equal half, from `sm` upward their natural width.
 */
export function HeroCtas({
  primaryCta,
  secondaryCta,
  linkComponent,
  interactive = true,
  onCtaClick,
}: {
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  linkComponent?: HeroLinkComponent;
  interactive?: boolean;
  onCtaClick?: () => void;
}) {
  if (!primaryCta && !secondaryCta) return null;
  return (
    <div className="zep-flex zep-w-full zep-flex-row zep-gap-1 sm:zep-w-auto">
      {primaryCta && (
        <Cta
          cta={primaryCta}
          variant="primary"
          linkComponent={linkComponent}
          interactive={interactive}
          onClick={onCtaClick}
        />
      )}
      {secondaryCta && (
        <Cta
          cta={secondaryCta}
          variant="secondary"
          linkComponent={linkComponent}
          interactive={interactive}
          onClick={onCtaClick}
        />
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Media
// ---------------------------------------------------------------------------

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
export function HeroMedia({
  image,
  focusX = 50,
  imageComponent,
}: {
  image: HeroImageProps;
  focusX?: number;
  imageComponent?: HeroImageComponent;
}) {
  const Img = (imageComponent ?? 'img') as ElementType;
  return (
    <div
      className="zep-absolute zep-inset-[0] zep-overflow-hidden"
      style={{ '--hero-focus-x': `${focusX}%` } as CSSProperties}
    >
      <Img
        src={image.src}
        alt={image.alt}
        className="zep-h-full zep-w-full zep-object-cover zep-opacity-[0.7] [object-position:var(--hero-focus-x)_center]"
      />
      <div
        aria-hidden="true"
        className="zep-absolute zep-inset-[0] zep-bg-[linear-gradient(to_top,rgba(0,0,0,0.7)_15%,rgba(102,102,102,0)_75%)]"
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Overlay content (bottom-left)
// ---------------------------------------------------------------------------

/**
 * The content overlaid bottom-left on a slide (Figma "content hero": 960px
 * wide, 156px from the left and 80px from the bottom on desktop; headline,
 * 16px, description, 24px, buttons). It is laid out *in flow* inside the slide
 * box, so the box can never be shorter than its text and CTAs. Headline and
 * subheadline are truncated to the Figma limits.
 */
export function HeroOverlayContent({
  slide,
  headingLevel = 2,
  linkComponent,
  interactive = true,
  onCtaClick,
}: {
  slide: HeroSlideData;
  headingLevel?: HeroHeadingLevel;
  linkComponent?: HeroLinkComponent;
  interactive?: boolean;
  onCtaClick?: () => void;
}) {
  const Heading = `h${headingLevel}` as ElementType;
  return (
    <div
      className={clsx(
        HERO_SLIDE_CELL,
        'zep-relative zep-w-full zep-self-end',
        'zep-px-1 zep-py-1.5 sm:zep-px-3 sm:zep-py-3 md:zep-px-5 md:zep-py-5 lg:zep-px-[156px]',
      )}
    >
      <div className="zep-flex zep-w-full zep-max-w-[960px] zep-flex-col zep-gap-1.5">
        <div className="zep-flex zep-flex-col zep-gap-1">
          <Heading
            className={clsx(
              'zep-whitespace-pre-line zep-text-typography-light-100',
              // Figma "Headline XL": 48/56 on desktop; fluid below.
              'zep-typography-headlineXL-fluid-cqi lg:zep-text-[48px] lg:zep-leading-[56px]',
            )}
          >
            {truncateHeroText(slide.headline, HERO_HEADLINE_MAX_LENGTH)}
          </Heading>
          {slide.subheadline && (
            // Figma "Body MD": 16/28 at every width.
            <p className="zep-typography-bodyText zep-whitespace-pre-line zep-text-typography-light-100">
              {truncateHeroText(slide.subheadline, HERO_SUBHEADLINE_MAX_LENGTH)}
            </p>
          )}
        </div>
        <HeroCtas
          primaryCta={slide.primaryCta}
          secondaryCta={slide.secondaryCta}
          linkComponent={linkComponent}
          interactive={interactive}
          onCtaClick={onCtaClick}
        />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Slide box
// ---------------------------------------------------------------------------

/**
 * The box every slide sits in (square corners, per Figma): a one-cell grid on
 * the card's Grey500 background that clips the absolutely positioned media.
 * Its height is the taller of `HeroSlideSizer` and the content, so text and
 * CTAs are never cut off. The `greyscale-500` token compiles to an 8-digit hex
 * with alpha, hence the literal.
 */
export const HERO_SLIDE_BOX = 'zep-relative zep-grid zep-overflow-hidden zep-bg-[#a5a5a5]';

/**
 * Gives the slide box its designed height: 16:9 from `md` up (Figma 1676×943),
 * stepping down to 3:2 on tablets, 4:3 on large phones and a portrait ratio on
 * small phones. Below `md` the height is additionally capped to what is left
 * of the viewport beside the page header and the slider controls, so a slide
 * shows completely — image, text and CTAs — without scrolling.
 */
export function HeroSlideSizer() {
  return (
    <div
      aria-hidden="true"
      className={clsx(
        HERO_SLIDE_CELL,
        'zep-w-full zep-aspect-[326/556] min-[480px]:zep-aspect-[4/3] sm:zep-aspect-[3/2] md:zep-aspect-[16/9]',
        'zep-max-h-[calc(100svh-12rem)] md:zep-max-h-none',
      )}
    />
  );
}
