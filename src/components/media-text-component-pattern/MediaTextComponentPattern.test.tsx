import { render } from '@testing-library/react';
import { MediaTextComponentPattern } from './MediaTextComponentPattern';

describe('MediaTextComponentPattern', () => {
  const mockItems = [
    {
      mediaUrl: './assets/hero_image.png',
      imageOrientation: 'horizontal',
      mediaType: 'image',
      mediaPosition: 'right',
      headline: 'Headline Test',
      description: 'description here',
      buttonText: 'Read More',
    },
  ];
  it('renders the component with the provided items', () => {
    const { getByText } = render(<MediaTextComponentPattern items={mockItems} />);
    const headlineElement = getByText('Headline Test');
    const descriptionElement = getByText('description here');
    const buttonElement = getByText('Read More');
    expect(headlineElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});
