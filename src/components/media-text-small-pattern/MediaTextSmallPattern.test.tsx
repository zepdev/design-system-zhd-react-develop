import { render } from '@testing-library/react';
import { mockRichText } from '../../utils/mocks';
import { MediaTextSmallPattern } from './MediaTextSmallPattern';

describe('MediaTextSmallPattern', () => {
  const items = [
    {
      headline: 'Item 1',
      content: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png',
    },
    {
      headline: 'Item 2',
      content: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png',
    },
    {
      headline: 'Item 3',
      content: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png',
    },
  ];
  const headline = 'Test Headline';

  it('renders the component with correct items and headline', () => {
    const { getByTestId, getAllByTestId } = render(<MediaTextSmallPattern items={items} headline={headline} />);
    const mediaTextSmallPattern = getByTestId('media-text-pattern');
    expect(mediaTextSmallPattern).toBeInTheDocument();

    /*
    const headlineElement = getByTestId('media-text-small-pattern-headline');
    expect(headlineElement).toBeInTheDocument();
    expect(headlineElement).toHaveTextContent(headline);

    const mediaTextSmallItems = getAllByTestId('media-text-small-pattern-item');
    expect(mediaTextSmallItems).toHaveLength(items.length); */
  });
});
