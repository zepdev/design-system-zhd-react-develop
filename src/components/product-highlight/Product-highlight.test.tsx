import { render } from '@testing-library/react';
import { ProductHighLight } from './Product-highlight';
import { mockRichTextShort } from '../../utils/mocks';

describe('Product Highlight Component', () => {
  it('should render correctly', async () => {
    const element = (
      <ProductHighLight
        productDetails={[mockRichTextShort, mockRichTextShort, mockRichTextShort]}
        imageSrc="https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
        imageAlt="alt text"
        buttonText="Button"
        imageAlignment="left"
      />
    );
    const { getByText, getByAltText, findAllByTestId } = render(element);
    const buttonText = getByText('Button');
    const imageAlt = getByAltText('alt text');
    const productDetailsItems = await findAllByTestId('zep-richtext');
    expect(productDetailsItems).toHaveLength(3);
    expect(buttonText).toBeInTheDocument();
    expect(imageAlt).toBeInTheDocument();
  });
});
