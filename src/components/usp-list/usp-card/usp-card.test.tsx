import { render } from '@testing-library/react';
import { UspCard } from './usp-card';

describe('USP component', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <UspCard iconName="hook" count={'50'} headline="test" description="random text" />,
    );
    const USPElement = getByTestId('zep-usp');
    expect(USPElement).toBeInTheDocument();
  });
});
