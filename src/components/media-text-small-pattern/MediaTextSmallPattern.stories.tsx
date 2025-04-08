import type { Meta, StoryObj } from '@storybook/react';
import { mockRichText } from '../../utils/mocks';
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

export const Default: Story = {
  args: {
    items: new Array(2).fill({
      headline: 'Headline',
      content: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png',
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText,
  } as MediaTextSmallPatternProps,
};

export const WithHeadline: Story = {
  args: {
    items: new Array(2).fill({
      headline: 'Headline',
      content: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png',
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText,
  } as MediaTextSmallPatternProps,
};

export const With3Items: Story = {
  args: {
    items: new Array(3).fill({
      headline: 'Headline',
      content: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png',
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText,
  } as MediaTextSmallPatternProps,
};

export const With4Items: Story = {
  args: {
    items: new Array(4).fill({
      headline: 'Headline',
      content: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png',
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText,
  } as MediaTextSmallPatternProps,
};

export const With5Items: Story = {
  args: {
    items: new Array(5).fill({
      headline: 'Headline',
      content: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png',
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText,
  } as MediaTextSmallPatternProps,
};

export const With6Items: Story = {
  args: {
    items: new Array(6).fill({
      headline: 'Headline',
      content: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png',
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText,
  } as MediaTextSmallPatternProps,
};

export const With7Items: Story = {
  args: {
    items: new Array(7).fill({
      headline: 'Headline',
      content: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png',
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText,
  } as MediaTextSmallPatternProps,
};

export const With8Items: Story = {
  args: {
    items: new Array(8).fill({
      headline: 'Headline',
      content: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png',
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description:mockRichText,
  } as MediaTextSmallPatternProps,
};
