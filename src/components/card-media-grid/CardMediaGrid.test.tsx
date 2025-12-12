import { render } from '@testing-library/react';
import { CardMediaGrid } from './CardMediaGrid';
import { mockRichTextShort } from '../../utils/mocks';

describe('Card Media Grid', () => {
  const cards = [{
    imageSrc:
      'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    imageAlt: 'construction site',
    headline: 'Testing',
    description: 'Testing',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Click me',
  }];
  const headline = 'Headline'
  const tagline = 'Tagline'

  it ('should render grid with cards and headline long', () => {
    const { getByTestId } = render(<CardMediaGrid cards={cards} headline={headline} tagline={tagline} description={mockRichTextShort} />)
    const HeaderLongComponentElement = getByTestId('header-long-component');
    expect(HeaderLongComponentElement).toBeInTheDocument();
    const CardsElement = getByTestId('cards-container')
    expect(CardsElement).toBeInTheDocument();
  })

  it ('should render multiple cards in grid layout', () => {
    const multipleCards = [cards[0], cards[0], cards[0], cards[0]];
    const { getByTestId, getAllByTestId } = render(<CardMediaGrid cards={multipleCards} headline={headline} />)
    const CardsElement = getByTestId('cards-container')
    expect(CardsElement).toBeInTheDocument();
    expect(CardsElement).toHaveClass('zep-grid');
    const cardElements = getAllByTestId('card-media');
    expect(cardElements).toHaveLength(4);
  })
})
