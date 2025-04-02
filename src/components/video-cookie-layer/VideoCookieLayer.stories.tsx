import { Meta, StoryObj } from '@storybook/react';
import { VideoCookieLayer } from './VideoCookieLayer';

const meta: Meta<typeof VideoCookieLayer> = {
  title: 'Components/VideoCookieLayer',
  component: VideoCookieLayer,
  tags: ['autodocs'],
  argTypes: {
    onClickCookies: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof VideoCookieLayer>;

export const Default: Story = {
  args: {
    description: 'This video requires cookies to be enabled. Please accept cookies to proceed.',
    label: 'Accept Cookies',
  },
};