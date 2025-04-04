import { render } from '@testing-library/react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { InfographicImage } from './InfographicImage';

// Mock ResizeObserver after imports
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe('Card Media component', () => {
  it('should renders card square with headline', () => {
    const Child = <InfographicImage variant={GlobalVariants.Zps} points={[]} imageUrl="image url" />;
    const { getByTestId } = render(Child);
    const imageElement = getByTestId('zep-infographic-image');
    expect(imageElement).toBeInTheDocument();
  });
});
