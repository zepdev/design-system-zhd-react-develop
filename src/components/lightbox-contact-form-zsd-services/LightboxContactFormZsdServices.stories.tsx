import type { Meta, StoryObj } from '@storybook/react';
import { LightboxContactFormZsdServices } from '@/components/lightbox-contact-form-zsd-services/LightboxContactFormZsdServices';
import { LocaleVariants } from '../../interfaces/global-variants';

const meta = {
  title: 'patterns/LightboxContactFormZsdServices',
  component: LightboxContactFormZsdServices,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LightboxContactFormZsdServices>;

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
  }
}
