import type { Meta, StoryObj } from '@storybook/react';

import { ContactCard } from './ContactCard';
import { ContactCardProps } from './contact-card.interface';

const meta = {
  title: 'Components/ContactCard',
  component: ContactCard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ContactCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fullName: 'Michael Pfrieger',
    image:
      'https://www.creativefabrica.com/wp-content/uploads/2022/11/21/Beautiful-African-American-Brown-Skin-Woman-Avatar-47788434-1.png',
    role: 'Business Unit Leiter Polyolefin Plants',
    phone: '+49 7541 202 1861',
    fax: '+49 7541 202 1861',
    email: 'michaell.pfrieger@zeppelin.com',
    address: 'Zeppelin Systems GmbH Musteradresse Rödermark',
    languages: ['Deutsch', 'English'],
  } as ContactCardProps,
};

export const MinimalPhone: Story = {
  args: {
    fullName: 'Michael Pfrieger',
    phone: '+49 7541 202 1861',
  } as ContactCardProps,
};

export const MinimalEmail: Story = {
  args: {
    fullName: 'Michael Pfrieger',
    email: 'michael.pfrieger@zeppelin.com',
  } as ContactCardProps,
};

export const NoImage: Story = {
  args: {
    fullName: 'Michael Pfrieger',
    role: 'Business Unit Leiter Polyolefin Plants',
    phone: '+49 7541 202 1861',
    fax: '+49 7541 202 1861',
    email: 'michael.pfrieger@zeppelin.com',
    address: 'Zeppelin Systems GmbH Musteradresse Rödermark',
    languages: ['Deutsch', 'English'],
  } as ContactCardProps,
};

export const OnlyMobil: Story = {
  args: {
    fullName: 'Michael Pfrieger',
    role: 'Business Unit Leiter Polyolefin Plants',
    phone: '+49 7541 202 1861',
    languages: ['Deutsch', 'English'],
  } as ContactCardProps,
};

export const MobilFax: Story = {
  args: {
    fullName: 'Michael Pfrieger',
    role: 'Business Unit Leiter Polyolefin Plants',
    phone: '+49 7541 202 1861',
    fax: '+49 7541 202 1861',
    languages: ['Deutsch', 'English'],
  } as ContactCardProps,
};

export const MobilFaxEmail: Story = {
  args: {
    fullName: 'Michael Pfrieger',
    role: 'Business Unit Leiter Polyolefin Plants',
    phone: '+49 7541 202 1861',
    fax: '+49 7541 202 1861',
    email: 'michael.pfrieger@zeppelin.com',
    languages: ['Deutsch', 'English'],
  } as ContactCardProps,
};
