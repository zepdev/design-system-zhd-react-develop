import { render } from '@testing-library/react';
import { AnchorNavigationCard } from './AnchorNavigationCard';
import { GlobalVariants } from '../../interfaces/global-variants';

describe('Anchor navigation card component', () => {
  it('should render an anchor navigation card component', () => {
    const Child = (
      <AnchorNavigationCard
        headline={'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)'}
        linkLabel="Mehr zum Gasmotor"
        variant={GlobalVariants.Zps}
        scrollToIdLink=""
      />
    );
    const { getByTestId } = render(Child);
    const anchorCardElement = getByTestId('zep-anchor-navigation-card');
    const headlineElement = getByTestId('anchor-navigation-card-headline');
    expect(anchorCardElement).toBeInTheDocument();
    expect(headlineElement).toBeInTheDocument();
  });
});
