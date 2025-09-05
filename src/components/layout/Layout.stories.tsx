import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from './Layout';

const meta = {
  title: 'Components/Layout',
  component: Layout,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

// NOTE: This storybook file is only used as example, we will remove it in the future.

export const Default: Story = {
  args: {
    className: 'zep-bg-indigo-500',
    children: (
      <div className="zep-bg-red-400">
        <img loading="lazy" alt="partner cat" className="zep-mb-2" src="./assets/Logo_cat.svg" />
        <p className="zep-text-typography-light-100">
          LEGEND: Blue background is layout wrapper, red background is children/content/component. Red background will
          never exist anyway, it&apos;s just for visual separation
        </p>
      </div>
    ),
  },
};
