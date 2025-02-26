import type { Meta, StoryObj } from '@storybook/react';
import { AnchorNavigationTab } from './AnchorNavigationTab';
import { AnchorNavigationTabProps } from './anchor-navigation-tab.interface';

const meta = {
  title: 'Components/AnchorNavigationCard',
  component: AnchorNavigationTab,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AnchorNavigationTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tab: {
      linkLabel: '',
      scrollToIdLink: '',
    },
  } as AnchorNavigationTabProps,
};
