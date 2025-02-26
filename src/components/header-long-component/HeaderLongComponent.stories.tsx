import type { Meta, StoryObj } from '@storybook/react';
import { HeaderLongComponent, HeaderLongComponentProps } from '.';
import { GlobalVariants } from '../../interfaces/global-variants';

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
    type: 'primary-button',
    tagline: 'Tagline',
    headline:
      'Headline Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus',
    linkText: 'Click me',
    linkHref: 'https://www.google.com',
    onClick: () => {},
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.',
  } as HeaderLongComponentProps,
};
