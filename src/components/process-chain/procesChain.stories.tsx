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

export const ListChain: Story = {
  args: {
    linkChain: false,
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

export const LinkChain: Story = {
  args: {
    linkChain: true,
    hasIcon: false,
    contentItems: [
      {
        headline: 'Link Chain 1',
        linkItems: [
          { link: 'https://www.google.com' },
          { link: 'https://www.example.com' },
          { link: 'https://www.stackoverflow.com' },
        ],
      },
      {
        headline: 'Link Chain  2',
        linkItems: [
          { link: 'https://www.github.com' },
          { link: 'https://www.gitlab.com' },
          { link: 'https://www.gitlab.com' },
        ],
      },
      {
        headline: 'Link Chain  3',
        linkItems: [
          { link: 'https://www.stackoverflow.com' },
          { link: 'https://www.stackoverflow.com' },
          { link: 'https://www.stackoverflow.com' },
        ],
      },
      {
        headline: 'Link Chain  4',
        linkItems: [
          { link: 'https://www.linkedin.com' },
          { link: 'https://www.twitter.com' },
          { link: 'https://www.gitlab.com' },
          { link: 'https://www.gitlab.com' },
        ],
      },
    ],
  },
};
