import { render } from '@testing-library/react';
import { UsedMachinePattern } from './UsedMachinePattern';
import { LocaleVariants } from '../../interfaces/global-variants';
import { MachineCategory } from './used-machine-card';

describe('Used Machine Pattern', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <UsedMachinePattern
        onContactExpertsClick={() => console.log('click')}
        cards={[]}
        total={0}
        currentTotal={0}
        setCurrentTotal={() => null}
        setFilters={() => null}
        locale={LocaleVariants.DE}
        filters={{
          category: MachineCategory.ACCESSORY,
          sort: undefined,
          power: { min: 0, max: 0 },
          rating: [],
          type: [],
          fuel: [],
        }}
      />
    )
    const pattern = getByTestId('zep-used-machine-pattern');
    expect(pattern).toBeInTheDocument();
  });
})
