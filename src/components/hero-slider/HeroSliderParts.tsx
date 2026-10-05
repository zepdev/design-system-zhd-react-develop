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
 * Shared building blocks of the ZHD `HeroSlider` — the tag chip, the CTA row,
 * the media and the overlay content. Behaviour is ported from the ZBM
 * design-system `hero-stage/_shared.tsx`; the visuals follow the Figma
 * "ZEP-New-Teaser-Homepage" design (`Teaser/Slider-16:9`, node 4:5344).
 */

export const HERO_FOCUS_RING = clsx(
  'focus-visible:zep-outline',
  'focus-visible:zep-outline-3',
  'focus-visible:zep-outline-offset-1',
  'focus-visible:zep-outline-focus',
);

// ---------------------------------------------------------------------------
// Tag
// ---------------------------------------------------------------------------

/** Optional category chip pinned top-left over the image, as in the ZBM hero (renders only when set). */
export function HeroTag({ label }: { label: string }) {
  return (
    <span
      className={clsx(
        'zep-inline-flex zep-w-fit zep-items-center zep-justify-center zep-rounded-full',
        'zep-bg-primary-default zep-text-typography-light-100',
        'zep-typography-supportText zep-px-0.75 zep-py-0.125',
      )}
    >
      {label}
    </span>
  );
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
 * it works for the native `<img>` and an injected `next/image` alike. A
 * bottom-up dark scrim (black at 85% at the bottom, ~45% at the lower third,
 * a faint 10% tint at the top) keeps the white content legible on any photo;
 * the text block adds a soft shadow for bright patches.
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
        className="zep-h-full zep-w-full zep-object-cover [object-position:var(--hero-focus-x)_center]"
      />
      <div
        aria-hidden="true"
        className="zep-absolute zep-inset-[0] zep-bg-gradient-to-t zep-from-[rgba(0,0,0,0.85)] zep-from-0% zep-via-[rgba(0,0,0,0.45)] zep-via-35% zep-to-[rgba(0,0,0,0.1)] zep-to-100%"
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Overlay content (bottom-left)
// ---------------------------------------------------------------------------

/**
 * The content overlaid bottom-left on a slide (Figma "content hero": 831px
 * wide, 156px from the left and 80px from the bottom on desktop; headline,
 * 16px, description, 24px, buttons). Rendered absolutely over the media inside
 * a `relative` parent.
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
        'zep-absolute zep-inset-[0] zep-flex zep-flex-col zep-justify-between',
        'zep-px-1 zep-py-1.5 sm:zep-px-3 sm:zep-py-3 md:zep-px-5 md:zep-py-5 lg:zep-px-[156px]',
      )}
    >
      {/* Tag pinned top-left, as in the ZBM hero; the content stays bottom-left. */}
      <div>{slide.tag && <HeroTag label={slide.tag} />}</div>
      <div className="zep-flex zep-w-full zep-max-w-[831px] zep-flex-col zep-gap-1.5 [text-shadow:0_2px_12px_rgba(0,0,0,0.55)]">
        <div className="zep-flex zep-flex-col zep-gap-1">
          <Heading
            className={clsx(
              'zep-whitespace-pre-line zep-text-typography-light-100',
              // Figma "Headline XL": 48/56 on desktop; fluid below.
              'zep-typography-headlineXL-fluid-cqi lg:zep-text-[48px] lg:zep-leading-[56px]',
            )}
          >
            {slide.headline}
          </Heading>
          {slide.subheadline && (
            <p
              className={clsx(
                'zep-whitespace-pre-line zep-text-typography-light-100',
                // Figma "Body LG": 20/32 on desktop.
                'zep-typography-bodyText md:zep-text-1.25 md:zep-leading-2',
              )}
            >
              {slide.subheadline}
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

/**
 * The `relative` aspect-ratio box every slide sits in (square corners, per
 * Figma); `overflow-hidden` clips the image to it. 16:9 from `md` up (Figma
 * 1677×943); the ratio steps down on smaller screens so the slide never gets
 * disproportionately tall.
 */
export const HERO_MEDIA_BOX = clsx(
  'zep-relative zep-overflow-hidden',
  'zep-aspect-[326/556] sm:zep-aspect-[3/2] md:zep-aspect-[16/9]',
);
