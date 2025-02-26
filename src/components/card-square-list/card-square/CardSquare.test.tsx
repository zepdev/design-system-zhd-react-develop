import { render, screen } from '@testing-library/react';
import * as useContainerDimensionsModule from '../../../hooks/useContainerDimensions';
import { CardSquare } from './CardSquare';


// Mock ResizeObserver after imports
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe('Card Media component', () => {
  it('should renders card square with headline', () => {
    const Child = (
      <CardSquare
        imageSrc="https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
        imageAlt="construction site"
        headline="Card square headline"
        description="Card square description"
        cardListsLength={1}
      />
    );
    const { getByTestId, getByAltText } = render(Child);
    const cardSquareElement = getByTestId('zep-card-square');
    const imageElement = getByAltText('construction site');
    const headlineElement = getByTestId('card-square-headline');
    expect(cardSquareElement).toHaveClass('zep-group');
    expect(imageElement).toBeInTheDocument();
    expect(cardSquareElement).toBeInTheDocument();
    expect(headlineElement).toBeInTheDocument();
  });
  it('should display the description when width is greater than 350', () => {
    jest.spyOn(useContainerDimensionsModule, 'useContainerDimensions').mockReturnValue({ width: 400 });
    render(<CardSquare
        imageSrc="https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
        imageAlt="construction site"
        headline="Card square headline"
        description="Card square description"
        />);
    const descriptionElement = screen.getByTestId('card-square-description'); 
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent('Card square description');
  });
});
