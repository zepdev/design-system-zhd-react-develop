import type { Meta, StoryObj } from '@storybook/react';
import { SmallHeroZsd } from './SmallHeroZsd';
import { SmallHeroZsdProps } from './small-hero-zsd.interface';

const meta = {
  title: 'Components/SmallHeroZsd',
  component: SmallHeroZsd,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SmallHeroZsd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: 'TIERNAHRUNG',
    subline: 'HERSTELLUNG AUF SPITZENNIVEAU',
    buttonPrimary: 'Primary',
    buttonSecondary: 'Secondary',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    imageSrc: './public/assets/pic.svg',
    imageAlt: 'image alt',
  } as SmallHeroZsdProps,
};

export const OnlyHeadline: Story = {
  args: {
    headline: 'TIERNAHRUNG',
  } as SmallHeroZsdProps,
};
