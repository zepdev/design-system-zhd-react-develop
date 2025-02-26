import { render, screen} from '@testing-library/react';
import { MediaTextProductPattern } from './MediaTextProductPattern';

describe('MediaTextProductPattern', () => {

  const headline = 'Featured Products';;


  it('renders the button when hasButton is true', () => {
    const mockItem = [{
      description: "description here",
      headline: 'Headline 1',
      imageSrc: 'image1.jpg',
      imageAlt: 'Image 1',
      buttonLabel: 'Button 1',
    }];

    const {  getByText } = render(<MediaTextProductPattern hasButton={true} items={mockItem} headline={headline} />);
    const buttonLabelElement = getByText('Button 1');
    expect(buttonLabelElement).toBeInTheDocument(); 
    


  });

  it('does not render the button when hasButton is false', () => {
    const mockItems = [{
      description: "description here",
      headline: 'Headline 1',
      imageSrc: 'image1.jpg',
      imageAlt: 'Image 1',
      buttonLabel: 'Button 1',
    }];
   render(<MediaTextProductPattern items={mockItems} hasButton={false}  />);
    
    const button = screen.queryByRole('button', { name: "Button 1" });
    expect(button).not.toBeInTheDocument();
  });

  
  it('renders other component elements correctly', () => {
    const mockItems = [{
      description: "description here",
      headline: 'Headline 1',
      imageSrc: 'image1.jpg',
      imageAlt: 'Image 1',
      buttonLabel: 'Button 1',
      hasButton: false,
    }];
    const { getByTestId, getByText } = render(<MediaTextProductPattern items={mockItems} headline={headline} />);
    
    const component = getByTestId('zep-mediatext-pattern');
    const headlineElement = getByText(headline);

    expect(component).toBeInTheDocument();
    expect(headlineElement).toBeInTheDocument();

    const itemHeadlineElement = getByText(headline);
        expect(itemHeadlineElement).toBeInTheDocument();
  });
});
