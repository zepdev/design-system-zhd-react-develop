import type { Meta, StoryObj } from '@storybook/react';

import imageLong from '../../assets/image-long.jpg';
import tempImage from '../../assets/temp-image.jpeg';
import { HeroSlider } from './HeroSlider';
import { HeroSlideData } from './hero-slider.interface';

const slides: HeroSlideData[] = [
  {
    tag: 'Sofort verfügbar',
    headline: 'FIRST HERO SLIDE\nABOUT 2 ROWS',
    subheadline: 'Lorem ipsum dolor sit amet consectetur. Suspendisse habitasse commodo semper.',
    image: { src: tempImage, alt: 'Zeppelin machinery on site' },
    focusX: 60,
    primaryCta: { label: 'Action', href: '#one' },
    secondaryCta: { label: 'Learn more', href: '#one-b' },
  },
  {
    tag: 'Neu',
    headline: 'SECOND HERO SLIDE\nWITH A LONGER LINE',
    subheadline: 'Another supporting sentence that can run up to two rows of copy.',
    image: { src: imageLong, alt: 'Wide landscape image' },
    primaryCta: { label: 'Action', href: '#two' },
  },
  {
    headline: 'THIRD HERO SLIDE',
    subheadline: 'No tag on this one.',
    image: { src: tempImage, alt: 'Zeppelin machinery on site' },
    primaryCta: { label: 'Action', href: '#three' },
    secondaryCta: { label: 'Action', href: '#three-b' },
  },
];

const meta = {
  title: 'Components/HeroSlider',
  component: HeroSlider,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  args: { slides, label: 'Featured', autoplay: true, interval: 5000, headingLevel: 1 },
  argTypes: {
    autoplay: { control: { type: 'boolean' } },
    interval: { control: { type: 'number' } },
    headingLevel: { control: { type: 'inline-radio' }, options: [1, 2, 3, 4, 5, 6] },
  },
} satisfies Meta<typeof HeroSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** Autoplay off — manual navigation only. */
export const NoAutoplay: Story = {
  args: { autoplay: false },
};

/** German control labels. */
export const Localised: Story = {
  args: {
    labels: {
      play: 'Wiedergabe',
      pause: 'Pause',
      goToSlide: 'Gehe zu Slide',
      slideStatus: (current, total) => `Slide ${current} von ${total}`,
    },
  },
};

/** A single slide — controls hide automatically. */
export const SingleSlide: Story = {
  args: { slides: [slides[0]] },
};
