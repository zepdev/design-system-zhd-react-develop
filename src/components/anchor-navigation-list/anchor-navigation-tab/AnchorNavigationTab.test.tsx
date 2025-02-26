import { render } from '@testing-library/react';
import { AnchorNavigationTab } from './AnchorNavigationTab';

describe('Anchor navigation tab component', () => {
  it('should render an anchor navigation tab component', () => {
    const Child = (
      <AnchorNavigationTab
        setSelectedTab={() => null}
        activeTab={{ scrollToIdLink: '', linkLabel: '' }}
        tab={{ scrollToIdLink: '', linkLabel: '' }}
      />
    );
    const { getByTestId } = render(Child);
    const anchorCardElement = getByTestId('zep-anchor-navigation-tab');
    expect(anchorCardElement).toBeInTheDocument();
  });
});
