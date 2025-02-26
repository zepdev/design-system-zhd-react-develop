import { render } from '@testing-library/react';
import { CardMediaPattern } from './CardMediaPattern';

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe('Card Media Pattern', () => {
  const tabs = [{
    linkLabel: 'label',
    scrollToIdLink: 'label',
    cards: [{
      imageSrc:
        'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      imageAlt: 'construction site',
      headline: 'Testing',
      description: 'Testing',
      onDownload: () => null,
      linkText: 'Click me',
    }],
  }];
  const headline = 'Headline'
  const tagline = 'Tagline'
  const description = 'Description'

  it ('should render pattern with cards and headline long', () => {
    const { getByTestId } = render(<CardMediaPattern tabs={tabs} headline={headline} tagline={tagline} description={description} />)
    const HeaderLongComponentElement = getByTestId('header-long');
    expect(HeaderLongComponentElement).toBeInTheDocument();
    const CardsElement = getByTestId('cards-container')
    expect(CardsElement).toBeInTheDocument();
  })
})
