import { render } from '@testing-library/react';
import { Link } from './ZsdLink';

describe('Link', () => {
  it('should render', () => {
    const { getByText } = render(<Link label="Link" />)
    const link = getByText('Link');
    expect(link).toBeInTheDocument();
  });
})
