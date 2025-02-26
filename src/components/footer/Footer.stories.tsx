import type { Meta, StoryObj } from '@storybook/react';
import { LinkTarget } from '@zepdev/design-system-component-library-react';
import { LinkListItemProps } from '../link-list-item';
import { Footer } from './Footer';
import { FooterProps } from './Footer.interface';

const mockLinkList: LinkListItemProps = {
  links: [
    { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline'},
    { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline'},
    { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline'},
    { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline'},
  ],
  headline: 'Headline optional',
};

const meta = {
  title: 'Patterns/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    socialMediaTitle: 'Folgen Sie uns auf',
    linkLists: [mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList],
    footerLinks: [
      { label: 'inline link', href: 'https://www.google.com', target: LinkTarget.Blank },
      { label: 'inline link', href: 'https://www.google.com', target: LinkTarget.Blank },
      { label: 'inline link', href: 'https://www.google.com', target: LinkTarget.Blank },
      { label: 'inline link', href: 'https://www.google.com', target: LinkTarget.Blank },
    ],
    socialMediaLinks: [
      {
        socialIcon: 'youtube',
        href: 'https://www.facebook.com',
        target: LinkTarget.Blank,
      },
      { socialIcon: 'linkedin', href: 'https://www.facebook.com', target: LinkTarget.Blank },
    ],
  } as FooterProps,
};

export const WithHeadline: Story = {
  args: {
    headline: 'Headline',
    description: 'This is optional headline inside footer',
    tagline: 'Optional',
    socialMediaTitle: 'Folgen Sie uns auf',
    linkLists: [mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList],
    footerLinks: [
      { label: 'inline link', href: 'https://www.google.com', target: LinkTarget.Blank },
      { label: 'inline link', href: 'https://www.google.com', target: LinkTarget.Blank },
      { label: 'inline link', href: 'https://www.google.com', target: LinkTarget.Blank },
      { label: 'inline link', href: 'https://www.google.com', target: LinkTarget.Blank },
    ],
    socialMediaLinks: [
      {
        socialIcon: 'youtube',
        href: 'https://www.facebook.com',
        target: LinkTarget.Blank,
      },
      { socialIcon: 'linkedin', href: 'https://www.facebook.com', target: LinkTarget.Blank },
    ],
  } as FooterProps,
};
