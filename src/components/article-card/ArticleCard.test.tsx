import { render } from '@testing-library/react';
import { ArticleCard } from './ArticleCard';

// Mock ResizeObserver after imports
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe('Card Media component', () => {
  it('should renders card sqaure with headline', () => {
    const Child = (
      <ArticleCard
        article={{
          title: '',
          image: '',
          linkText: '',
          linkUrl: '',
          description: '',
          chipText: '',
        }}
      />
    );
    const { getByTestId } = render(Child);
    const contactCardElement = getByTestId('zep-article-card');
    expect(contactCardElement).toBeInTheDocument();
  });
});
