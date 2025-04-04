import type { Meta, StoryObj } from '@storybook/react';
import { LocaleVariants } from '../../interfaces/global-variants';
import { LightboxContactForm } from './LightboxContactForm';
import { LightboxContactFormProps } from './lightbox-contact-form.interface';

const meta = {
  title: 'Patterns/LightboxContactForm',
  component: LightboxContactForm,
  tags: ['autodocs'],
  argTypes: {
    locale: {
      control: {
        type: 'radio',
        options: Object.keys(LocaleVariants),
      },
    },
  },
} satisfies Meta<typeof LightboxContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="zep-h-[800px]">
        <Story />
      </div>
    ),
  ],
  args: {
    locale: LocaleVariants.EN,
    isOpen: true,
    privacyPolicyUrl: 'https://www.google.com',
    contactList: [
      {
        headline: 'Germany',
        links: [{ label: '0800 5892787', icon: 'phone', href: 'tel:0800-5892787' }]
      },
    ]
  } as LightboxContactFormProps,
};
