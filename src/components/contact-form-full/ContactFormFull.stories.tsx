import type { Meta, StoryObj } from '@storybook/react';
import { ContactFormFull } from './ContactFormFull';
import { ContactFormProps } from './contact-form-full-interface';

const meta = {
  title: 'Patterns/ContactForm(Builder)',
  component: ContactFormFull,
  tags: ['autodocs'],
  argTypes: {
    locale: {
      control: {
        type: 'radio',
        options: ['de', 'en'],
      },
    },
  },
} satisfies Meta<typeof ContactFormFull>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    locale: 'de',
    onSubmit: () => console.log('Cons'),
    headline: 'This is a full form builder (Contact Form full)',
    tagline: 'Kontakt',
    linkLists: [
      { headline: 'Deutschland', links: [{ label: '0800 - 5892787', icon: 'phone', href: 'tel:0800-5892787' }] },
      {
        headline: 'International',
        links: [{ label: '+49 40 853 151-222', icon: 'phone', href: 'tel:+49 40 853 151-222' }],
      },
    ],
  } as ContactFormProps,
};
