import type { Meta, StoryObj } from '@storybook/react';
import { LightboxContactFormZsd, LightboxContactFormZsdProps } from '.';
import { LocaleVariants } from '../../interfaces/global-variants';

const meta = {
  title: 'Patterns/LightboxContactFormZsd',
  component: LightboxContactFormZsd,
  tags: ['autodocs'],
  argTypes: {
    locale: {
      control: {
        type: 'radio',
        options: Object.keys(LocaleVariants),
      },
    },
  },
} satisfies Meta<typeof LightboxContactFormZsd>;

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
        links: [{ label: '0800 5892787', icon: 'phone', href: 'tel:0800-5892787' }],
      },
    ],
  } as LightboxContactFormZsdProps,
};
