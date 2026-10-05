'use client';

import { useCallback, useEffect, useRef, useState, type MutableRefObject } from 'react';

/** The direction of the most recent navigation, so the view can project a wrap
 *  the short way (one step onto the adjacent clone) instead of guessing from
 *  scroll position. A dot/`goTo` is a `'jump'` straight to the target. */
export type SliderDirection = 'forward' | 'backward' | 'jump';

/** `true` when the user asked the OS to minimise non-essential motion. */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, []);
  return reduced;
}

export interface UseHeroSliderOptions {
  count: number;
  autoplay?: boolean;
  /** Autoplay dwell time per slide, in milliseconds. */
  interval?: number;
}

export interface HeroSliderState {
  active: number;
  count: number;
  /** The user's autoplay *intent* (toggled by the play/pause control). */
  playing: boolean;
  /** Whether autoplay is *actually* advancing right now (intent minus pauses). */
  running: boolean;
  reducedMotion: boolean;
  goTo: (index: number) => void;
  next: () => void;
  prev: () => void;
  togglePlay: () => void;
  setHovered: (value: boolean) => void;
  setFocused: (value: boolean) => void;
  /** Direction of the last navigation (read synchronously when projecting). */
  directionRef: MutableRefObject<SliderDirection>;
}

/**
 * The autoplay engine behind `HeroSlider`: one slide at a time, advancing on a
 * timer that the play/pause control, pointer hover, keyboard focus, tab
 * visibility and `prefers-reduced-motion` all gate.
 *
 * `playing` is the user's standing intent; `running` is whether the timer is
 * actually ticking (intent AND not hovered/focused/hidden AND motion allowed AND
 * more than one slide). Manual navigation keeps the autoplay intent but restarts
 * the dwell so a slide the user just chose gets its full time on screen.
 */
export function useHeroSlider({
  count,
  autoplay = true,
  interval = 5000,
}: UseHeroSliderOptions): HeroSliderState {
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(autoplay);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(false);
  // Direction of the most recent move; set right before each `setActive` so the
  // view can read it synchronously when the `active` change commits.
  const directionRef = useRef<SliderDirection>('forward');

  // Pause while the tab is in the background — invisible motion is wasted.
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const onVisibility = () => setHidden(document.hidden);
    onVisibility();
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  const running = playing && !reducedMotion && !hovered && !focused && !hidden && count > 1;

  // The advance timer. Re-armed whenever `active` changes (incl. manual nav) so
  // the dwell always restarts from the freshly shown slide.
  useEffect(() => {
    if (!running) return;
    const id = setTimeout(() => {
      directionRef.current = 'forward';
      setActive((i) => (i + 1) % count);
    }, interval);
    return () => clearTimeout(id);
  }, [running, active, interval, count]);

  const goTo = useCallback(
    (index: number) => {
      directionRef.current = 'jump';
      setActive(((index % count) + count) % count || 0);
    },
    [count],
  );
  const next = useCallback(() => {
    directionRef.current = 'forward';
    setActive((i) => (i + 1) % count);
  }, [count]);
  const prev = useCallback(() => {
    directionRef.current = 'backward';
    setActive((i) => (i - 1 + count) % count);
  }, [count]);
  const togglePlay = useCallback(() => setPlaying((p) => !p), []);

  return {
    active,
    count,
    playing,
    running,
    reducedMotion,
    goTo,
    next,
    prev,
    togglePlay,
    setHovered,
    setFocused,
    directionRef,
  };
}
