import { render } from '@testing-library/react';
import { SmallHero } from './SmallHero';

describe('SmallHero component', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <SmallHero
        headline="Tiernahrung"
        subline="Herstellung auf spitzenniveau"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."
        imageSrc="./assets/hero-image.png"
        imageAlt="image alt"
        primaryButtonLabel="Primary"
        secondaryButtonLabel="Secondary"
        backgroundVariant='gradient'
      />,
    );
    const SmallHeroElement = getByTestId('zep-small-hero');
    expect(SmallHeroElement).toBeInTheDocument();
    expect(SmallHeroElement).toHaveClass('md:zep-flex');
  });
});
