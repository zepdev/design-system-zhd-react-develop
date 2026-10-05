import { MutableRefObject } from 'react';
/** The direction of the most recent navigation, so the view can project a wrap
 *  the short way (one step onto the adjacent clone) instead of guessing from
 *  scroll position. A dot/`goTo` is a `'jump'` straight to the target. */
export type SliderDirection = 'forward' | 'backward' | 'jump';
/** `true` when the user asked the OS to minimise non-essential motion. */
export declare function usePrefersReducedMotion(): boolean;
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
export declare function useHeroSlider({ count, autoplay, interval, }: UseHeroSliderOptions): HeroSliderState;
//# sourceMappingURL=useHeroSlider.d.ts.map