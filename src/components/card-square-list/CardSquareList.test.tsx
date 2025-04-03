import { render } from '@testing-library/react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { CardSquareList } from './CardSquareList';

// Mock ResizeObserver after imports
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
}

describe('Card Square list component', () => {
  it('should render card square list', () => {
    const Child = <CardSquareList items={[]} variant={GlobalVariants.Zps} />;
    const { getByTestId } = render(Child);
    const anchorCardElement = getByTestId('zep-card-square-list');
    expect(anchorCardElement).toBeInTheDocument();
  });
});
