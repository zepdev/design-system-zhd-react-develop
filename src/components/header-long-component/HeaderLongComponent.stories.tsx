import type { Meta, StoryObj } from '@storybook/react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { mockRichTextShort } from '../../utils/mocks';
import { HeaderLongComponent, HeaderLongComponentProps } from '../header-long-component';

const meta = {
  title: 'Components/HeaderLongComponent',
  component: HeaderLongComponent,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof HeaderLongComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: GlobalVariants.Zps,
    type: 'secondary-button',
    tagline: 'Tagline',
    headline:
      'Headline Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus',
    linkText: 'Click me',
    linkHref: 'https://www.google.com',
    onClick: () => {},
    description: mockRichTextShort,
  } as HeaderLongComponentProps,
};
