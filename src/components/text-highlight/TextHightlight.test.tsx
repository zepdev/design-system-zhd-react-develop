import { render } from '@testing-library/react';
import { TextHighlight } from '@/components/text-highlight/TextHighlight';

describe('Text Highlight component', () => {
  it('should render', () => {
    const { getByTestId } = render(<TextHighlight imageSrc="" imageAlt="" buttonOnClick={() => null} buttonText="" message=""><div /></TextHighlight>);
    const textHighlight = getByTestId('text-highlight');
    expect(textHighlight).toBeInTheDocument();
  });
})
