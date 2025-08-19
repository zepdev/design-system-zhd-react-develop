import type { Meta, StoryObj } from '@storybook/react';
import { ContactFormZsdServices } from '@/components/contact-form-zsd-services/ContactFormZsdServices';
import { ContactFormZsdServicesProps } from '@/components/contact-form-zsd-services/ContactFormZsdServices.interface';

const meta = {
  title: 'Patterns/ContactFormZsdServices',
  component: ContactFormZsdServices,
  tags: ['autodocs'],
  argTypes: {
    locale: {
      control: {
        type: 'radio',
        options: ['de', 'en'],
      },
    },
  },
} satisfies Meta<typeof ContactFormZsdServices>;

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
  } as ContactFormZsdServicesProps,
};
