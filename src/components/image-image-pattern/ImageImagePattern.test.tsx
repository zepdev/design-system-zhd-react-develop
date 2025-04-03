import { render } from '@testing-library/react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { ImageImagePattern } from './ImageImagePattern';
import { mockRichTextShort } from '../../utils/mocks';

const mockImageImagePatternProps = {
  type: 'link',
  tagline: 'tagline',
  headline: 'This is a long header',
  description: mockRichTextShort,
  linkHref: 'www.google.com',
  linkText: 'Click Me',
  smallImageSrc: './assets/image-332x249.png',
  smallImageAlt: 'small image',
  largeImageSrc: './assets/image-1336x300.png',
  largeImageAlt: 'large image',

  variant: GlobalVariants.Zps,
};

describe('ImageImagePattern component', () => {
  it('should render', () => {
    const Child = <ImageImagePattern items={mockImageImagePatternProps} variant={GlobalVariants.Zps} />;
    const { getByTestId } = render(Child);
    const anchorCardElement = getByTestId('zep-imageImage-pattern');
    expect(anchorCardElement).toBeInTheDocument();
  });
});
