import { render } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero component', () => {
  const headline = 'Headline';
  const buttonPrimary = 'button';

  it('should render properly without image and secondary button', () => {
    const { getByTestId, queryByTestId } = render(
      <Hero headline={headline} buttonPrimary={buttonPrimary} image={''} />,
    );
    const HeroElement = getByTestId('zep-newhero');
    const SecondaryBtnElement = queryByTestId('zep-hero-secondary-button');
    const HeadlineElement = getByTestId('new-hero-headline');

    expect(HeroElement).toBeInTheDocument();
    expect(HeadlineElement).toBeInTheDocument();
    expect(SecondaryBtnElement).not.toBeInTheDocument();
  });

  it('should render properly with image', () => {
    const { getByTestId } = render(<Hero headline={headline} buttonPrimary={buttonPrimary} image={''} />);
    const HeadlineElement = getByTestId('new-hero-headline');
    expect(HeadlineElement).toBeInTheDocument();
  });

  it('should render properly with primary and secondary button', () => {
    const { getByTestId } = render(
      <Hero headline={headline} buttonPrimary={buttonPrimary} buttonSecondary={buttonPrimary} image={''} />,
    );
    const PrimaryBtnElement = getByTestId('zep-hero-primary-button');
    const SecondaryBtnElement = getByTestId('zep-hero-secondary-button');
    const HeadlineElement = getByTestId('new-hero-headline');

    expect(PrimaryBtnElement).toBeInTheDocument();

    expect(HeadlineElement).toBeInTheDocument();
    expect(SecondaryBtnElement).toBeInTheDocument();
  });
});
