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
    contentItems: [
      {
        headline: 'Link Chain 1',
        linkItems: [
          { icon: 'arrow-long-right', link: 'https://www.google.com' },
          { icon: 'arrow-long-right', link: 'https://www.example.com' },
          { icon: 'arrow-long-right', link: 'https://www.stackoverflow.com' },
        ],
      },
      {
        headline: 'Link Chain  2',
        linkItems: [
          { icon: 'arrow-long-right', link: 'https://www.github.com' },
          { icon: 'arrow-long-right', link: 'https://www.gitlab.com' },
          { icon: 'arrow-long-right', link: 'https://www.gitlab.com' },
        ],
      },
      {
        headline: 'Link Chain  3',
        linkItems: [
          { icon: 'arrow-long-right', link: 'https://www.stackoverflow.com' },
          { icon: 'arrow-long-right', link: 'https://www.stackoverflow.com' },
          { icon: 'arrow-long-right', link: 'https://www.stackoverflow.com' },
        ],
      },
      {
        headline: 'Link Chain  4',
        linkItems: [
          { icon: 'arrow-long-right', link: 'https://www.linkedin.com' },
          { icon: 'arrow-long-right', link: 'https://www.twitter.com' },
          { icon: 'arrow-long-right', link: 'https://www.gitlab.com' },
        ],
      },
      {
        headline: 'Link Chain  5',
        linkItems: [
          { icon: 'arrow-long-right', link: 'https://www.linkedin.com' },
          { icon: 'arrow-long-right', link: 'https://www.twitter.com' },
          { icon: 'arrow-long-right', link: 'https://www.gitlab.com' },
        ],
      },
    ],
  },
};
