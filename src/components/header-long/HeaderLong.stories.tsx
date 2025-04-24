import type { Meta, StoryObj } from '@storybook/react';
import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';
import { mockRichTextShort } from '../../utils/mocks';
import { HeaderLong } from './HeaderLong';
import { HeaderLongProps } from './headerlong.interface';

const meta = {
  title: 'Patterns/HeaderLong',
  component: HeaderLong,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof HeaderLong>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: GlobalVariants.Zps,
    type: 'primary-dark',
    tagline: 'Tagline',
    headline:
      'Headline Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus',
    linkText: 'Click me',
    linkHref: 'https://www.google.com',
    onClick: () => {},
    description: mockRichTextShort,
  } as HeaderLongProps,
};

export const WithBackground: Story = {
  args: {
    variant: GlobalVariantExtended.ZpsBg,
    type: 'link',
    tagline: 'Tagline',
    headline: 'Headline',
    linkText: 'Click me',
    linkHref: 'https://www.google.com',
    description: mockRichTextShort,
  } as HeaderLongProps,
};

export const WithLink: Story = {
  args: {
    variant: GlobalVariants.Zps,
    type: 'link',
    tagline: 'Tagline',
    headline: 'Headline',
    linkText: 'Click me',
    linkHref: 'https://www.google.com',
    description: mockRichTextShort,
  } as HeaderLongProps,
};

export const WithButton: Story = {
  args: {
    variant: GlobalVariants.Zps,
    type: 'secondary-dark',
    tagline: 'Tagline',
    headline: 'Headline',
    linkText: 'Click me',
    onClick: () => {},
    description: mockRichTextShort,
  } as HeaderLongProps,
};
