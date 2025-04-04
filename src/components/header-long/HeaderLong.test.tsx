import { render, screen } from '@testing-library/react';
import { HeaderLong } from './HeaderLong';
import { GlobalVariantExtended } from '../../interfaces/global-variants';
import { mockRichTextShort } from '../../utils/mocks';

describe('HeaderLong Pattern', () => {
  const headline = 'headline short';
  const tagline = 'tagline';

  it('should render with background', () => {
    const { getByTestId } = render(
      <HeaderLong variant={GlobalVariantExtended.ZpsBg} description={mockRichTextShort} headline={headline} tagline={tagline} />,
    );
    const HeaderLongElement = getByTestId('zep-header-long');
    expect(HeaderLongElement).toBeInTheDocument();
    expect(HeaderLongElement).toHaveClass('zep-bg-gradient-to-r zep-from-[rgb(32,27,52)] zep-to-[rgb(32,23,94)]')
  });

  it('should render without background', () => {
    const { getByTestId } = render(<HeaderLong headline={headline} />);
    const headlineElement = screen.getByText(headline);
    const HeaderLongElement = getByTestId('zep-header-long');
    expect(headlineElement).toBeInTheDocument();
    expect(HeaderLongElement).not.toHaveClass('zep-bg-gradient-to-r zep-from-[rgb(32,27,52)] zep-to-[rgb(32,23,94)]')
  });

  it('should render with cat theme', () => {
    const { getByTestId } = render(<HeaderLong description={mockRichTextShort} variant={GlobalVariantExtended.CatBg} headline={headline} tagline={tagline} />);
    const taglineElement = screen.getByText(tagline);
    expect(taglineElement).toBeInTheDocument();
    const HeaderLongElement = getByTestId('zep-header-long');
    expect(HeaderLongElement).toHaveClass('zep-bg-background-dark');
  });
});
