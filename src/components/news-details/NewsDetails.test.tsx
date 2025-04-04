import { render } from '@testing-library/react';
import { NewsDetails } from './NewsDetails';

describe('News Details component', () => {
  it('should render', () => {
    const { getByTestId } = render(<NewsDetails imageSrc="" imageAlt="" imageDescription="" content={[]} />)
    const newsDetails = getByTestId('zep-news-details');
    expect(newsDetails).toBeInTheDocument();
  });
})
