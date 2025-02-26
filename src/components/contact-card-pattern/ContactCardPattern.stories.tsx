import type { Meta, StoryObj } from '@storybook/react';
import { ContactCardProps } from '../contact-card/contact-card.interface';
import { ContactCardPattern } from './ContactCardPattern';
import { ContactCardPatternProps, ContactCardSectionProps } from './contact-card-pattern.interface';

const mockContactCard: ContactCardProps = {
  fullName: 'Michael Pfrieger',
  image:
    'https://www.creativefabrica.com/wp-content/uploads/2022/11/21/Beautiful-African-American-Brown-Skin-Woman-Avatar-47788434-1.png',
  role: 'Business Unit Leiter Polyolefin Plants',
  phone: '+49 7541 202 1861',
  fax: '+49 7541 202 1861',
  email: 'michaell.pfrieger@zeppelin.com',
  address: 'Zeppelin Systems GmbH Musteradresse Rödermark',
  languages: ['Deutsch', 'English'],
};

const tabDefault = (index: number): ContactCardSectionProps => ({
  linkLabel: `Tab Label-${index}`,
  scrollToIdLink: `tab-${index}`,
  contacts: Array.from({ length: 4 }).map(() => mockContactCard),
});

const tabSix = (index: number): ContactCardSectionProps => ({
    linkLabel: `Tab Label-${index}`,
    scrollToIdLink: `tab-${index}`,
    contacts: Array.from({ length: 6 }).map(() => mockContactCard),
  });

const meta = {
  title: 'Patterns/ContactCardPattern',
  component: ContactCardPattern,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ContactCardPattern>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: Array.from({ length: 3 }).map((_, index) => tabDefault(index)),
    headline: 'Headline',
    tagline: 'Tagline',
    type: 'link',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.',
  } as ContactCardPatternProps,
};

export const With6Cards: Story = {
    args: {
      tabs: Array.from({ length: 2 }).map((_, index) => tabSix(index)),
      headline: 'Headline',
      tagline: 'Tagline',
      type: 'link',
      linkSrc: 'https://www.zeppelin.com',
      linkText: 'Standalone link',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.',
    } as ContactCardPatternProps,
  };
