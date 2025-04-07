import { render, screen } from '@testing-library/react';
import { HeaderShortComponent } from './HeaderShortComponent';

describe('HeaderShort component', () => {
  const headline = 'headline short';
  const tagline = 'tagline';

  it('should render', () => {
    const { getByTestId } = render(<HeaderShortComponent headline={headline} tagline={tagline}></HeaderShortComponent>);
    const HeaderShortElement = getByTestId('header-short-component');
    expect(HeaderShortElement).toBeInTheDocument();
  });

  it('should render headline', () => {
    render(<HeaderShortComponent headline={headline} />);
    const headlineElement = screen.getByText(headline);
    expect(headlineElement).toBeInTheDocument();
  });

  it('should render tagline', () => {
    render(<HeaderShortComponent headline={headline} tagline={tagline} />);
    const taglineElement = screen.getByText(tagline);
    expect(taglineElement).toBeInTheDocument();
  });
});
