import { render, screen } from '@testing-library/react';
import { HeaderLongComponent } from './HeaderLongComponent';
import { GlobalVariantExtended } from '../../interfaces/global-variants';
import { mockRichTextShort } from '../../utils/mocks';

describe('HeaderLong component', () => {
  const headline = 'headline short';
  const tagline = 'tagline';

  it('should render', () => {
    const { getByTestId } = render(
      <HeaderLongComponent variant={GlobalVariantExtended.ZpsBg} description={mockRichTextShort} headline={headline} tagline={tagline}></HeaderLongComponent>,
    );
    const HeaderLongComponentElement = getByTestId('header-long-component');
    expect(HeaderLongComponentElement).toHaveTextContent(headline);
    expect(HeaderLongComponentElement).toBeInTheDocument();
  });

  it('should render headline', () => {
    render(<HeaderLongComponent variant={GlobalVariantExtended.ZpsBg} headline={headline} />);
    const headlineElement = screen.getByText(headline);
    expect(headlineElement).toBeInTheDocument();
  });

  it('should render tagline', () => {
    render(<HeaderLongComponent description={mockRichTextShort} variant={GlobalVariantExtended.ZpsBg} headline={headline} tagline={tagline} />);
    const taglineElement = screen.getByText(tagline);
    expect(taglineElement).toBeInTheDocument();
  });
});
