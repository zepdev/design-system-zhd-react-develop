import type { Meta, StoryObj } from '@storybook/react';
import { SmallHero } from './SmallHero';
import { SmallHeroProps } from './small-hero.interface';

const meta = {
  title: 'Components/SmallHero',
  component: SmallHero,
  argTypes: {},
} satisfies Meta<typeof SmallHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: 'Tiernahrung',
    subline: 'Herstellung auf spitzenniveau',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.',
    imageSrc: './public/assets/hero-small.png',
    imageAlt: 'image alt',
  } as SmallHeroProps,
};
