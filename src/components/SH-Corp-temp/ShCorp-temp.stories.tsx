import type { Meta, StoryObj } from '@storybook/react';
import { SHCorp } from './ShCorp-temp';
import { ShCorpProps } from './sh-corp-interface-temp';

const meta = {
  title: 'Components/SmallHeroCorporate',
  component: SHCorp,
  argTypes: {},
} satisfies Meta<typeof SHCorp>;

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
    primaryButtonText: 'Primary',
    secondaryButtonText: 'Secondary',
  } as ShCorpProps,
};
