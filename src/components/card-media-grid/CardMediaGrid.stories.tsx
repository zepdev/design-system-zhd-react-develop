import clsx from 'clsx';
import type { Meta, StoryObj } from '@storybook/react';
import { CardMediaGrid } from './CardMediaGrid';
import { focusRing } from '../../tailwind/styles/focus';
import { CardMediaGridProps } from './CardMediaGrid.interface';
import { mockRichTextShort } from '../../utils/mocks';

const mockCard = {
  imageSrc: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
  imageAlt: 'construction site',
  headline: 'Testing',
  description: 'Testing',
  linkSrc: 'https://www.zeppelin.com',
  linkText: 'Click me',
}

const mockCardVertical = {
  ...mockCard,
  imageSrc: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800'
}

const mockCardsVaryingText = [
  {
    imageSrc: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
    imageAlt: 'excavator',
    headline: 'Short Title',
    description: 'Brief description.',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Learn more',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800',
    imageAlt: 'bulldozer',
    headline: 'Medium Length Title Here',
    description: 'This is a medium length description that spans multiple lines and provides more context about the card content.',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'View details',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?w=800',
    imageAlt: 'crane',
    headline: 'This is a Much Longer Title That Wraps to Multiple Lines',
    description: 'This description is significantly longer than the others to test how the grid handles cards with varying amounts of content. The layout should remain consistent with all links aligned at the bottom.',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Explore',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=800',
    imageAlt: 'loader',
    headline: 'Another Card',
    description: 'Standard description text.',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Read more',
  },
]

const meta = {
  title: 'Patterns/CardMediaGrid',
  component: CardMediaGrid,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CardMediaGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>
    ),
  ],
  args: {
    cards: [mockCard, mockCard],
    headline: 'Card Media Grid with 2 cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    description: mockRichTextShort,
  } as CardMediaGridProps,
};

export const CardMediaGridVertical: Story = {
  decorators: [
    (Story) => (
      <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>
    ),
  ],
  args: {
    cards: [mockCardVertical, mockCardVertical],
    headline: 'Card Media Grid with vertical images',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    imageOrientation: 'vertical',
    description: mockRichTextShort,
  } as CardMediaGridProps,
};

export const CardMediaGrid3Cards: Story = {
  decorators: [
    (Story) => (
      <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>
    ),
  ],
  args: {
    cards: [mockCard, mockCard, mockCard],
    headline: 'Card Media Grid with 3 cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    description: mockRichTextShort,
  } as CardMediaGridProps,
};

export const CardMediaGrid4Cards: Story = {
  decorators: [
    (Story) => (
      <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>
    ),
  ],
  args: {
    cards: [mockCard, mockCard, mockCard, mockCard],
    headline: 'Card Media Grid with 4 cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    description: mockRichTextShort,
  } as CardMediaGridProps,
};

export const CardMediaGrid6Cards: Story = {
  decorators: [
    (Story) => (
      <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>
    ),
  ],
  args: {
    cards: [mockCard, mockCard, mockCard, mockCard, mockCard, mockCard],
    headline: 'Card Media Grid with 6 cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    description: mockRichTextShort,
  } as CardMediaGridProps,
};

export const CardMediaGridVaryingContent: Story = {
  decorators: [
    (Story) => (
      <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>
    ),
  ],
  args: {
    cards: mockCardsVaryingText,
    headline: 'Grid with Varying Content Lengths',
    tagline: 'Testing card height consistency',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'View all',
    theme: 'power-systems',
    description: mockRichTextShort,
  } as CardMediaGridProps,
};
