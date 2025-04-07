import { render } from '@testing-library/react';
import { USPList } from './UspList';

// Mock ResizeObserver after imports
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe('USP list component', () => {
  it('should render an usp list component', () => {
    const Child = <USPList headerTitle={'Header'} />;
    const { getByTestId } = render(Child);
    const anchorCardElement = getByTestId('zep-usp-list');
    expect(anchorCardElement).toBeInTheDocument();
  });
});
