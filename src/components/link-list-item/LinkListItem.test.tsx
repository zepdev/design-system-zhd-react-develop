import { LinkListItem } from '@/components/link-list-item/LinkListItem';
import { render, screen } from '@testing-library/react';
import { LinkProps } from '@zepdev/design-system-component-library-react/dist/src/components/link/link.interface';
import { GlobalVariants } from '../../interfaces/global-variants';

describe('Link List Item component', () => {
  const links: LinkProps[] = [
    { icon: 'arrow-right', href: '/home/about', label: 'inline link' },
  ];
  const headline = 'Test Headline';

  test('renders LinkListItem component with headline and links and power-systems theme', () => {
    render(<LinkListItem headline={headline} links={links} />);
    const headlineElement = screen.getByTestId('link-list-headline');
    const descriptionElement = screen.queryByTestId('link-list-description');
    expect(headlineElement).toBeInTheDocument();
    expect(headlineElement).toHaveTextContent(headline);
    const linkElements = screen.getAllByRole('link');
    expect(linkElements.length).toBe(1);
    expect(headlineElement).toHaveClass('zep-text-primary-default');
    expect(descriptionElement).not.toBeInTheDocument();
  });
  test('links open in same tab', () => {
    render(<LinkListItem headline={headline} links={links} />);
    const linkElements = screen.getAllByRole('link');
    linkElements.forEach((linkElement) => {
      expect(linkElement).toHaveAttribute('target', '_self');
    });
  });
  test('renders LinkListItem component without headline and description', () => {
    render(<LinkListItem links={links} />);
    const headlineElement = screen.queryByTestId('link-list-headline');
    const descriptionElement = screen.queryByTestId('link-list-description');
    expect(headlineElement).not.toBeInTheDocument();
    expect(descriptionElement).not.toBeInTheDocument();
  });
  test('renders LinkListItem component with cat theme', () => {
    render(<LinkListItem links={links} headline={headline} variant={GlobalVariants.Cat} />);
    const headlineElement = screen.getByTestId('link-list-headline');
    const linksElement = screen.getByTestId('link-list-links');
    expect(headlineElement).toHaveClass('zep-text-typography-dark-100');
    expect(linksElement).toHaveClass('zep-text-typography-dark-100');
  });
});
