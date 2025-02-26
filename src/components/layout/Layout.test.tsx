import { render } from '@testing-library/react';
import { Layout } from './Layout';

describe('Layout component', () => {
  it('should render', () => {
    const { getByTestId } = render(<Layout><div /></Layout>);
    const layoutElement = getByTestId('zep-layout');
    expect(layoutElement).toBeInTheDocument();
  })
})
