import { render } from '@testing-library/react';
import { MediaTextPattern } from '@/components/media-text-pattern/MediaTextPattern';
import { MediaTextContentProps } from '@/components/media-text';
import { GlobalVariants } from '../../interfaces/global-variants';
import { mockImage, mockRichText } from '../../utils/mocks';

describe('Media Text Pattern', () => {
  const card: MediaTextContentProps = {
    variant: GlobalVariants.Zps,
    headline: 'Headline',
    tagline: 'TAGLINE',
    content: mockRichText,
    src: mockImage.src,
    alt: mockImage.alt,
    labelPrimary: 'Primary',
    labelSecondary: 'Secondary',
  }

  it ('should render', async () => {
    const { getByTestId, findAllByTestId } = render(<MediaTextPattern cards={[card, card]} />);
    expect(getByTestId('zep-media-text')).toBeInTheDocument();
    const cards = await findAllByTestId('zep-mediaText-simple');
    expect(cards).toHaveLength(2);
  })
})
