import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { CardProps } from './card.interface';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageSrc:
      'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    imageAlt: 'construction site',
    tagline: 'Tagline',
    title: 'Title',
    description: 'Here is a description',
    linkLabel: 'Click me',
  } as CardProps,
};
