import { render } from '@testing-library/react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { FeedbackComponent } from './FeedbackComponent';

// Mock ResizeObserver after imports
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe('Card Media component', () => {
  it('should renders card square with headline', () => {
    const Child = (
      <FeedbackComponent headline="headline" likeText="Gut" dislikeText="Schlecht" variant={GlobalVariants.Zps} />
    );
    const { getByTestId } = render(Child);
    const feedbackElement = getByTestId('feedback-component-wrapper');
    expect(feedbackElement).toBeInTheDocument();
  });
});
