import { render } from '@testing-library/react';
import { Downloads } from './Downloads';

// Mock ResizeObserver after imports
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe('Card Media component', () => {
  it('should renders card sqaure with headline', () => {
    const Child = <Downloads downloads={[]} headline={'Headline'} />;
    const { getByTestId } = render(Child);
    const contactCardElement = getByTestId('zep-downloads-section-wrapper');
    expect(contactCardElement).toBeInTheDocument();
  });
});
