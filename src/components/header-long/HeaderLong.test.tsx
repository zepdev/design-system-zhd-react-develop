import { render } from '@testing-library/react';
import { HeaderLong } from './HeaderLong';

describe('HeaderLong Pattern', () => {
  const headline = 'headline short';
  const tagline = 'tagline';
  const description = 'This is a line of the text, with description';

  it('should render', () => {
    const { getByTestId } = render(
      <HeaderLong description={description} headline={headline} tagline={tagline} />,
    );
    const HeaderLongElement = getByTestId('zep-header-long');
    expect(HeaderLongElement).toBeInTheDocument();
  });
});
