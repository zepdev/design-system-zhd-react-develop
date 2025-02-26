import { render } from '@testing-library/react';
import { SHCorp } from './SHCorp';

describe('SHCorp Component', () => {
  test('renders the component with correct props', () => {
    const props = {
      headline: 'Test Headline',
      subline: 'Test Subline',
      imageSrc: 'test-image.jpg',
      imageAlt: 'Test Image',
      primaryButtonText: 'Primary Button',
      secondaryButtonText: 'Secondary Button',
      description: 'Test Description',
    };

    const { getByTestId } = render(<SHCorp {...props} />);

    const shCorporateElement = getByTestId('zep-SHCorporate');
    expect(shCorporateElement).toBeInTheDocument();
    const headlineElement = getByTestId('SHCorporate-headline');
    expect(headlineElement).toBeInTheDocument();
    const sublineElement = getByTestId('SHCorporate-subline');
    expect(sublineElement).toBeInTheDocument();
  });
});
