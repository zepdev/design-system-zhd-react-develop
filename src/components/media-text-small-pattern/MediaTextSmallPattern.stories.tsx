import type { Meta, StoryObj } from '@storybook/react';
import { MediaTextSmallPattern } from './MediaTextSmallPattern';
import { MediaTextSmallPatternProps } from './media-text-small-pattern.interfce';

const meta = {
  title: 'Patterns/MediaTextSmallPattern',
  component: MediaTextSmallPattern,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: {
        type: 'array',
      },
    },
  },
} satisfies Meta<typeof MediaTextSmallPattern>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockOrderedListItem = [
  'Lorem Ipsum dolor sit amet',
  'Lorem Ipsum dolor sit amet',
  'Lorem Ipsum dolor sit amet',
  'Lorem Ipsum dolor sit amet',
  'Lorem Ipsum dolor sit amet',
];

export const Default: Story = {
  args: {
    items: new Array(2).fill({
      headline: 'Headline',
      imageSrc:
        'https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg',
      imageAlt: 'worker img',
      description:
        'This is the description,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      orderedLists: mockOrderedListItem,
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec',
  } as MediaTextSmallPatternProps,
};

export const WithHeadline: Story = {
  args: {
    items: new Array(2).fill({
      headline: 'Headline ',
      imageSrc:
        'https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg',
      imageAlt: 'worker img',
      description:
        'This is the description,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      orderedLists: mockOrderedListItem,
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec',
  } as MediaTextSmallPatternProps,
};

export const With3Items: Story = {
  args: {
    items: new Array(3).fill({
      headline: 'Headline',
      imageSrc:
        'https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg',
      imageAlt: 'worker img',
      description:
        'This is the description,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      orderedLists: mockOrderedListItem,
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec',
  } as MediaTextSmallPatternProps,
};

export const With4Items: Story = {
  args: {
    items: new Array(4).fill({
      headline: 'Headline',
      imageSrc:
        'https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg',
      imageAlt: 'worker img',
      description:
        'This is the description,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      orderedLists: mockOrderedListItem,
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec',
  } as MediaTextSmallPatternProps,
};

export const With5Items: Story = {
  args: {
    items: new Array(5).fill({
      headline: 'Headline',
      imageSrc:
        'https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg',
      imageAlt: 'worker img',
      description:
        'This is the description,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      orderedLists: mockOrderedListItem,
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec',
  } as MediaTextSmallPatternProps,
};

export const With6Items: Story = {
  args: {
    items: new Array(6).fill({
      headline: 'Headline',
      imageSrc:
        'https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg',
      imageAlt: 'worker img',
      description:
        'This is the description,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      orderedLists: mockOrderedListItem,
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec',
  } as MediaTextSmallPatternProps,
};

export const With7Items: Story = {
  args: {
    items: new Array(7).fill({
      headline: 'Headline',
      imageSrc:
        'https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg',
      imageAlt: 'worker img',
      description:
        'This is the description,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      orderedLists: mockOrderedListItem,
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec',
  } as MediaTextSmallPatternProps,
};

export const With8Items: Story = {
  args: {
    items: new Array(8).fill({
      headline: 'Headline',
      imageSrc:
        'https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg',
      imageAlt: 'worker img',
      description:
        'This is the description,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      orderedLists: mockOrderedListItem,
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec',
  } as MediaTextSmallPatternProps,
};
