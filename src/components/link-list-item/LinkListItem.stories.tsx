import { Meta, StoryObj } from '@storybook/react';
import { LinkListItem } from './LinkListItem';

const meta = {
  title: 'Components/LinkListItem',
  component: LinkListItem,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LinkListItem>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    links: [
      { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline'},
      { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline'},
      { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline'},
      { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline'},
    ],
    headline: 'Headline optional',
    description: 'Description optional',
  },
};
