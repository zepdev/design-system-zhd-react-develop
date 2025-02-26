import { render } from '@testing-library/react';
import { AnchorNavigationList } from './AnchorNavigationList';

describe('Anchor navigation list component', () => {
  it('should render an anchor navigation list component', () => {
    const Child = <AnchorNavigationList tabs={[]} />;
    const { getByTestId } = render(Child);
    const anchorCardElement = getByTestId('zep-anchor-navigation-list');
    expect(anchorCardElement).toBeInTheDocument();
  });
});
