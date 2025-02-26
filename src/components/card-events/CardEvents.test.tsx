import { render } from '@testing-library/react';
import { CardEvents } from './CardEvents';

describe('Card Events', () => {
  it('should render', () => {
    const { getByTestId } = render(<CardEvents cards={[]} setCurrentPage={() => null} currentPage={1} total={1} headline="" />);
    const cardEvents = getByTestId('zep-card-events');
    expect(cardEvents).toBeInTheDocument();
  });
})
