import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { HeroSlider } from './HeroSlider';
import { HeroSlideData } from './hero-slider.interface';

const slides: HeroSlideData[] = [
  {
    tag: 'One',
    headline: 'Slide One',
    image: { src: '/1.webp', alt: 'First' },
    primaryCta: { label: 'CTA One', href: '#one' },
  },
  {
    headline: 'Slide Two',
    image: { src: '/2.webp', alt: 'Second' },
    primaryCta: { label: 'CTA Two', href: '#two' },
  },
  {
    headline: 'Slide Three',
    image: { src: '/3.webp', alt: 'Third' },
    primaryCta: { label: 'CTA Three', href: '#three' },
  },
];

afterEach(() => {
  vi.unstubAllGlobals();
  vi.useRealTimers();
});

/**
 * The active slide is reflected by the pagination dot carrying `aria-current`
 * (every slide renders so the neighbours can peek at the edges, so "which
 * heading is in the DOM" cannot tell the active one apart).
 */
function activeDotIndex(): number {
  return screen
    .getAllByRole('button', { name: /Go to slide/ })
    .findIndex((dot) => dot.getAttribute('aria-current') === 'true');
}

describe('HeroSlider — structure', () => {
  it('names the region as a carousel when labelled', () => {
    render(<HeroSlider slides={slides} label="Featured" autoplay={false} />);
    const region = screen.getByRole('region', { name: 'Featured' });
    expect(region).toHaveAttribute('aria-roledescription', 'carousel');
  });

  it('shows the first slide and one dot per slide plus a play/pause control', () => {
    render(<HeroSlider slides={slides} label="Featured" autoplay={false} />);
    expect(screen.getByRole('heading', { name: 'Slide One' })).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /Go to slide/ })).toHaveLength(3);
    expect(screen.getByRole('button', { name: 'Play' })).toBeInTheDocument();
  });

  it('renders every slide as a card (peek carousel) and marks the first current', () => {
    render(<HeroSlider slides={slides} label="Featured" autoplay={false} />);
    expect(screen.getByRole('link', { name: /CTA One/ })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /CTA Two/ })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /CTA Three/ })).toBeInTheDocument();
    expect(activeDotIndex()).toBe(0);
  });

  it('renders the tag and the heading at the requested level', () => {
    render(<HeroSlider slides={slides} label="Featured" autoplay={false} headingLevel={1} />);
    // The tag also renders in the inert loop clones, hence `getAll`.
    expect(screen.getAllByText('One').length).toBeGreaterThan(0);
    expect(screen.getByRole('heading', { level: 1, name: 'Slide One' })).toBeInTheDocument();
  });

  it('hides the controls for a single slide', () => {
    render(<HeroSlider slides={[slides[0]]} label="Featured" />);
    expect(screen.queryByRole('button', { name: /Go to slide/ })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Play|Pause/ })).not.toBeInTheDocument();
  });

  it('renders nothing without slides', () => {
    const { container } = render(<HeroSlider slides={[]} label="Featured" />);
    expect(container).toBeEmptyDOMElement();
  });
});

describe('HeroSlider — navigation', () => {
  it('jumps to a slide when its dot is clicked', () => {
    const onSlideChange = vi.fn();
    render(<HeroSlider slides={slides} label="Featured" autoplay={false} onSlideChange={onSlideChange} />);
    fireEvent.click(screen.getAllByRole('button', { name: /Go to slide/ })[2]);
    expect(activeDotIndex()).toBe(2);
    expect(onSlideChange).toHaveBeenCalledWith(2);
  });

  it('advances with the ArrowRight key', () => {
    render(<HeroSlider slides={slides} label="Featured" autoplay={false} />);
    fireEvent.keyDown(screen.getByRole('region', { name: 'Featured' }), { key: 'ArrowRight' });
    expect(activeDotIndex()).toBe(1);
  });

  it('fires onCtaClick with the active slide and index', () => {
    const onCtaClick = vi.fn();
    render(<HeroSlider slides={slides} label="Featured" autoplay={false} onCtaClick={onCtaClick} />);
    fireEvent.click(screen.getByRole('link', { name: /CTA One/ }));
    expect(onCtaClick).toHaveBeenCalledWith(slides[0], 0);
  });

  it('uses the injected link component for the CTAs', () => {
    const CustomLink = ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
      <a href={href} data-custom-link {...rest}>
        {children}
      </a>
    );
    render(<HeroSlider slides={slides} label="Featured" autoplay={false} linkComponent={CustomLink} />);
    expect(screen.getByRole('link', { name: /CTA One/ })).toHaveAttribute('data-custom-link');
  });
});

describe('HeroSlider — autoplay', () => {
  it('auto-advances after the interval and can be paused', () => {
    vi.useFakeTimers();
    render(<HeroSlider slides={slides} label="Featured" autoplay interval={1000} />);
    // Playing by default → the control offers "Pause".
    expect(screen.getByRole('button', { name: 'Pause' })).toBeInTheDocument();
    expect(activeDotIndex()).toBe(0);

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(activeDotIndex()).toBe(1);

    // Pause, then the timer must not advance any further.
    fireEvent.click(screen.getByRole('button', { name: 'Pause' }));
    expect(screen.getByRole('button', { name: 'Play' })).toBeInTheDocument();
    act(() => {
      vi.advanceTimersByTime(3000);
    });
    expect(activeDotIndex()).toBe(1);
  });

  it('wraps from the last slide back to the first', () => {
    vi.useFakeTimers();
    render(<HeroSlider slides={slides} label="Featured" autoplay interval={1000} />);
    // One tick per interval so the timer re-arms (it reschedules on each change).
    for (let i = 0; i < 3; i += 1) {
      act(() => {
        vi.advanceTimersByTime(1000);
      });
    }
    expect(activeDotIndex()).toBe(0);
  });
});

describe('HeroSlider — reduced motion', () => {
  it('disables autoplay and hides the play control when reduced motion is preferred', () => {
    vi.stubGlobal(
      'matchMedia',
      vi.fn().mockReturnValue({ matches: true, addEventListener() {}, removeEventListener() {} }),
    );
    vi.useFakeTimers();
    render(<HeroSlider slides={slides} label="Featured" autoplay interval={1000} />);
    expect(screen.queryByRole('button', { name: /Play|Pause/ })).not.toBeInTheDocument();
    // Dots still allow manual navigation.
    expect(screen.getAllByRole('button', { name: /Go to slide/ })).toHaveLength(3);
    // No auto-advance under reduced motion.
    act(() => {
      vi.advanceTimersByTime(5000);
    });
    expect(activeDotIndex()).toBe(0);
  });
});

describe('HeroSlider — server render', () => {
  it('starts the server-rendered track on the real first slide, not a leading clone', async () => {
    const { renderToString } = await import('react-dom/server');
    const html = renderToString(<HeroSlider slides={slides} label="Featured" autoplay={false} />);
    const firstItem = html.match(/<li[^>]*>/)?.[0] ?? '';
    expect(firstItem).not.toContain('aria-hidden');
    expect(html.indexOf('Slide One')).toBeLessThan(html.indexOf('Slide Two'));
  });

  it('adds the leading clones after mount and keeps the first slide active', () => {
    render(<HeroSlider slides={slides} label="Featured" autoplay={false} />);
    const items = screen.getAllByRole('listitem', { hidden: true });
    // 2 leading clones + 3 reals + 2 trailing clones
    expect(items).toHaveLength(7);
    expect(items[0]).toHaveAttribute('aria-hidden', 'true');
    expect(items[2]).not.toHaveAttribute('aria-hidden');
    expect(activeDotIndex()).toBe(0);
  });
});
