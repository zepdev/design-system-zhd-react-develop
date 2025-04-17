import { render } from '@testing-library/react';
import { AnchorNavigationCard } from './AnchorNavigationCard';

describe('Anchor navigation card component', () => {
  it('should render an anchor navigation card component', () => {
    const Child = <AnchorNavigationCard linkLabel="Mehr zum Gasmotor" scrollToIdLink="" />;
    const { getByTestId } = render(Child);
    const anchorCardElement = getByTestId('zep-anchor-navigation-card');
    const headlineElement = getByTestId('anchor-navigation-card-headline');
    expect(anchorCardElement).toBeInTheDocument();
    expect(headlineElement).toBeInTheDocument();
  });
});
