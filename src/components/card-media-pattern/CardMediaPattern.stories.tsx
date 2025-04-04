import clsx from 'clsx';
import type { Meta, StoryObj } from '@storybook/react';
import { CardMediaPattern } from './CardMediaPattern';
import { focusRing } from '../../tailwind/styles/focus';
import { CardMediaPatternProps } from './CardMediaPattern.interface';
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
  title: 'Patterns/CardMediaPattern',
  component: CardMediaPattern,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CardMediaPattern>;

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
    headline: 'Card Media with 2 cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    description: mockRichTextShort,
  } as CardMediaPatternProps,
};

export const CardMediaVertical: Story = {
  decorators: [
    (Story) => (
      <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>
    ),
  ],
  args: {
    cards: [mockCardVertical, mockCardVertical],
    headline: 'Card Media with 2 cards with vertical images',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    imageOrientation: 'vertical',
    description: mockRichTextShort,
  } as CardMediaPatternProps,
};

export const CardMedia3Cards: Story = {
  decorators: [
    (Story) => (
      <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>
    ),
  ],
  args: {
    cards: [mockCard, mockCard, mockCard],
    headline: 'Card Media with 3 cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    description: mockRichTextShort,
  } as CardMediaPatternProps,
};

export const CardMedia3PlusCards: Story = {
  decorators: [
    (Story) => (
      <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>
    ),
  ],
  args: {
    cards: [mockCard, mockCard, mockCard, mockCard, mockCard],
    headline: 'Card Media with 3+ cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    description: mockRichTextShort,
  } as CardMediaPatternProps,
};
