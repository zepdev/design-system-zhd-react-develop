import { render } from '@testing-library/react';
import { mockImage, mockRichText } from '../../utils/mocks';
import { MediaTextComponentContentProps } from '../media-text-component/media-text-component.interface';
import { MediaTextComponentPattern } from './MediaTextComponentPattern';

describe('Media Text Pattern', () => {
  const card: MediaTextComponentContentProps = {
    headline: 'Headline',
    tagline: 'TAGLINE',
    content: mockRichText,
    mediaUrl: mockImage.src,
    alt: mockImage.alt,
    labelPrimary: 'Primary',
  };

  it('should render', async () => {
    const { getByTestId, findAllByTestId } = render(<MediaTextComponentPattern cards={[card, card]} />);
    expect(getByTestId('zep-media-text')).toBeInTheDocument();
    const cards = await findAllByTestId('zep-mediaText');
    expect(cards).toHaveLength(2);
  });
});
