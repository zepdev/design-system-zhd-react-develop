import { render } from '@testing-library/react';
import { TeaserSimple } from './Teaser-simple';

describe('TeaserSimple Component', () => {
  it('should render correctly', () => {
    const element = (
      <TeaserSimple
        teaserText="dummy teaser headline text"
        buttonText="dummy button text"
        buttonTitle="dummy button title"
      />
    );
    const { getByText } = render(element);
    const teaserHeadlineText = getByText('dummy teaser headline text');
    const buttonText = getByText('dummy button text');
    expect(teaserHeadlineText).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
    expect(teaserHeadlineText).toHaveClass('zep-text-typography-light-100 zep-typography-headlineMD-fluid-cqi');
  });
});
