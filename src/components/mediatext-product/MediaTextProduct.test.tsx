import { render, screen } from '@testing-library/react';
import { MediaTextProduct } from './MediaTextProduct';

describe('MediaTextProduct', () => {
  it('renders the component correctly', () => {
 
    const props = {
      headline: 'Test Headline',
      subline: 'Test Subline',
      description: 'Test Description',
      contents: [
        {
          title: 'Content 1',
          content: 'Test Description',
        },
        {
          title: 'Content 2',
          content: 'Test Description',
        },
      ],
      imageSrc: 'test-image.jpg',
      imageAlt: 'Test Image',
      buttonLabel: 'Test Button',
    };

    const { getByText, getByAltText } = render(<MediaTextProduct {...props} hasButton={true} />);

    // Assert that the component renders the props correctly
    expect(getByText('Test Headline')).toBeInTheDocument();
    expect(getByText('Test Subline')).toBeInTheDocument();
    expect(getByText('Test Description')).toBeInTheDocument();
    expect(getByAltText('Test Image')).toBeInTheDocument();
    expect(getByText('Test Button')).toBeInTheDocument();
  });

  it('renders the component correctly without button', () => {
 
    const props = {
      headline: 'Test Headline',
      subline: 'Test Subline',
      description: 'Test Description',
      contents: [
        {
          title: 'Content 1',
          content: 'Test Description',
        },
        {
          title: 'Content 2',
          content: 'Test Description',
        },
      ],
      imageSrc: 'test-image.jpg',
      imageAlt: 'Test Image',
      buttonLabel: 'Test Button',
    };

    const { getByText, getByAltText } = render(<MediaTextProduct {...props} hasButton={false} />);

    expect(getByText('Test Headline')).toBeInTheDocument();
    expect(getByText('Test Subline')).toBeInTheDocument();
    expect(getByText('Test Description')).toBeInTheDocument();
    expect(getByAltText('Test Image')).toBeInTheDocument();
    const button = screen.queryByRole('button', { name: "Button 1" });
    expect(button).not.toBeInTheDocument();
  });
});
