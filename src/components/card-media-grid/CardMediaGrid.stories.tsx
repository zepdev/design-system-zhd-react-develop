import clsx from 'clsx';
import type { Meta, StoryObj } from '@storybook/react';
import { CardMediaGrid } from './CardMediaGrid';
import { focusRing } from '../../tailwind/styles/focus';
import { CardMediaGridProps } from './CardMediaGrid.interface';
import { mockRichTextShort } from '../../utils/mocks';

const mockCard = {
  imageSrc: 'https://www.khplant.co.za/wp-content/uploads/2015/08/cat-logo.jpg',
  imageAlt: 'construction site',
  headline: 'Testing',
  description: 'Testing',
  linkSrc: 'https://www.zeppelin.com',
  linkText: 'Click me',
}

const mockCardVertical = {...mockCard, imageSrc: 'https://www.zeppelin-cat.at/content/dam/zeppelin/baumaschinen/at/sonderangebote/Brosch%C3%BCre.JPG.imagethumb.original.jpg'}

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
