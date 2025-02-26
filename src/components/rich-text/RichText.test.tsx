import { render } from '@testing-library/react';
import { RichText } from './RichText';

describe('RichText', () => {
  it('should render', () => {
    const { getByTestId } = render(<RichText onDownload={() => null} description="" buttonText=""><RichText.BlocksRichText content={[]} /></RichText>)
    const richText = getByTestId('zep-rich-text');
    expect(richText).toBeInTheDocument();
  });
})
