import type { Meta, StoryObj } from '@storybook/react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { CardSquareList } from './CardSquareList';
import { CardSquareListProps } from './card-square-list.interface';

const meta = {
  title: 'Patterns/CardSquareList',
  component: CardSquareList,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: {
        type: 'array',
      },
    },
    variant: {
      control: {
        type: 'radio',
        options: Object.keys(GlobalVariants),
      },
    },
  },
} satisfies Meta<typeof CardSquareList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: new Array(2).fill({
      headline: 'Headline',
      imageSrc: 'https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com',
    }),
    variant: GlobalVariants.Zps,
  } as CardSquareListProps,
};

export const WithHeadline: Story = {
  args: {
    items: new Array(2).fill({
      headline: 'Headline ',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com//////',
    }),
    variant: GlobalVariants.Zps,
    headline: 'Zukunftsweisende Antriebslösungen und mehr für die moderne Schifffahrt',
    tagline: 'Zeppelin Power Systems Lösungen für Marine',
    linkText: 'Alle Lösungen für Marine anzeigen',
    type: 'link',
  } as CardSquareListProps,
};

export const With3Items: Story = {
  args: {
    items: new Array(3).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com',
    }),
    variant: GlobalVariants.Zps,
  } as CardSquareListProps,
};

export const With4Items: Story = {
  args: {
    items: new Array(4).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com',
    }),
    variant: GlobalVariants.Zps,
  } as CardSquareListProps,
};

export const With5Items: Story = {
  args: {
    items: new Array(5).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com',
    }),
    variant: GlobalVariants.Zps,
  } as CardSquareListProps,
};

export const With6Items: Story = {
  args: {
    items: new Array(6).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com',
    }),
    variant: GlobalVariants.Zps,
  } as CardSquareListProps,
};
export const With7Items: Story = {
  args: {
    items: new Array(7).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com',
    }),
    variant: GlobalVariants.Zps,
  } as CardSquareListProps,
};
export const With8Items: Story = {
  args: {
    items: new Array(8).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com',
    }),
    variant: GlobalVariants.Zps,
  } as CardSquareListProps,
};
export const With9Items: Story = {
  args: {
    items: new Array(9).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com',
    }),
    variant: GlobalVariants.Zps,
  } as CardSquareListProps,
};
export const With10Items: Story = {
  args: {
    items: new Array(10).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com',
    }),
    variant: GlobalVariants.Zps,
  } as CardSquareListProps,
};
export const With11Items: Story = {
  args: {
    items: new Array(11).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com',
    }),
    variant: GlobalVariants.Zps,
  } as CardSquareListProps,
};
export const With12Items: Story = {
  args: {
    items: new Array(12).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com',
    }),
    variant: GlobalVariants.Zps,
  } as CardSquareListProps,
};
