import { render } from '@testing-library/react';
import { UsedMachineFilters } from './UsedMachineFilters';
import { LocaleVariants } from '../../../interfaces/global-variants';
import { MachineCategory } from '../used-machine-card';

describe('Used Machine Filters', () => {
  it ('should render', () => {
    const { getByTestId } = render(
      <UsedMachineFilters
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
    const filters = getByTestId('zep-used-machine-filters');
    expect(filters).toBeInTheDocument();
  })
})
