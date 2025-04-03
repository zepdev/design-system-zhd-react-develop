import { render } from '@testing-library/react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { USP } from './Usp';

describe('USP component', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <USP iconName="hook" variant={GlobalVariants.Zps} count={'50'} headline="test" description="random text"></USP>,
    );
    const USPElement = getByTestId('zep-usp');
    // Deleting the line in the test since we don't need the px-1 class anymore
    expect(USPElement).toBeInTheDocument();
  });
});
