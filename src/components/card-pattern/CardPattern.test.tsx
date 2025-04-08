import { render } from '@testing-library/react';
import { CardPattern } from './CardPattern';

describe('CardPattern', () => {
  const headline = 'Headline';
  const tagline = 'Tagline';
  const items = [
    {
      imageSrc:
        'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      linkLabel: 'Click me',
      url: '',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline 1',
      title: 'Titlev1',
      description: 'Here is a description',
      linkLabel: 'Click me',
      url: '',
    },
  ];

  it('renders without crashing headline and cards', () => {
    const { getByTestId } = render(<CardPattern items={items} headline={headline} tagline={tagline} />);

    const CardsElement = getByTestId('card-pattern-items');
    console.log(CardsElement);
    expect(CardsElement).toBeInTheDocument();
  });
});
