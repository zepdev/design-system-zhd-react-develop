import { render } from '@testing-library/react';
import { CardEventsZsd } from './CardEventsZsd';

describe('Card Events', () => {
  it('should render', () => {
    const { getByTestId } = render(<CardEventsZsd cards={[]} />);
    const cardEventsZsd = getByTestId('zep-card-events');
    expect(cardEventsZsd).toBeInTheDocument();
  });
})
