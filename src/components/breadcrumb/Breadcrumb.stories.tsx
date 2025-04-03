import { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';
import { BreadcrumbProps } from './Breadcrumb.interface';

const meta: Meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { path: '/', title: 'Home' },
      { path: '/link-2', title: 'Link 2' },
      { path: '/link-3', title: 'Link 3' },
      { path: '/link-4', title: 'Link 4' },
      { path: '/link-5', title: 'Link 5' },
    ],
  } as BreadcrumbProps,
};
