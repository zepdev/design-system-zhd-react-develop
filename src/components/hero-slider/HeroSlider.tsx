'use client';

import clsx from 'clsx';
import { FocusEvent, KeyboardEvent, forwardRef, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { HeroSliderLabels, HeroSliderProps } from './hero-slider.interface';
import { HERO_FOCUS_RING, HERO_MEDIA_BOX, HeroMedia, HeroOverlayContent } from './HeroSliderParts';
import { PauseCircleOutline, PlayCircleOutline } from './icons';
import { useHeroSlider } from './useHeroSlider';

/**
 * ZHD Hero Slider — a port of the ZBM design-system `HeroSlider`
 * (design-system-zbm-react `components/hero-stage/HeroSlider.tsx`), translated
 * to the ZHD design tokens.
 *
 * A full-bleed *peek* carousel: the slides are rounded hero cards laid out in a
 * horizontal scroll-snap track that spills into the page gutters, so the
 * neighbouring slides peek at the left/right edges at every width. An autoplay
 * timer advances the active slide with a visible progress indicator, gated by a
 * play/pause control, hover/focus and `prefers-reduced-motion`.
 *
 * The carousel loops infinitely and *seamlessly*: the track is padded with two
 * clones on each side (the last two slides before the first, the first two after
 * the last), so the slide we wrap onto has the same neighbours peeking as its
 * real twin. An advance off either end is one short scroll onto the adjacent
 * clone, after which we teleport onto the identical real twin — a pixel-for-pixel
 * jump, so the seam is invisible. The clones are inert — hidden from assistive
 * tech and the tab order — so they add only the visual wrap-around.
 *
 * `useHeroSlider` stays the source of truth for the active index + autoplay; the
 * active index is projected onto the native scroll-snap track, stepping in the
 * move's *direction* (so a wrap can never invert into a long rewind), and a
 * manual swipe syncs back to it. No external carousel dependency.
 * `linkComponent` / `imageComponent` are polymorphic so a Next.js host injects
 * `next/link` / `next/image`.
 */

const DEFAULT_LABELS: Required<HeroSliderLabels> = {
  play: 'Play',
  pause: 'Pause',
  goToSlide: 'Go to slide',
  slideStatus: (current, total) => `Slide ${current} of ${total}`,
};

// Gutter of the hero section. The track below cancels the same values with
// negative margins so the slides bleed into the gutter while the first/last
// snap points still align with the content box.
const SECTION_GUTTER = 'zep-px-1 sm:zep-px-1.5 md:zep-px-4 lg:zep-px-7.5';

const TRACK_CLASS = clsx(
  // `relative` makes the track the slides' offsetParent, so each slide's
  // `offsetLeft` shares the `scrollLeft` coordinate system we measure.
  'zep-relative zep-flex zep-snap-x zep-snap-mandatory zep-gap-2 zep-overflow-x-auto',
  'zep-scroll-smooth motion-reduce:zep-scroll-auto',
  // Vertical room for the focus ring inside the scroll overflow, cancelled so
  // the slides stay flush with the layout.
  'zep-py-0.5 -zep-my-0.5',
  // The native scrollbar is hidden — navigation is via the controls / swipe.
  '[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:zep-hidden',
  // Full-bleed: pull the track out by the section gutter, pad it back so the
  // first slide sits at the content edge, and align the snap points to it.
  'zep-px-1 -zep-mx-1 zep-scroll-pl-1',
  'sm:zep-px-1.5 sm:-zep-mx-1.5 sm:zep-scroll-pl-1.5',
  'md:zep-px-4 md:-zep-mx-4 md:zep-scroll-pl-4',
  'lg:zep-px-7.5 lg:-zep-mx-7.5 lg:zep-scroll-pl-7.5',
);

// `useLayoutEffect` on the client (so the loop's initial scroll position is set
// before paint, with no jump), `useEffect` on the server (where it would warn).
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * A track child's left offset relative to the first child, i.e. in the same
 * coordinate space as the track's `scrollLeft`. `0` when the element isn't laid
 * out yet (SSR / jsdom), which makes every scroll computation a safe no-op.
 */
function offsetOf(children: HTMLCollection, displayIndex: number): number {
  const child = children[displayIndex] as HTMLElement | undefined;
  const first = children[0] as HTMLElement | undefined;
  if (!child || !first) return 0;
  return child.offsetLeft - first.offsetLeft;
}

/**
 * Jump the track to `left` with no animation. The track carries CSS
 * `scroll-behavior: smooth`, which would otherwise animate even a direct
 * `scrollLeft` assignment — so we override it to `auto` for the one jump.
 */
function scrollInstant(el: HTMLElement, left: number): void {
  const previous = el.style.scrollBehavior;
  el.style.scrollBehavior = 'auto';
  el.scrollLeft = left;
  el.style.scrollBehavior = previous;
}

/** The white bar that fills the active dot over the dwell, then the slide advances. */
function ProgressFill({ runId, duration, running }: { runId: number; duration: number; running: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Reset to empty with no transition…
    el.style.transition = 'none';
    el.style.transform = 'scaleX(0)';
    // …force a reflow so the browser doesn't coalesce the reset with the run…
    void el.offsetWidth;
    // …then animate to full only while actually autoplaying.
    if (running) {
      el.style.transition = `transform ${duration}ms linear`;
      el.style.transform = 'scaleX(1)';
    }
  }, [runId, duration, running]);
  return (
    <span
      ref={ref}
      aria-hidden="true"
      className="zep-absolute zep-inset-[0] zep-origin-left zep-rounded-full zep-bg-greyscale-200"
      style={{ transform: 'scaleX(0)' }}
    />
  );
}

function SlidePlayer({
  playing,
  onToggle,
  playLabel,
  pauseLabel,
}: {
  playing: boolean;
  onToggle: () => void;
  playLabel: string;
  pauseLabel: string;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={playing ? pauseLabel : playLabel}
      // Figma: 48px square, 2px primary border, white fill, 24px primary glyph.
      className={clsx(
        'zep-inline-flex zep-h-3 zep-w-3 zep-shrink-0 zep-items-center zep-justify-center',
        'zep-border-2 zep-border-solid zep-border-primary-default zep-bg-greyscale-0 zep-text-primary-default',
        'zep-outline-none zep-transition-colors hover:zep-bg-greyscale-100',
        HERO_FOCUS_RING,
      )}
    >
      {/* Figma shows the *state* (play glyph while autoplaying, pause glyph when
          paused); the aria-label still names the *action*. */}
      {playing ? <PlayCircleOutline /> : <PauseCircleOutline />}
    </button>
  );
}

function HeroSliderPagination({
  count,
  active,
  running,
  interval,
  goToSlide,
  onGoTo,
}: {
  count: number;
  active: number;
  running: boolean;
  interval: number;
  goToSlide: string;
  onGoTo: (index: number) => void;
}) {
  return (
    // Figma: 48px tall pill with a 2px primary border, 24px inset, 8px dots 16px
    // apart; the active slide is a 39px bar that a light fill crosses over the dwell.
    <div
      className={clsx(
        'zep-flex zep-h-3 zep-items-center zep-gap-1 zep-px-1.5',
        'zep-border-2 zep-border-solid zep-border-primary-default zep-bg-greyscale-0',
      )}
    >
      {Array.from({ length: count }, (_, i) => {
        const isActive = i === active;
        return (
          <button
            key={i}
            type="button"
            aria-label={`${goToSlide} ${i + 1}`}
            aria-current={isActive ? 'true' : undefined}
            onClick={() => onGoTo(i)}
            className={clsx('zep-group zep-flex zep-h-full zep-items-center zep-outline-none', HERO_FOCUS_RING)}
          >
            <span
              className={clsx(
                'zep-relative zep-h-0.5 zep-overflow-hidden zep-rounded-full zep-transition-all motion-reduce:zep-transition-none',
                // Figma Grey500 (#A5A5A5). The `greyscale-500` token compiles to an
                // 8-digit hex with alpha, so the literal is used for a solid dot.
                isActive ? 'zep-w-[39px] zep-bg-[#a5a5a5]' : 'zep-w-0.5 zep-bg-[#a5a5a5] group-hover:zep-bg-primary-default',
              )}
            >
              {isActive && <ProgressFill runId={active} duration={interval} running={running} />}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export const HeroSlider = forwardRef<HTMLElement, HeroSliderProps>(function HeroSlider(
  {
    slides,
    label,
    autoplay = true,
    interval = 5000,
    headingLevel = 2,
    labels,
    imageComponent,
    linkComponent,
    onCtaClick,
    onSlideChange,
    className,
  },
  ref,
) {
  const l = { ...DEFAULT_LABELS, ...labels };
  const { active, count, playing, running, reducedMotion, goTo, next, prev, togglePlay, setHovered, setFocused, directionRef } =
    useHeroSlider({ count: slides.length, autoplay, interval });

  // Notify the host of slide changes without making `active` a controlled prop.
  const lastReported = useRef(active);
  useEffect(() => {
    if (lastReported.current !== active) {
      lastReported.current = active;
      onSlideChange?.(active);
    }
  }, [active, onSlideChange]);

  // --- Looping bleed track ----------------------------------------------------
  // For a *seamless* infinite loop the track is padded with TWO clones on each
  // side: the last two slides before the first real one, and the first two after
  // the last. Two (not one) so the slide we wrap onto always has the same
  // neighbours peeking as its real twin, which makes the post-wrap teleport
  // pixel-identical. Reals live at display slot `r + LEAD`; the clones are inert.
  //
  // The *leading* clones are only added after mount: server-rendered HTML can't
  // carry a scroll position, so with them in the markup the page would first
  // paint the track at `scrollLeft: 0` — i.e. on a clone of the second-to-last
  // slide — and only jump to the real first slide once React hydrates. Without
  // them the real first slide sits at offset 0 from the start; the clones are
  // inserted on the client together with the instant scroll below, before paint.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const looped = count > 1;
  const LEAD = looped && mounted ? 2 : 0;
  const cloneAt = (real: number) => ({ slide: slides[real], real, clone: true });
  const reals = slides.map((slide, i) => ({ slide, real: i, clone: false }));
  const displaySlides = looped
    ? [
        ...(mounted ? [cloneAt((count - 2 + count) % count), cloneAt(count - 1)] : []),
        ...reals,
        cloneAt(0),
        cloneAt(1 % count),
      ]
    : reals;

  // `useHeroSlider` owns `active`; the native track is a visual projection of
  // it. We remember the track's current *display* slot so a move can step to the
  // adjacent slot in the direction of travel (a wrap = one short step onto a
  // clone). A `programmatic` flag tells our own scrolls apart from user swipes.
  const trackRef = useRef<HTMLUListElement>(null);
  const programmatic = useRef(false);
  const settleTimer = useRef<ReturnType<typeof setTimeout>>();
  const displayRef = useRef(LEAD); // current display slot (starts on the first real)
  const prevActiveRef = useRef(active);
  const activeRef = useRef(active);
  activeRef.current = active;
  const goToRef = useRef(goTo);
  goToRef.current = goTo;

  // Once the leading clones are in, start the loop on the first *real* slide
  // (display slot `LEAD`) — before paint, so the page never flashes a clone.
  useIsomorphicLayoutEffect(() => {
    const el = trackRef.current;
    if (!el || LEAD === 0) return;
    programmatic.current = true;
    displayRef.current = LEAD;
    scrollInstant(el, offsetOf(el.children, LEAD));
  }, [looped, LEAD]);

  // Project `active` onto the track. The move's *direction* picks the target
  // slot, so a wrap is always one short step onto the adjacent clone. A dot
  // jump goes straight to the slide's home slot.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const prevActive = prevActiveRef.current;
    prevActiveRef.current = active;

    let target: number;
    if (!looped) {
      target = active;
    } else if (active === prevActive) {
      return; // initial mount / no movement — the layout effect set the position
    } else if (directionRef.current === 'forward') {
      target = displayRef.current + 1;
    } else if (directionRef.current === 'backward') {
      target = displayRef.current - 1;
    } else {
      target = active + LEAD; // jump (dot) → straight to the home slot
    }
    displayRef.current = target;

    const left = offsetOf(el.children, target);
    if (Math.abs(el.scrollLeft - left) < 1) return;
    programmatic.current = true;
    if (reducedMotion) scrollInstant(el, left);
    else el.scrollTo({ left, behavior: 'smooth' });
  }, [active, reducedMotion, looped, count, LEAD, directionRef]);

  useEffect(() => () => clearTimeout(settleTimer.current), []);

  const onTrackScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    clearTimeout(settleTimer.current);
    // Debounce until the (snap) scroll settles, then reconcile.
    settleTimer.current = setTimeout(() => {
      const wasProgrammatic = programmatic.current;
      programmatic.current = false;
      const children = el.children;
      if (children.length === 0) return;
      let nearest = 0;
      let best = Infinity;
      for (let d = 0; d < children.length; d += 1) {
        const distance = Math.abs(offsetOf(children, d) - el.scrollLeft);
        if (distance < best) {
          best = distance;
          nearest = d;
        }
      }
      displayRef.current = nearest;
      // Settled on a clone → jump instantly onto its identical real twin so the
      // seam is invisible, then (only for a user swipe) sync `active`.
      const entry = displaySlides[nearest];
      if (looped && entry?.clone) {
        const home = entry.real + LEAD;
        programmatic.current = true;
        displayRef.current = home;
        scrollInstant(el, offsetOf(children, home));
        if (!wasProgrammatic && entry.real !== activeRef.current) {
          directionRef.current = 'jump';
          goToRef.current(entry.real);
        }
        return;
      }
      if (wasProgrammatic) return;
      const real = looped ? nearest - LEAD : nearest;
      if (real !== activeRef.current) {
        directionRef.current = 'jump';
        goToRef.current(real);
      }
    }, 120);
  };

  if (count === 0) return null;

  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'ArrowLeft') {
      prev();
    } else if (e.key === 'ArrowRight') {
      next();
    }
  };

  // Treat focus leaving the whole section as "unfocused" so a tab-through
  // doesn't permanently freeze autoplay.
  const onBlur = (e: FocusEvent<HTMLElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false);
  };

  return (
    <section
      ref={ref}
      data-testid="zep-hero-slider"
      aria-roledescription={label ? 'carousel' : undefined}
      aria-label={label}
      onKeyDown={onKeyDown}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={onBlur}
      className={className}
    >
      <div
        className={clsx(
          'zep-mx-auto zep-flex zep-w-full zep-max-w-[1728px] zep-flex-col zep-gap-2.5 zep-py-2',
          SECTION_GUTTER,
        )}
      >
        {/* Full-bleed peek track: each slide is a rounded hero card sized to the
            content box, in a scroll-snap track that spills into the gutters so
            the neighbours peek at the edges. The card is trimmed on phones (where
            the gutter is narrower than the gap) so a slide still peeks; from `sm`
            up the gutter alone gives the peek. */}
        <ul ref={trackRef} onScroll={onTrackScroll} className={TRACK_CLASS}>
          {displaySlides.map(({ slide, real, clone }, d) => {
            // Autoplay pauses only while the pointer is over the *current* slide's
            // image — not the gutters, the controls, or a peeking neighbour.
            const isCurrentImage = !clone && real === active;
            return (
              <li
                key={clone ? `clone-${d}` : `slide-${real}`}
                aria-hidden={clone || undefined}
                className="zep-flex zep-w-[calc(100%-2rem)] zep-shrink-0 zep-snap-start sm:zep-w-full"
              >
                <div
                  className={clsx(HERO_MEDIA_BOX, 'zep-w-full')}
                  onMouseEnter={isCurrentImage ? () => setHovered(true) : undefined}
                  onMouseLeave={isCurrentImage ? () => setHovered(false) : undefined}
                >
                  <HeroMedia image={slide.image} focusX={slide.focusX} imageComponent={imageComponent} />
                  <HeroOverlayContent
                    slide={slide}
                    headingLevel={headingLevel}
                    linkComponent={linkComponent}
                    interactive={!clone}
                    onCtaClick={() => onCtaClick?.(slide, real)}
                  />
                </div>
              </li>
            );
          })}
        </ul>

        {/* Play/pause + progress pagination, centred below the track. */}
        {count > 1 && (
          <div className="zep-flex zep-items-center zep-gap-1 zep-self-center">
            {!reducedMotion && (
              <SlidePlayer playing={playing} onToggle={togglePlay} playLabel={l.play} pauseLabel={l.pause} />
            )}
            <HeroSliderPagination
              count={count}
              active={active}
              running={running}
              interval={interval}
              goToSlide={l.goToSlide}
              onGoTo={goTo}
            />
          </div>
        )}

        {/* Polite status for assistive tech; off while autorotating to avoid spam. */}
        <span className="zep-sr-only" aria-live={running ? 'off' : 'polite'}>
          {l.slideStatus(active + 1, count)}
        </span>
      </div>
    </section>
  );
});
