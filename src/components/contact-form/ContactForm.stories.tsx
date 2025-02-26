import type { Meta, StoryObj } from '@storybook/react';
import { ContactForm } from './ContactForm';
import { ContactFormProps } from './contact-form.interface';

const meta = {
  title: 'Patterns/ContactForm',
  component: ContactForm,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Mehr Details? Sprechen Sie uns an',
    subtitle: 'Unsere Experten für alle Fragen rund um Intensivmischer stehen Ihnen gerne persönlich zur Verfügung.',
    contact: {
      fullName: 'Michael Pfrieger',
      image:
        'https://www.creativefabrica.com/wp-content/uploads/2022/11/21/Beautiful-African-American-Brown-Skin-Woman-Avatar-47788434-1.png',
      role: 'Business Unit Leiter Polyolefin Plants',
      phone: '+49 7541 202 1861',
      fax: '+49 7541 202 1861',
      email: 'michaell.pfrieger@zeppelin.com',
      address: 'Zeppelin Systems GmbH Musteradresse Rödermark',
      languages: ['Deutsch', 'English'],
    },
    onSubmit: () => null,
  } as ContactFormProps,
};
