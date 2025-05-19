import { Meta, StoryObj } from '@storybook/react';
import { CookieLayer } from './CookieLayer';

const meta: Meta<typeof CookieLayer> = {
  title: 'Components/CookieLayer',
  component: CookieLayer,
  tags: ['autodocs'],
  argTypes: {
    onClickCookies: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof CookieLayer>;

export const Default: Story = {
  args: {
    description: 'This video requires cookies to be enabled. Please accept cookies to proceed.',
    label: 'Accept Cookies',
  },
};
