import { render } from '@testing-library/react';

import { CardMedia } from './CardMedia';
import { GlobalVariants } from '../../interfaces/global-variants';

describe('Card Media component', () => {
  const headline = 'Card headline'
  const description = 'Card description'
  const imageSrc = 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
  const linkSrc = 'https://www.google.com'
  const linkText = 'Zur Reference'
  const imageAlt = 'construction site'

  it('renders correctly', () => {
    const Child = (
      <CardMedia
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        headline={headline}
        description={description}
        linkSrc={linkSrc}
        linkText={linkText}
      />
    );
    const { getByTestId, getByAltText } = render(Child);
    const cardElement = getByTestId('card-media');
    const headlineElement = getByTestId('card-media-headline');
    const descriptionElement = getByTestId('card-media-description');
    const linkElement = getByTestId('card-media-link');
    const imageElement = getByAltText(imageAlt);

    expect(imageElement).toBeInTheDocument();
    expect(cardElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(headlineElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();

    expect(headlineElement).toHaveTextContent(headline);
    expect(descriptionElement).toHaveTextContent(description);
  });
  it('renders with cat theme', () => {
    const Child = (
      <CardMedia
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        headline={headline}
        description={description}
        linkSrc={linkSrc}
        linkText={linkText}
        variant={GlobalVariants.Cat}
      />
    );
    const { getByTestId } = render(Child);
    const headlineElement = getByTestId('card-media-headline');
    const descriptionElement = getByTestId('card-media-description');
    const linkElement = getByTestId('card-media-link');

    expect(headlineElement).toHaveClass('zep-text-typography-dark-100');
    expect(descriptionElement).toHaveClass('zep-text-typography-dark-100');
    expect(linkElement).toHaveClass('zep-text-typography-dark-100');
  });
});
