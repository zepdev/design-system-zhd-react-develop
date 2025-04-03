import type { Meta, StoryObj } from '@storybook/react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { CardPatternProps } from './CardPattern.interface';
import { CardPattern } from './CardPattern';

const meta = {
  title: 'Patterns/CardPattern',
  component: CardPattern,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: {
        type: 'array',
      },
    },
  },
} satisfies Meta<typeof CardPattern>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: new Array(2).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      linkLabel: 'Click me',
    }),
  } as CardPatternProps,
};

export const WithHeadline: Story = {
  args: {
    items: new Array(2).fill({
        imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        tagline: 'Tagline',
        title: 'Title',
        description: 'Here is a description',
        linkLabel: 'Click me',
    }),
    headline: 'Zukunftsweisende Antriebslösungen und mehr für die moderne Schifffahrt',
    tagline: 'Zeppelin Power Systems Lösungen für Marine',
    linkText: 'Alle Lösungen für Marine anzeigen',
    type: 'link',
  } as CardPatternProps,
};

export const With3Items: Story = {
  args: {
    items: new Array(3).fill({
        imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        tagline: 'Tagline',
        title: 'Title',
        description: 'Here is a description',
        linkLabel: 'Click me',
    }),
  } as CardPatternProps,
};

export const With4Items: Story = {
  args: {
    items: new Array(4).fill({
        imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        tagline: 'Tagline',
        title: 'Title',
        description: 'Here is a description',
        linkLabel: 'Click me',
    }),
  } as CardPatternProps,
};

export const With5Items: Story = {
  args: {
    items: new Array(5).fill({
        imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        tagline: 'Tagline',
        title: 'Title',
        description: 'Here is a description',
        linkLabel: 'Click me',
    }),
  } as CardPatternProps,
};

export const With6Items: Story = {
  args: {
    items: new Array(6).fill({
        imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        tagline: 'Tagline',
        title: 'Title',
        description: 'Here is a description',
        linkLabel: 'Click me',
    }),
  } as CardPatternProps,
};
export const With7Items: Story = {
  args: {
    items: new Array(7).fill({
        imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        tagline: 'Tagline',
        title: 'Title',
        description: 'Here is a description',
        linkLabel: 'Click me',
    }),
  } as CardPatternProps,
};
export const With8Items: Story = {
  args: {
    items: new Array(8).fill({
        imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        tagline: 'Tagline',
        title: 'Title',
        description: 'Here is a description',
        linkLabel: 'Click me',
    }),
  } as CardPatternProps,
};
export const With9Items: Story = {
  args: {
    items: new Array(9).fill({
        imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        tagline: 'Tagline',
        title: 'Title',
        description: 'Here is a description',
        linkLabel: 'Click me',
    }),
  } as CardPatternProps,
};
export const With10Items: Story = {
  args: {
    items: new Array(10).fill({
        imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        tagline: 'Tagline',
        title: 'Title',
        description: 'Here is a description',
        linkLabel: 'Click me',
    }),
  } as CardPatternProps,
};
export const With11Items: Story = {
  args: {
    items: new Array(11).fill({
        imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        tagline: 'Tagline',
        title: 'Title',
        description: 'Here is a description',
        linkLabel: 'Click me',
    }),
  } as CardPatternProps,
};
export const With12Items: Story = {
  args: {
    items: new Array(12).fill({
        imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        tagline: 'Tagline',
        title: 'Title',
        description: 'Here is a description',
        linkLabel: 'Click me',
    }),
  } as CardPatternProps,
};
