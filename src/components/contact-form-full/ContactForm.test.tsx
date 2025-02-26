import { render } from '@testing-library/react';
import { LocaleVariants } from '../../interfaces/global-variants';
import { ContactFormFull } from './ContactFormFull';

// Mock ResizeObserver after imports
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe('Card Media component', () => {
  it('should renders card square with headline', () => {
    const Child = <ContactFormFull headline="Headline" onSubmit={() => null} locale={LocaleVariants.EN} />;
    const { getByTestId } = render(Child);
    const contactFormElement = getByTestId('zep-contact-form-wrapper');
    expect(contactFormElement).toBeInTheDocument();
  });
});
