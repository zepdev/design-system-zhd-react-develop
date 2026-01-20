import type { Meta, StoryObj } from '@storybook/react';
import { LinkTarget } from '@zepdev/design-system-component-library-react';
import { LinkListItemProps } from '../link-list-item';
import { Footer } from './Footer';
import { FooterProps } from './Footer.interface';
import { GlobalVariants } from '../../interfaces/global-variants';

const mockLinkList: LinkListItemProps = {
  links: [
    { href: 'https://www.google.com', label: 'link inline' },
    { href: 'https://www.google.com', label: 'link inline' },
    { href: 'https://www.google.com', label: 'link inline' },
    { href: 'https://www.google.com', label: 'link inline' },
  ],
  headline: 'Headline optional',
};

const meta = {
  title: 'Patterns/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {
    prominentSocialIcons: {
      control: 'boolean',
      description: 'When true, displays larger colorful social icons (40x40 instead of 24x24)',
    },
    variant: {
      control: 'select',
      options: Object.values(GlobalVariants),
    },
  },
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
      { socialIcon: 'linkedin-circle', href: 'https://www.linkedin.com', target: LinkTarget.Blank },
      { socialIcon: 'youtube-circle', href: 'https://www.youtube.com', target: LinkTarget.Blank },
      { socialIcon: 'instagram-circle', href: 'https://www.instagram.com', target: LinkTarget.Blank },
    ],
    prominentSocialIcons: false,
  } as FooterProps,
};

export const ProminentSocialIcons: Story = {
  args: {
    variant: GlobalVariants.Zsd,
    socialMediaTitle: 'Folgen Sie uns auf',
    linkLists: [mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList],
    footerLinks: [
      { label: 'inline link', href: 'https://www.google.com', target: LinkTarget.Blank },
      { label: 'inline link', href: 'https://www.google.com', target: LinkTarget.Blank },
      { label: 'inline link', href: 'https://www.google.com', target: LinkTarget.Blank },
      { label: 'inline link', href: 'https://www.google.com', target: LinkTarget.Blank },
    ],
    socialMediaLinks: [
      { socialIcon: 'linkedin-circle', href: 'https://www.linkedin.com', target: LinkTarget.Blank },
      { socialIcon: 'youtube-circle', href: 'https://www.youtube.com', target: LinkTarget.Blank },
      { socialIcon: 'instagram-circle', href: 'https://www.instagram.com', target: LinkTarget.Blank },
    ],
    prominentSocialIcons: true,
  } as FooterProps,
};
