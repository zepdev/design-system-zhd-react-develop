import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './ZpsButton';

describe('Button component', () => {
  it('renders correctly', () => {
    const { getByRole } = render(<Button label="Click me" />);
    const buttonElement = getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Click me');
  });

  it('should handle click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} />);
    const element = screen.getByRole('button');
    fireEvent.click(element);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should render Button without loading icon', () => {
    render(<Button />);
    const element = screen.getByRole('button');
    const icon = screen.queryByTestId('loading-icon');

    expect(icon).not.toBeInTheDocument();
    expect(element).toBeInTheDocument();
  });

  it('should render Button with loading icon', () => {
    render(<Button isLoading />);
    const element = screen.getByRole('button');
    const icon = screen.getByTestId('loading-icon');

    expect(icon).toBeInTheDocument();
    expect(element).toBeInTheDocument();
  });
});
