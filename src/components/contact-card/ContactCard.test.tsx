import { render } from '@testing-library/react';
import { ContactCard } from './ContactCard';

// Mock ResizeObserver after imports
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe('Card Media component', () => {
  it('should renders card sqaure with headline', () => {
    const Child = <ContactCard fullName={'Full name'} />;
    const { getByTestId } = render(Child);
    const contactCardElement = getByTestId('zep-contact-card');
    expect(contactCardElement).toBeInTheDocument();
  });
});
