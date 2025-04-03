import type { Meta, StoryObj } from '@storybook/react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { CardEventPattern } from './CardEventPattern';
import { CardEventPatternProps } from './card-event-pattern.interface';

const meta = {
  title: 'Patterns/CardEventPattern',
  component: CardEventPattern,
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
} satisfies Meta<typeof CardEventPattern>;

export default meta;
type Story = StoryObj<typeof meta>;

export const With5Items: Story = {
  args: {
    headline: 'main headline',
    items: new Array(5).fill(null).map((_, index) => ({
      headline: `Headline ${index + 1}`,
      imageSrc:
        'https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg',
      imageAlt: 'worker img',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      location: 'Berlin',
      date: '24.12.2023',
      linkSrc: 'https://google.com',
      linkLabel: 'Click me',
    })),
    variant: GlobalVariants.Zps,
    buttonLabel: 'Weitere Ergebnisse anzeigen',
  } as CardEventPatternProps,
};

export const With20Items: Story = {
  args: {
    headline: 'main headline',
    items: new Array(20).fill(null).map((_, index) => ({
      headline: `Headline ${index + 1}`,
      imageSrc:
        'https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg',
      imageAlt: 'worker img',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      location: 'Berlin',
      date: '24.12.2023',
      linkSrc: 'https://google.com',
      linkLabel: 'Click me',
    })),
    buttonLabel: 'Weitere Ergebnisse anzeigen',
    variant: GlobalVariants.Zps,
    tagline: 'Zeppelin Power Systems',
    linkText: 'Alle Lösungen für Marine anzeigen',
    type: 'link',
  } as CardEventPatternProps,
};

export const With100Items: Story = {
  args: {
    headline: 'main headline',
    items: new Array(100).fill(null).map((_, index) => ({
      headline: `Headline ${index + 1}`,
      imageSrc:
        'https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg',
      imageAlt: 'worker img',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      location: 'Berlin',
      date: '24.12.2023',
      linkSrc: 'https://google.com',
      linkLabel: 'Click me',
    })),
    buttonLabel: 'Weitere Ergebnisse anzeigen',
    variant: GlobalVariants.Zps,
    tagline: 'Zeppelin Power Systems',
    linkText: 'Alle Lösungen für Marine anzeigen',
    type: 'link',
  } as CardEventPatternProps,
};
