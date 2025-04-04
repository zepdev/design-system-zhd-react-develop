import type { Meta, StoryObj } from '@storybook/react';
import { mockRichTextShort } from '../../utils/mocks';
import { ZsdButtonVariant } from '../zsd-button';
import { ProductHighLight } from './Product-highlight';
import { ProductHighLightProps } from './product-highlight.interface';

const meta = {
  title: 'Components/ProductHighLight',
  component: ProductHighLight,
  tags: ['autodocs'],
  argTypes: {
    buttonVariant: {
      control: {
        type: 'radio',
        options: Object.keys(ZsdButtonVariant),
      },
    },
  },
} satisfies Meta<typeof ProductHighLight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    productDetails: [mockRichTextShort, mockRichTextShort, mockRichTextShort],
    imageSrc:
      'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    alt: 'Lorem ipsum dolor sit ',
    imageAlt: 'alt text',
    buttonText: 'Button',
    buttonTitle: 'button title',
    buttonVariant: ZsdButtonVariant.PrimaryDark,
    imageAlignment: 'left',
  } as ProductHighLightProps,
};

export const RightImageAlignment: Story = {
  args: {
    productDetails: [mockRichTextShort, mockRichTextShort, mockRichTextShort],
    imageSrc:
      'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    imageAlt: 'alt text',
    buttonText: 'Button',
    buttonTitle: 'button title',
    imageAlignment: 'right',
    buttonVariant: ZsdButtonVariant.PrimaryDark,
    buttonUrl: 'url button',
  } as ProductHighLightProps,
};
