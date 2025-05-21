import type { Meta, StoryObj } from '@storybook/react';

import { CardSquare } from './CardSquare';
import { CardSquareProps } from './card-square.interface';

const meta = {
  title: 'Components/CardSquare',
  component: CardSquare,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CardSquare>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <button>
        <Story />
      </button>
    ),
  ],
  args: {
    imageSrc: './assets/worker.png',
    imageAlt: 'worker img',
    headline: 'my Headline',
    description: 'The description',
    url: 'https://www.google.com',
  } as CardSquareProps,
};
