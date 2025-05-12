import type { Meta, StoryObj } from '@storybook/react';
import { SmallHeroZhd } from './SmallHeroZhd';
import { SmallHeroZhdProps } from './small-hero-zhd.interface';

const meta = {
  title: 'Components/SmallHero',
  component: SmallHeroZhd,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SmallHeroZhd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: 'Tiernahrung',
    subline: 'Herstellung auf spitzenniveau',
    buttonPrimary: 'Button Primary',
    buttonSecondary: 'Button Secondary',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus. ',
    imageSrc: './public/assets/hero-small.png',
    imageAlt: 'image alt',
  } as SmallHeroZhdProps,
};

export const WithIndigo: Story = {
  args: {
    headline: 'Tiernahrung',
    subline: 'Herstellung auf spitzenniveau',
    variant: 'indigo',
    buttonPrimary: 'Button Primary',
    buttonSecondary: 'Button Secondary',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus. ',
    imageSrc: './public/assets/hero-small.png',
    imageAlt: 'image alt',
  } as SmallHeroZhdProps,
};
