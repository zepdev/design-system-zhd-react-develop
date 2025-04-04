import type { Meta, StoryObj } from '@storybook/react';
import { ContactFormLarge } from './ContactFormLarge';
import { ContactFormLargeProps } from './contact-form-large-interface';

const meta = {
  title: 'Patterns/ContactFormLarge',
  component: ContactFormLarge,
  tags: ['autodocs'],
  argTypes: {
    locale: {
      control: {
        type: 'radio',
        options: ['de', 'en'],
      },
    },
  },
} satisfies Meta<typeof ContactFormLarge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    locale: 'de',
    onSubmit: () => console.log('Cons'),
    headline: 'Ich interessiere mich für Caterpillar Aggregate',
    tagline: 'Kontakt',
    linkLists: [
      { headline: 'Deutschland', links: [{ label: '0800 - 5892787', icon: 'phone', href: 'tel:0800-5892787' }] },
      {
        headline: 'International',
        links: [{ label: '+49 40 853 151-222', icon: 'phone', href: 'tel:+49 40 853 151-222' }],
      },
    ],
    preferencesUrl: '',
    privacyPolicyUrl: '',
  } as ContactFormLargeProps,
};
