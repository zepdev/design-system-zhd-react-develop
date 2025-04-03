import { render } from '@testing-library/react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { CardEventPattern } from './CardEventPattern';



describe('cardEventPattern component', () => {
  it('should render card event pattern', () => {
    const Child = <CardEventPattern headline="headline" buttonLabel="click" items={[]} variant={GlobalVariants.Zps} />;
    const { getByTestId } = render(Child);
    const anchorCardElement = getByTestId('zep-card-event');
    expect(anchorCardElement).toBeInTheDocument();
  });
});
