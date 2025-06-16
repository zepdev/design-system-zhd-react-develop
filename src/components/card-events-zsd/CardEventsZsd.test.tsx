import { render } from '@testing-library/react';
import { CardEventsZsd } from './CardEventsZsd';

describe('Card Events', () => {
  it('should render', () => {
    const { getByTestId } = render(<CardEventsZsd cards={[]} setCurrentPage={() => null} currentPage={1} total={1} headline="" />);
    const cardEventsZsd = getByTestId('zep-card-events');
    expect(cardEventsZsd).toBeInTheDocument();
  });
})
