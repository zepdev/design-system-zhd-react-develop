import { render, screen } from '@testing-library/react';
import { ContactFormZsd } from './ContactFormZsd';

describe('ContactFormZsd', () => {
  it('renders the component', () => {
    render(
      <ContactFormZsd
        privacyPolicyUrl="https://example.com/privacy"
        onSubmit={() => {}}
        headline="Contact Us"
        locale="en"
      />,
    );
    expect(screen.getByTestId('zep-contact-form-wrapper')).toBeInTheDocument();
  });
});
