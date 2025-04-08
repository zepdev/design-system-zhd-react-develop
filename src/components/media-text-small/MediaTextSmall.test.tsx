import { render } from '@testing-library/react';
import { MediaTextSmall } from './mediaTextSmall';

describe('Media Text Small component', () => {
  it('renders correctly', () => {
    const Child = (
      <MediaTextSmall
        headline="Headline"
        content={[]}
        imageAlt="image alt"
        imageSrc="./assets/image-4_3.png"
      />
    );
    const { getByTestId } = render(Child);

    const headlineElement = getByTestId('media-text-small-headline');
    const descriptionElement = getByTestId('media-text-small-description');
    const imageElement = getByTestId('media-text-small-image');
    expect(imageElement).toBeInTheDocument();
    expect(headlineElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(headlineElement).toHaveTextContent('Headline');
  });
});
