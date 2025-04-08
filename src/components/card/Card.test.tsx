import { render } from '@testing-library/react';
import { Card } from './Card';

describe('Card component', () => {
  it('should render its elements correctly', () => {
    const { getByTestId } = render(
      <Card
        title="Test Card"
        description="This is a test description."
        imageSrc="test-image.jpg"
        imageAlt="Test Image"
        gtmHeadline="Test Headline"
        gtmid="test-id"
        url={''}
      />,
    );

    const cardElement = getByTestId('card-component');
    const titleElement = getByTestId('card-component-title');
    const descriptionElement = getByTestId('card-component-description');
    const imageElement = getByTestId('card-component-image');

    expect(cardElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent('Test Card');
    expect(descriptionElement).toHaveTextContent('This is a test description.');
    expect(imageElement).toHaveAttribute('src', 'test-image.jpg');
  });
});
