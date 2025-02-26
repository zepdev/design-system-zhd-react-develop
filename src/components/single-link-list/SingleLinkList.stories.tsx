import { Meta, StoryObj } from '@storybook/react';
import { SingleLinkList } from './SingleLinkList';

const meta = {
  title: 'Patterns/SingleLinkList',
  component: SingleLinkList,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SingleLinkList>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    title: 'Zertifikate für Typenzulassungen zum Download',
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
