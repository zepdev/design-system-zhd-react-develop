import { render } from '@testing-library/react';
import { LocaleVariants } from '../../interfaces/global-variants';
import { LightboxContactForm } from './LightboxContactForm';

describe('LightboxContactForm component', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <LightboxContactForm
        privacyPolicyUrl=""
        onSubmit={() => console.log('Test')}
        setIsOpen={() => console.log('Test')}
        locale={LocaleVariants.EN}
        isOpen={true}
      />,
    );
    const ModalContactElement = getByTestId('zep-modal-component');
    // Deleting the line in the test since we don't need the px-1 class anymore
    expect(ModalContactElement).toBeInTheDocument();
  });
});
