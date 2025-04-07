import { render, screen } from '@testing-library/react';
import { HeaderShort } from './HeaderShort';

describe('HeaderShort pattern', () => {
  const headline = 'headline short';
  const tagline = 'tagline';

  it('should render', () => {
    const { getByTestId } = render(<HeaderShort headline={headline} tagline={tagline}></HeaderShort>);
    const HeaderShortElement = getByTestId('header-short');
    expect(HeaderShortElement).toBeInTheDocument();
  });

  it('should render headline', () => {
    render(<HeaderShort headline={headline} />);
    const headlineElement = screen.getByText(headline);
    expect(headlineElement).toBeInTheDocument();
  });

  it('should render tagline', () => {
    render(<HeaderShort headline={headline} tagline={tagline} />);
    const taglineElement = screen.getByText(tagline);
    expect(taglineElement).toBeInTheDocument();
  });
});
