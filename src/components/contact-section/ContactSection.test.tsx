import { render } from '@testing-library/react';
import { ContactSection } from './ContactSection';

describe('Contact Section', () => {
  it('should render', () => {
    const { getByTestId } = render(<ContactSection linkLists={[{ links: [] }]} headline="Headline" />);
    const contactSection = getByTestId('zep-single-link-list');
    expect(contactSection).toBeInTheDocument();
  });
})
