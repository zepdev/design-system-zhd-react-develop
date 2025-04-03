import { render } from '@testing-library/react';
import { ContactForm } from './ContactForm';
import { LocaleVariants } from '../../interfaces/global-variants';

// Mock ResizeObserver after imports
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe('Card Media component', () => {
  it('should renders card square with headline', () => {
    const Child = <ContactForm privacyPolicyUrl="" headline="Headline" onSubmit={() => null} locale={LocaleVariants.EN} />;
    const { getByTestId } = render(Child);
    const contactFormElement = getByTestId('zep-contact-form-wrapper');
    expect(contactFormElement).toBeInTheDocument();
  });
});
