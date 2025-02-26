import { render } from '@testing-library/react';
import { MediaTextSmallPattern } from './MediaTextSmallPattern';

describe('MediaTextSmallPattern', () => {
  const items = [
    {
      headline: 'Item 1',
      description: 'Description 1',
      orderedLists: ['Lorem Ipsum dolor sit amet', 'Lorem Ipsum dolor sit amet'],
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png',
    },
    {
      headline: 'Item 2',
      description: 'Description 2',
      orderedLists: ['Lorem Ipsum dolor sit amet', 'Lorem Ipsum dolor sit amet'],
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png',
    },
    {
      headline: 'Item 3',
      description: 'Description 3',
      orderedLists: ['Lorem Ipsum dolor sit amet', 'Lorem Ipsum dolor sit amet'],
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png',
    },
  ];
  const headline = 'Test Headline';

  it('renders the component with correct items and headline', () => {
    const { getByTestId } = render(<MediaTextSmallPattern items={items} headline={headline} />);
    const mediaTextSmallPattern = getByTestId('media-text-pattern');
    expect(mediaTextSmallPattern).toBeInTheDocument();

    const headlineElement = getByTestId('media-text-small-pattern-headline');
    expect(headlineElement).toBeInTheDocument();
    expect(headlineElement).toHaveTextContent(headline);

    const mediaTextSmallItems = getByTestId('media-text-small-pattern-items');
    expect(mediaTextSmallItems).toBeInTheDocument();
  });
});
