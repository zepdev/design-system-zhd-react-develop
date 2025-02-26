import { render, screen } from '@testing-library/react';
import { LinkProps } from '@zepdev/design-system-component-library-react';
import { MultiLinkList } from './MultiLinkList';

describe('Link List component', () => {
  const links: LinkProps[] = [{ icon: 'arrow-right', href: 'https://www.google.com', label: 'inline link'}];
  const description = 'Test Description';
  const headline = 'Test Headline';
  const linkLists = [{ links, description, headline }];

  test('renders LinkList component with headline and links ', () => {
    render(<MultiLinkList headline={headline} linkLists={linkLists} />);
    const headlineElement = screen.getByTestId('link-list-headline');
    expect(headlineElement).toBeInTheDocument();
    expect(headlineElement).toHaveTextContent(headline);
    const linkElements = screen.getAllByRole('link');
    expect(linkElements.length).toBe(1);
  });
  test('links open in a new tab', () => {
    render(<MultiLinkList headline={headline} linkLists={linkLists} />);
    const linkElements = screen.getAllByRole('link');
    linkElements.forEach((linkElement) => {
      expect(linkElement).toHaveAttribute('target', '_blank');
    });
  });
  test('renders LinkList component without headline and description', () => {
    render(<MultiLinkList headline={headline} linkLists={[{ links }]} />);
    const headlineElement = screen.queryByTestId('link-list-headline');
    const descriptionElement = screen.queryByTestId('link-list-description');
    expect(headlineElement).not.toBeInTheDocument();
    expect(descriptionElement).not.toBeInTheDocument();
  });
  test('renders LinkList component with description', () => {
    render(<MultiLinkList headline={headline} linkLists={linkLists} />);
    const descriptionElement = screen.queryByTestId('link-list-description');
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent(description);
  });
});
