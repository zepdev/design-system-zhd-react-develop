import type { Meta, StoryObj } from '@storybook/react';
import { ContactFormZsd } from './ContactFormZsd';

const meta: Meta<typeof ContactFormZsd> = {
  title: 'Components/ContactFormZsd',
  component: ContactFormZsd,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ContactFormZsd>;

export const Default: Story = {
  args: {
    privacyPolicyUrl: 'https://example.com/privacy',
    onSubmit: (data) => console.log(data),
    headline: 'Contact Us',
    tagline: 'We are here to help',
    locale: 'en',
    loading: false,
    success: false,
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
};

export const Success: Story = {
  args: {
    ...Default.args,
    success: true,
  },
};

export const German: Story = {
  args: {
    ...Default.args,
    locale: 'de',
    headline: 'Kontakt',
    tagline: 'Wir sind für Sie da',
  },
};
