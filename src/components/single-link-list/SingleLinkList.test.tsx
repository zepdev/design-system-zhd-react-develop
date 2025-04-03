import { SingleLinkList } from '@/components/single-link-list/SingleLinkList';
import { render, screen } from '@testing-library/react';
import { LinkProps } from '@zepdev/design-system-component-library-react';

describe('Single Link List Pattern', () => {
  const title = 'Test Header Title';
  const links: LinkProps[] = [
    { icon: 'arrow-right', href: 'https://www.google.com', label: 'inline link' },
  ];

  it('should render a link list item with short header section', () => {
    render(<SingleLinkList title={title} links={links} />);
    const linkListItemElement = screen.getByTestId('zep-link-list');
    const headerShortElement = screen.getByTestId('header-short-component');
    expect(linkListItemElement).toBeInTheDocument();
    expect(headerShortElement).toBeInTheDocument();
  });
});
