import { Meta, StoryObj } from '@storybook/react';
import { ProcessChain } from './ProcessChain';

const meta = {
  title: 'Components/ProcessChain',
  component: ProcessChain,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ProcessChain>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    contentItems: [
      {
        headline: 'List Chain 1',
        listItems: ['list item', 'list item', 'list item'],
      },
      {
        headline: 'List Chain 2',
        listItems: ['list item', 'list item', 'list item'],
      },
      {
        headline: 'List Chain 3',
        listItems: ['list item', 'list item', 'list item', 'list item'],
      },
      {
        headline: 'List Chain 4',
        listItems: ['list item', 'list item', 'list item'],
      },
      // {
      //   headline: 'List Chain 5',
      //   listItems: ['list item', 'list item', 'list item'],
      // },
    ],
  },
};
