import type { Meta, StoryObj } from '@storybook/react';
import { ContactFormLargeZsd } from './ContactFormLargeZsd';
import { ContactFormLargeZsdProps } from './contact-form-large-zsd-interface';

const meta = {
  title: 'Patterns/ContactFormLargeZsd',
  component: ContactFormLargeZsd,
  tags: ['autodocs'],
  argTypes: {
    locale: {
      control: {
        type: 'radio',
        options: ['de', 'en'],
      },
    },
  },
} satisfies Meta<typeof ContactFormLargeZsd>;

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
  } as ContactFormLargeZsdProps,
};
