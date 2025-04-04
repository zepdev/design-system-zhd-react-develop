import { Meta, StoryObj } from '@storybook/react';
import { SingleLinkList } from './SingleLinkList';
import { GlobalVariants } from '../../interfaces/global-variants';
import { mockRichTextShort } from '../../utils/mocks';

const meta = {
  title: 'Patterns/SingleLinkList',
  component: SingleLinkList,
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
} satisfies Meta<typeof SingleLinkList>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    title: 'Zertifikate für Typenzulassungen zum Download',
    links: [
      { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline' },
      { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline' },
      { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline' },
      { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline' },
    ],
    headline: 'Headline optional',
    description: mockRichTextShort,
    variant: GlobalVariants.Zps,
  },
};
