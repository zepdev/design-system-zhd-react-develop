import { render } from '@testing-library/react';
import { mockRichText } from '../../utils/mocks';
import { RichTextPattern } from './RichTextPattern';

describe('RichText pattern', () => {
  it('should render', () => {
    const { getByTestId } = render(<RichTextPattern content={mockRichText} />);
    const richTextElement = getByTestId('zep-richtext');
    expect(richTextElement).toBeInTheDocument();
  });
});
