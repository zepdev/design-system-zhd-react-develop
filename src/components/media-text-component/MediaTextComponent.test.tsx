import { render } from '@testing-library/react';
import { MediaTextComponent } from './MediaTextComponent';

describe('MediaTextComponent', () => {
  const mockProps = {
    mediaUrl: '',
    mediaType: 'image',
    imageOrientation: 'horizontal',
    mediaAlignment: 'left',
    headline: 'Example Headline',
    content: [],
    alt: '',
    buttonText: 'Read More',
    contentAlignment: 'center',
  };

  it('renders the MediaTextComponent with the provided props', () => {
    const { getByText } = render(
      <MediaTextComponent
        {...mockProps}
        mediaAlignment="left"
        imageOrientation="horizontal"
        contentAlignment="center"
        mediaType="image"
      />,
    );
    expect(getByText('Example Headline')).toBeInTheDocument();
  });
});
