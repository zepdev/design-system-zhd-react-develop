import type { Meta, StoryObj } from '@storybook/react';
import { LinkMode } from '@zepdev/design-system-component-library-react';
import { Link } from './ZsdLink';
import { LinkProps } from './ZsdLink.interface';

const meta = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Link',
    href: 'https://www.google.com',
    mode: LinkMode.Inline,
  } as LinkProps,
};
