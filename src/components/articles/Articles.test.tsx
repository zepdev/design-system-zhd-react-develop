import { render } from '@testing-library/react';
import { Articles } from './Articles';

// Mock ResizeObserver after imports
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe('Card Media component', () => {
  it('should renders card sqaure with headline', () => {
    const Child = <Articles articles={[]} headline={'Headline'} />;
    const { getByTestId } = render(Child);
    const contactCardElement = getByTestId('zep-articles-section-wrapper');
    expect(contactCardElement).toBeInTheDocument();
  });
});
