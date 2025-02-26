import type { Meta, StoryObj } from '@storybook/react';
import { CardMediaPattern } from './CardMediaPattern';
import { CardMediaPatternProps, CardsSectionProps } from './CardMediaPattern.interface';
import { CardMediaProps } from './card-media-component';
import clsx from 'clsx';
import { focusRing } from '../../tailwind/styles/focus';

const mockCard: CardMediaProps = {
  imageSrc:
    'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  imageAlt: 'construction site',
  headline: 'Testing',
  description: 'Testing Testing Testing Testing v v Testing Testing Testing Testing v Testing v Testing Testing v v v Testing v Testing Testing Testing Testing Testing Testing Testing Testing',
  onDownload: () => null,
  linkText: 'Click me',
}

const tabWithTwo = (index: number): CardsSectionProps => ({
  linkLabel: 'Tab Label',
  scrollToIdLink: `tab-${index}`,
  cards: Array.from({ length: 2 }).map(() => mockCard),
});
const tabWithThree = (index: number): CardsSectionProps => ({
  linkLabel: 'Tab Label',
  scrollToIdLink: `tab-${index}`,
  cards: Array.from({ length: 3 }).map(() => mockCard),
});
const tabWithMoreThanThree = (index: number): CardsSectionProps => ({
  linkLabel: 'Tab Label',
  scrollToIdLink: `tab-${index}`,
  cards: Array.from({ length: 5 }).map(() => mockCard),
});
const meta = {
  title: 'Patterns/CardMediaPattern',
  component: CardMediaPattern,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CardMediaPattern>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: Array.from({ length: 3 }).map((_, index) => tabWithTwo(index)),
    headline: 'Card Media with 2 cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.',
  } as CardMediaPatternProps,
};
//
export const CardMediaVertical: Story = {
  decorators: [
    (Story) => (
      <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>
    ),
  ],
  args: {
    tabs: Array.from({ length: 2 }).map((_, index) => tabWithTwo(index)),
    headline: 'Card Media with 2 cards with vertical images',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    imageOrientation: 'vertical',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.',
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
    tabs: Array.from({ length: 3 }).map((_, index) => tabWithThree(index)),
    headline: 'Card Media with 3 cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.',
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
    tabs: Array.from({ length: 3 }).map((_, index) => tabWithMoreThanThree(index)),
    headline: 'Card Media with 3+ cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.',
  } as CardMediaPatternProps,
};

