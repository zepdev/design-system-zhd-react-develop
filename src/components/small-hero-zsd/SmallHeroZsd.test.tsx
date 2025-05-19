import { render, screen } from '@testing-library/react';
import { SmallHeroZsd } from './SmallHeroZsd';

describe('SmallHeroZsd component', () => {
  it('renders headline and subline', () => {
    render(<SmallHeroZsd headline="TIERNAHRUNG" subline="HERSTELLUNG AUF SPITZENNIVEAU" imageSrc="test.png" />);
    expect(screen.getByText('TIERNAHRUNG')).toBeInTheDocument();
    expect(screen.getByText('HERSTELLUNG AUF SPITZENNIVEAU')).toBeInTheDocument();
  });

  it('renders primary and secondary buttons', () => {
    render(
      <SmallHeroZsd
        headline="Headline"
        subline="Subline"
        imageSrc="test.png"
        buttonPrimary="Primary"
        buttonSecondary="Secondary"
      />,
    );
    expect(screen.getByText('Primary')).toBeInTheDocument();
    expect(screen.getByText('Secondary')).toBeInTheDocument();
  });
});
