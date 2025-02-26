import { render, screen } from '@testing-library/react';
import { HeaderLongComponent } from './HeaderLongComponent';

describe('HeaderLong component', () => {
  const headline = 'headline short';
  const tagline = 'tagline';
  const description = 'This is a line of the text, with description';

  it('should render', () => {
    const { getByTestId } = render(
      <HeaderLongComponent description={description} headline={headline} tagline={tagline}></HeaderLongComponent>,
    );
    const HeaderLongComponentElement = getByTestId('header-long');
    expect(HeaderLongComponentElement).toHaveTextContent(headline);
    expect(HeaderLongComponentElement).toBeInTheDocument();
  });

  it('should render headline', () => {
    render(<HeaderLongComponent headline={headline} />);
    const headlineElement = screen.getByText(headline);
    expect(headlineElement).toBeInTheDocument();
  });

  it('should render tagline', () => {
    render(<HeaderLongComponent description={description} headline={headline} tagline={tagline} />);
    const taglineElement = screen.getByText(tagline);
    expect(taglineElement).toBeInTheDocument();
  });

  it('should render description', () => {
    render(<HeaderLongComponent description={description} headline={headline} tagline={tagline} />);
    const linkElement = screen.getByText(description);
    expect(linkElement).toBeInTheDocument();
  });
});
