import type { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';
import { focusRing } from '../../tailwind/styles/focus';

import { CardMedia } from './CardMedia';
import { CardMediaProps } from './cardmedia.interface';

const meta = {
  title: 'Components/CardMedia',
  component: CardMedia,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CardMedia>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8')}>
        <Story />
      </button>
    ),
  ],
  args: {
    imageSrc:
      'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    imageAlt: 'construction site',
    headline: 'Testing',
    description: 'Testing',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Click me',
  } as CardMediaProps,
};
