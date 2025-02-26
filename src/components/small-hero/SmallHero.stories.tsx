import { Meta, StoryObj } from '@storybook/react';
import { SmallHero } from './SmallHero';
import { SmallHeroProps } from './small-hero.interface';

const meta = {
  title: 'Components/SmallHero',
  component: SmallHero,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SmallHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    backgroundVariant: 'gradient',
    headline: 'Tiernahrung',
    subline: 'Herstellung auf spitzenniveau',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.',
    imageSrc: './public/assets/newhero-small.png',
    imageAlt: 'image alt',
    primaryButtonLabel: 'Primary',
    secondaryButtonLabel: 'Secondary',
  } as SmallHeroProps,
};

export const GradientWithoutImage: Story = {
  args: {
    headline: 'Tiernahrung',
    subline: 'Herstellung auf spitzenniveau',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.',
    backgroundImage: '../public/assets/hero-small.png',
    primaryButtonLabel: 'Primary',
    secondaryButtonLabel: 'Secondary',
  } as SmallHeroProps,
};

export const PlainFullBackground: Story = {
  args: {
    backgroundVariant: 'indigo',
    headline: 'Tiernahrung',
    subline: 'Herstellung auf spitzenniveau',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.',
    primaryButtonLabel: 'Primary',
    secondaryButtonLabel: 'Secondary',
  } as SmallHeroProps,
};
