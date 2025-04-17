import type { Meta, StoryObj } from '@storybook/react';
import { AnchorNavigationList } from './AnchorNavigationList';
import { AnchorNavigationListProps } from './anchor-navigation-list.interface';

const meta = {
  title: 'Patterns/AnchorNavigationList',
  component: AnchorNavigationList,
  tags: ['autodocs'],
  argTypes: {
    navigationCards: {
      control: {
        type: 'array',
      },
    },
  },
} satisfies Meta<typeof AnchorNavigationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    navigationCards: [
      {
        linkLabel: 'Training',
        scrollToIdLink: 'test',
      },
    ],
  } as AnchorNavigationListProps,
};

export const With2Items: Story = {
  args: {
    navigationCards: new Array(2).fill({
      linkLabel: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test',
    }),
  } as AnchorNavigationListProps,
};

export const With3Items: Story = {
  args: {
    navigationCards: new Array(3).fill({
      linkLabel: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test',
    }),
  } as AnchorNavigationListProps,
};

export const With4Items: Story = {
  args: {
    navigationCards: new Array(4).fill({
      linkLabel: 'Training',
      scrollToIdLink: 'test',
    }),
  } as AnchorNavigationListProps,
};

export const With5Items: Story = {
  args: {
    navigationCards: new Array(5).fill({
      linkLabel: 'Dual Study Program',
      scrollToIdLink: 'test',
    }),
  } as AnchorNavigationListProps,
};

export const With6Items: Story = {
  args: {
    navigationCards: new Array(6).fill({
      linkLabel: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test',
    }),
  } as AnchorNavigationListProps,
};

export const With7Items: Story = {
  args: {
    navigationCards: new Array(7).fill({
      linkLabel: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test',
    }),
  } as AnchorNavigationListProps,
};

export const With8Items: Story = {
  args: {
    navigationCards: new Array(8).fill({
      linkLabel: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test',
    }),
  } as AnchorNavigationListProps,
};
