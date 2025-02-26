import { render } from '@testing-library/react';
import { ProductHighLight } from './Product-highlight';

describe('Product Highlight Component', () => {
  it('should render correctly', () => {
    const element = (
      <ProductHighLight
        productDetails={[
          {
            title: 'ESC für Neumotoren',
            content:
              'Für Cat Motoren und Cat Stromaggregate ist eine Abdeckung von 24–60 Monaten verfügbar, sofern die Original-Herstellergarantie noch nicht abgelaufen ist.',
          },
          {
            title: 'ESC für gebrauchte Motoren (Advantage ESC)',
            content:
              'Für Cat Motoren und Cat Stromaggregate ist eine Abdeckung von 24–60 Monaten verfügbar, sofern die Original-Herstellergarantie noch nicht abgelaufen ist.',
          },
          {
            title: 'ESC für überholte Motoren (Overhaul ESC)',
            content:
              'Für Cat Motoren und Cat Stromaggregate ist eine Abdeckung von 24–60 Monaten verfügbar, sofern die Original-Herstellergarantie noch nicht abgelaufen ist.',
          },
          {
            title: undefined,
            content: 'Für Cat Motoren und Cat Stromaggregate ist eine Abdeckung von 24–60 Monaten verfügbar.',
          },
        ]}
        productImageSrc="https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
        imageAlt="alt text"
        buttonText="Button"
        buttonTitle="button title"
        imageAlignment="left"
      />
    );
    const { getByText, getAllByTestId, getByAltText } = render(element);
    const buttonText = getByText('Button');
    const headlineText = getAllByTestId('headline');
    const imageAlt = getByAltText('alt text');
    expect(buttonText).toBeInTheDocument();
    expect(headlineText.length).toBe(3);
    expect(headlineText[0].innerHTML).toBe('ESC für Neumotoren');
    expect(imageAlt).toBeInTheDocument();
  });
});
