import { render } from '@testing-library/react';
import { RichText } from './RichText';
import { mockRichText } from '../../utils/mocks';

describe('RichText component', () => {
  it('should render', () => {
    const { getByTestId } = render(<RichText content={mockRichText} />);
    const richTextElement = getByTestId('zep-richtext');
    expect(richTextElement).toBeInTheDocument();
    expect(richTextElement).toHaveClass('zep-max-w-[944px]');
  });
});
