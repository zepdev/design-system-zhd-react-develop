import { render, screen } from '@testing-library/react';
import { HeaderShort } from './HeaderShort';
import imageSrc from '../../../public/assets/moving-forward-arrow.svg';

describe('HeaderShort pattern', () => {
  const headline = 'headline short';
  const tagline = 'tagline';

  it('should render', () => {
    const { getByTestId } = render(
      <HeaderShort showArrow={true} headline={headline} tagline={tagline} />,
    );
    const HeaderShortElement = getByTestId('header-short');
    expect(HeaderShortElement).toBeInTheDocument();
  });

  it('should render an Image', () => {
    render(<HeaderShort showArrow={true} headline={headline} />);
    const imageElement = screen.getByRole('img');
    expect(imageElement).toHaveAttribute('src', imageSrc);
  });

  it('should render headline', () => {
    render(<HeaderShort showArrow={true} headline={headline} />);
    const headlineElement = screen.getByText(headline);
    expect(headlineElement).toBeInTheDocument();
  });

  it('should render tagline', () => {
    render(<HeaderShort showArrow={true} headline={headline} tagline={tagline} />);
    const taglineElement = screen.getByText(tagline);
    expect(taglineElement).toBeInTheDocument();
  });
});
