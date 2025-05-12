import { render } from '@testing-library/react';
import { AnchorNavigationList } from './AnchorNavigationList';

// Mock ResizeObserver after imports
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe('Anchor navigation list component', () => {
  it('should render an anchor navigation list component', () => {
    const Child = <AnchorNavigationList navigationCards={[]} />;
    const { getByTestId } = render(Child);
    const anchorCardElement = getByTestId('zep-anchor-navigation-list');
    expect(anchorCardElement).toBeInTheDocument();
  });
});
