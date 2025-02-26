import { render } from '@testing-library/react';
import { Footer } from '@/components/footer/Footer';
import { LinkListItemProps } from '@/components/link-list-item';
import { LinkTarget } from '~/@zepdev/design-system-component-library-react';
import { LinkProps } from '@zepdev/design-system-component-library-react';

describe('Footer component', () => {
  const mockLinkList: LinkListItemProps = {
    links: [
      { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline'},
      { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline'},
      { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline'},
      { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline'},
    ],
    headline: 'Headline optional',
  }
  const socialMediaTitle = 'Folgen Sie uns auf';
  const linkLists = [
      mockLinkList,
      mockLinkList,
      mockLinkList,
      mockLinkList,
      mockLinkList,
    ]
    const footerLinks = [
      { label: 'inline link', href: 'https://www.google.com', target: LinkTarget.Blank },
      { label: 'inline link', href: 'https://www.google.com', target: LinkTarget.Blank },
      { label: 'inline link', href: 'https://www.google.com', target: LinkTarget.Blank },
      { label: 'inline link', href: 'https://www.google.com', target: LinkTarget.Blank },
    ]
    const socialMediaLinks: LinkProps[] = [
      { icon: 'alarm', href: 'https://www.facebook.com', target: LinkTarget.Blank, label: '' },
      { icon: 'alarm', href: 'https://www.facebook.com', target: LinkTarget.Blank, label: '' },
    ]

  test('renders correctly', () => {
    const { getByTestId } = render(<Footer socialMediaLinks={socialMediaLinks} socialMediaTitle={socialMediaTitle} footerLinks={footerLinks} linkLists={linkLists} />);
    const footerElement = getByTestId('zep-footer');
    expect(footerElement).toBeInTheDocument();
  });
})
