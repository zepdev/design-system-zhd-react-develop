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
    const ImageElement = queryByTestId('zep-newhero-image');
    const HeadlineElement = getByTestId('new-hero-headline');
    const IconElement = getByTestId('zep-hero-arrowIcon-xl');
    expect(IconElement).toBeInTheDocument();
    expect(HeroElement).toBeInTheDocument();
    expect(HeadlineElement).toBeInTheDocument();
    expect(ImageElement).not.toBeInTheDocument();
    expect(HeroElement).toHaveClass('zep-relative');
    expect(SecondaryBtnElement).not.toBeInTheDocument();
  });

  it('should render properly with image', () => {
    const { getByTestId } = render(<Hero headline={headline} buttonPrimary={buttonPrimary} image={''} />);
    const HeadlineElement = getByTestId('new-hero-headline');
    const IconElement = getByTestId('zep-hero-arrowIcon-xl');
    const HeroElement = getByTestId('zep-newhero-image');
    expect(HeroElement).toBeInTheDocument();
    expect(IconElement).toBeInTheDocument();
    expect(HeadlineElement).toBeInTheDocument();
    expect(HeroElement).toHaveClass('zep-object-cover');
  });

  it('should render properly with primary and secondary button', () => {
    const { getByTestId } = render(
      <Hero headline={headline} buttonPrimary={buttonPrimary} buttonSecondary={buttonPrimary} image={''} />,
    );
    const PrimaryBtnElement = getByTestId('zep-hero-primary-button');
    const SecondaryBtnElement = getByTestId('zep-hero-secondary-button');
    const HeadlineElement = getByTestId('new-hero-headline');
    const IconElement = getByTestId('zep-hero-arrowIcon-xl');
    expect(PrimaryBtnElement).toBeInTheDocument();
    expect(IconElement).toBeInTheDocument();
    expect(HeadlineElement).toBeInTheDocument();
    expect(SecondaryBtnElement).toBeInTheDocument();
  });
});
