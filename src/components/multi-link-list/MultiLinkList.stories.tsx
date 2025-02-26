import { Meta, StoryObj } from '@storybook/react';
import { MultiLinkList } from './MultiLinkList';
import { LinkListItemProps } from '../link-list-item';

const mockLinkList: LinkListItemProps = {
  links: [
    { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline'},
    { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline'},
    { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline'},
    { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline'},
  ],
  headline: 'Headline optional',
  description: 'Description optional',
}

const meta = {
  title: 'Patterns/MultiLinkList',
  component: MultiLinkList,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof MultiLinkList>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    headline: 'Two Link Lists',
    linkLists: Array.from({ length: 2 }).map(() => mockLinkList),
  },
};

export const ThreeItems: Story = {
  args: {
    headline: 'Three Link Lists',
    linkLists: Array.from({ length: 3 }).map(() => mockLinkList),
  },
};

export const FourItems: Story = {
  args: {
    headline: 'Four Link Lists',
    linkLists: Array.from({ length: 4 }).map(() => mockLinkList),
  },
};

export const FiveItems: Story = {
  args: {
    headline: 'Five Link Lists',
    linkLists: Array.from({ length: 5 }).map(() => mockLinkList),
  },
};

export const SixItems: Story = {
  args: {
    headline: 'Six Link Lists',
    linkLists: Array.from({ length: 6 }).map(() => mockLinkList),
  },
};

export const SevenItems: Story = {
  args: {
    headline: 'Seven Link Lists',
    linkLists: Array.from({ length: 7 }).map(() => mockLinkList),
  },
};

export const EightItems: Story = {
  args: {
    headline: 'Eight Link Lists',
    linkLists: Array.from({ length: 8 }).map(() => mockLinkList),
  },
};

export const NineItems: Story = {
  args: {
    headline: 'Nine Link Lists',
    linkLists: Array.from({ length: 9 }).map(() => mockLinkList),
  },
};

export const TenItems: Story = {
  args: {
    headline: 'Ten Link Lists',
    linkLists: Array.from({ length: 10 }).map(() => mockLinkList),
  },
};
