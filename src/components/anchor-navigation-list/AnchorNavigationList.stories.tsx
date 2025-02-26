import type { Meta, StoryObj } from '@storybook/react';
import { AnchorNavigationList } from './AnchorNavigationList';
import { AnchorNavigationListProps } from './anchor-navigation-list.interface';

const meta = {
  title: 'Patterns/AnchorNavigationList',
  component: AnchorNavigationList,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AnchorNavigationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    handleButtonClick: () => null,
    buttonText: 'Direkt anfragen',
    tabs: [
      {
        scrollToIdLink: 'test',
        linkLabel: 'Tab',
      },
    ],
  } as AnchorNavigationListProps,
};

export const With2Items: Story = {
  args: {
    handleButtonClick: () => null,
    buttonText: 'Direkt anfragen',
    tabs: [
      {
        scrollToIdLink: 'test',
        linkLabel: 'Tab 1',
      },
      {
        scrollToIdLink: 'test',
        linkLabel: 'Tab 2 ',
      },
      {
        scrollToIdLink: 'test',
        linkLabel: 'Tab 3 ',
      },
      {
        scrollToIdLink: 'test',
        linkLabel: 'Tab 4',
      },
      {
        scrollToIdLink: 'test',
        linkLabel: 'Tab 5',
      },
      {
        scrollToIdLink: 'test',
        linkLabel: 'Tab 6',
      },
    ],
  } as AnchorNavigationListProps,
};
