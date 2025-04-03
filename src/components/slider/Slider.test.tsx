import { render } from '@testing-library/react';
import { Slider } from './Slider';

describe('Slider component', () => {
  it('should render', () => {
    const { getByTestId } = render(<Slider step={1} min={0} max={50} value={{ min: 0, max: 50 }} label="Label" />);
    const sliderComponent = getByTestId('rangeSlider');
    const label = getByTestId('rangeSlider-label')
    const minText = getByTestId('rangeSlider-min');
    const maxText = getByTestId('rangeSlider-max');
    expect(sliderComponent).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('Label');
    expect(minText).toBeInTheDocument();
    expect(maxText).toBeInTheDocument();
    expect(minText).toHaveTextContent('0');
    expect(maxText).toHaveTextContent('50');
  });
})
