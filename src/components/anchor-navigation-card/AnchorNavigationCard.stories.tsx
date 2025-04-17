import type { Meta, StoryObj } from '@storybook/react';
import { AnchorNavigationCard } from './AnchorNavigationCard';
import { AnchorNavigationCardProps } from './anchor-navigation-card.interface';

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
    scrollToIdLink: 'test',
    linkLabel: 'Mehr zum Gasmotor',
  } as AnchorNavigationCardProps,
};
