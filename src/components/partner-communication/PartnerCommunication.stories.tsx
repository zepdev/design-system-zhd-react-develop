import type { Meta, StoryObj } from '@storybook/react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { PartnerCommunication } from './PartnerCommunication';
import { PartnerCommunicationProps } from './partner-communication.interface';

const logos = [
  { imageAlt: 'partnerlogo CAT', image: './assets/Logo_cat.svg' },
  { imageAlt: 'partnerlogo KBB', image: './assets/Logo_KBB.svg' },
  { imageAlt: 'partnerlogo Turbolader', image: './assets/Logo_Turbolader.svg' },
  { imageAlt: 'partnerlogo Napier', image: './assets/Logo_Napier.svg' },
  { imageAlt: 'partnerlogo MAK', image: './assets/Logo_MAK.svg' },
];

const meta = {
  title: 'Components/Partner Communication',
  component: PartnerCommunication,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: [...Object.keys(GlobalVariants), 'default'],
      },
    },
  },
} satisfies Meta<typeof PartnerCommunication>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: 'Wir sind exklusive Service-Partner von diesen Herstellern:',
    variant: 'ZPS',
    partners: logos,
  } as PartnerCommunicationProps,
};

export const With10Logos: Story = {
  args: {
    headline: 'Wir sind exklusive Service-Partner von diesen Herstellern:',
    variant: 'ZPS',
    partners: logos,
  } as PartnerCommunicationProps,
};
