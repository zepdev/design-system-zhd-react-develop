import type { Meta, StoryObj } from '@storybook/react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { PartnerCommunicationProps } from './partner-communication.interface';
import { PartnerCommunication } from './PartnerCommunication';

const logos = [
  { alt: 'partnerlogo CAT', src: './assets/Logo_cat.svg' },
  { alt: 'partnerlogo KBB', src: './assets/Logo_KBB.svg' },
  { alt: 'partnerlogo Turbolader', src: './assets/Logo_Turbolader.svg' },
  { alt: 'partnerlogo Napier', src: './assets/Logo_Napier.svg' },
  { alt: 'partnerlogo MAK', src: './assets/Logo_MAK.svg' },
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
    children: (
      <>
        <div className="zep-flex zep-flex-wrap zep-items-center zep-justify-center zep-text-center zep-gap-1.5 xl:zep-gap-2">
          {logos.map((logo, index) => (
            <div key={index} className="zep-flex zep-items-center zep-justify-center">
              <img alt={logo.alt} className="zep-h-[32px] sm:zep-h-[40px] xl:zep-h-[56px]" src={logo.src} />
            </div>
          ))}
        </div>
      </>
    ),
  } as PartnerCommunicationProps,
};

export const With10Logos: Story = {
  args: {
    headline: 'Wir sind exklusive Service-Partner von diesen Herstellern:',
    variant: 'ZPS',
    children: (
      <>
        <div className="zep-flex zep-flex-wrap zep-items-center zep-justify-center zep-text-center zep-gap-1.5 xl:zep-gap-2">
          {/* Repeat the icon divs */}
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="zep-flex zep-items-center zep-justify-center">
              <img
                alt={`partner logo ${index + 1}`}
                className="zep-h-[32px] sm:zep-h-[40px] xl:zep-h-[56px]"
                src="./assets/Logo_cat.svg"
              />
            </div>
          ))}
        </div>
      </>
    ),
  } as PartnerCommunicationProps,
};
