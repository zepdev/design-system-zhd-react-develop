import { render } from '@testing-library/react';
import { MediaTextComponent } from './MediaTextComponent';

describe('MediaTextComponent', () => {
  const mockProps = {
    mediaType: 'image',
    imageOrientation: 'vertical',
    mediaPosition: 'left',
    headline: 'Example Headline',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    buttonText: 'Read More',
    mediaUrl: './assets/hero_image.png',
  };

  it('renders the MediaTextComponent with the provided props', () => {
    const { getByText } = render(<MediaTextComponent {...mockProps} />);
    expect(getByText('Example Headline')).toBeInTheDocument();
    expect(getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')).toBeInTheDocument();
    expect(getByText('Read More')).toBeInTheDocument();
  });
});
