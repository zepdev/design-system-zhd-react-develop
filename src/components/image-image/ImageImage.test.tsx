import { render, screen } from '@testing-library/react';
import { ImageImageComponent } from './ImageImage';

describe('Image Image Component', () => {
  const smallImageSrc = './assets/image-332x249.png';
  const largeImageSrc = './assets/image-1336x300.png';

  it('should render', () => {
    const Child = (
      <ImageImageComponent
        smallImageSrc={smallImageSrc}
        smallImageAlt="small image"
        largeImageAlt="large image"
        largeImageSrc={largeImageSrc}
      />
    );
    const { getByTestId } = render(Child);
    const anchorCardElement = getByTestId('zep-image-image-component');
    expect(anchorCardElement).toBeInTheDocument();
  });

  it('should hide the left image on small screens', () => {
    global.innerWidth = 600;
    global.dispatchEvent(new Event('resize'));

    render(
      <ImageImageComponent smallImageSrc={smallImageSrc} smallImageAlt="small image" largeImageSrc={largeImageSrc} />,
    );
    const parentDiv = screen.getByTestId('zep-small-image');
    expect(parentDiv).toHaveClass('zep-hidden');
  });

  it('should renders the small image correctly', () => {
    render(
      <ImageImageComponent smallImageSrc={smallImageSrc} smallImageAlt="small image" largeImageSrc={largeImageSrc} />,
    );
    const smallImage = screen.getByAltText('small image');
    expect(smallImage).toBeInTheDocument();
  });

  it('should renders the large image correctly', () => {
    render(
      <ImageImageComponent smallImageSrc={smallImageSrc} largeImageAlt="large image" largeImageSrc={largeImageSrc} />,
    );
    const largeImage = screen.getByAltText('large image');
    expect(largeImage).toBeInTheDocument();
  });
});
