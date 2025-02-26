import { render } from '@testing-library/react';
import { USPList } from './UspList';

describe('USP list component', () => {
  it('should render an usp list component', () => {
    const Child = <USPList headline={'Header'} uspCards={[]} />;
    const { getByTestId } = render(Child);
    const uspListElement = getByTestId('zep-usp-list');
    expect(uspListElement).toBeInTheDocument();
  });
});
