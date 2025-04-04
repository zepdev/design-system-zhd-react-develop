import type { Meta, StoryObj } from '@storybook/react';

import image from '../../assets/temp-image.jpeg';
import { Hero } from './Hero';
import { HeroProps } from './hero.interface';

const meta = {
  title: 'Components/Hero',
  component: Hero,
  argTypes: {},
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'WE CREATE SOLUTIONS',
    description:
      'Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque. Rutrum porta massa mauris et fames pulvinar posuere suspendisse et. In sapien lectus sit in turpis.',
    primaryButtonText: 'Primary',
    secondaryButtonText: 'Secondary',
    image: image,
  } as HeroProps,
};
