import { Meta, StoryObj } from '@storybook/react';
import { MultiLinkList } from './MultiLinkList';
import { LinkListItemProps } from '@/components/link-list-item';
import { GlobalVariants } from '../../interfaces/global-variants';
import { mockRichTextShort } from '../../utils/mocks';

const mockLinkList: LinkListItemProps = {
  links: [
    { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline' },
    { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline' },
    { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline' },
    { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline' },
  ],
  headline: 'Headline optional',
  description: mockRichTextShort,
}

const meta = {
  title: 'Patterns/MultiLinkList',
  component: MultiLinkList,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      children: {
        control: {
          type: 'select',
          options: [GlobalVariants.Zps, GlobalVariants.Cat],
        }
      }
    }
  },
} satisfies Meta<typeof MultiLinkList>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    headline: 'Two Link Lists',
    linkLists: Array.from({ length: 2 }).map(() => mockLinkList),
    variant: GlobalVariants.Zps,
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

export const ElevenItems: Story = {
  args: {
    headline: '11 Link Lists',
    linkLists: Array.from({ length: 11 }).map(() => mockLinkList),
  },
};

export const TwelveItems: Story = {
  args: {
    headline: '12 Link Lists',
    linkLists: Array.from({ length: 12 }).map(() => mockLinkList),
  },
};

export const ThirteenItems: Story = {
  args: {
    headline: '13 Link Lists',
    linkLists: Array.from({ length: 13 }).map(() => mockLinkList),
  },
};

export const FourteenItems: Story = {
  args: {
    headline: '14 Link Lists',
    linkLists: Array.from({ length: 14 }).map(() => mockLinkList),
  },
};

export const FifteenItems: Story = {
  args: {
    headline: '15 Link Lists',
    linkLists: Array.from({ length: 15 }).map(() => mockLinkList),
  },
};
