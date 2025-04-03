import type { Meta, StoryObj } from '@storybook/react';
import { AnchorNavigationCard } from './AnchorNavigationCard';
import { AnchorNavigationCardProps } from './anchor-navigation-card.interface';
import { GlobalVariants } from '../../interfaces/global-variants';

const meta = {
  title: 'Components/AnchorNavigationCard',
  component: AnchorNavigationCard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AnchorNavigationCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
    variant: GlobalVariants.Zps,
    scrollToIdLink: 'test',
    linkLabel: 'Mehr zum Gasmotor',
    isLoading: false,
  } as AnchorNavigationCardProps,
};
