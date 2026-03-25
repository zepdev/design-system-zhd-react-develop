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

  it('should render with gray background when backgroundVariant is gray', () => {
    const { getByTestId } = render(
      <HeaderShort headline={headline} tagline={tagline} backgroundVariant="gray" />,
    );
    const wrapper = getByTestId('header-short-wrapper');
    expect(wrapper.className).toContain('zep-bg-background-medium');
  });

  it('should not have gray background class when backgroundVariant is white', () => {
    const { getByTestId } = render(
      <HeaderShort headline={headline} tagline={tagline} backgroundVariant="white" />,
    );
    const wrapper = getByTestId('header-short-wrapper');
    expect(wrapper.className).not.toContain('zep-bg-background-medium');
  });

  it('should default to white background when backgroundVariant is not specified', () => {
    const { getByTestId } = render(
      <HeaderShort headline={headline} tagline={tagline} />,
    );
    const wrapper = getByTestId('header-short-wrapper');
    expect(wrapper.className).not.toContain('zep-bg-background-medium');
  });
});
