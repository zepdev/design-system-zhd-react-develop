import { render } from '@testing-library/react';
import { LinkProps } from '@zepdev/design-system-component-library-react';
import { LinkListItem } from './LinkListItem';

describe('Link List Item component', () => {
  const links: LinkProps[] = [
    { icon: 'arrow-right', href: 'https://www.google.com', label: 'inline link'},
  ];
  const description = 'Test Description';
  const headline = 'Test Headline';

  test('renders LinkListItem component with headline and links and power-systems theme', () => {
    const { getByTestId, queryByTestId, getAllByRole } = render(<LinkListItem headline={headline} links={links} />);
    const headlineElement = getByTestId('link-list-headline');
    const descriptionElement = queryByTestId('link-list-description');
    expect(headlineElement).toBeInTheDocument();
    expect(headlineElement).toHaveTextContent(headline);
    const linkElements = getAllByRole('link');
    expect(linkElements.length).toBe(1);
    expect(descriptionElement).not.toBeInTheDocument();
  });
  test('links open in a new tab', () => {
    const { getAllByRole } = render(<LinkListItem headline={headline} links={links} />);
    const linkElements = getAllByRole('link');
    linkElements.forEach((linkElement) => {
      expect(linkElement).toHaveAttribute('target', '_blank');
    });
  });
  test('renders LinkListItem component without headline and description', () => {
    const { queryByTestId } = render(<LinkListItem links={links} />);
    const headlineElement = queryByTestId('link-list-headline');
    const descriptionElement = queryByTestId('link-list-description');
    expect(headlineElement).not.toBeInTheDocument();
    expect(descriptionElement).not.toBeInTheDocument();
  });
  test('renders LinkListItem component with description', () => {
    const { queryByTestId } = render(<LinkListItem links={links} description={description} />);
    const descriptionElement = queryByTestId('link-list-description');
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent(description);
  });
});
