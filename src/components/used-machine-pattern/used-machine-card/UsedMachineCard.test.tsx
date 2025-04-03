import { render } from '@testing-library/react';
import { UsedMachineCard } from '@/components/used-machine-pattern/used-machine-card/UsedMachineCard';
import { MachineCategory } from '@/components/used-machine-pattern/used-machine-card/UsedMachineCard.interface';
import { LocaleVariants } from '../../../interfaces/global-variants';

describe('UsedMachineCard component', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <UsedMachineCard
        url=""
        brand="cat"
        imageSrc=""
        category={MachineCategory.GEN_SET}
        name=""
        year={2020}
        city=""
        country=""
        postalCode={0}
        locale={LocaleVariants.DE}
      />
    );
    const usedMachineCard = getByTestId('zep-used-machine-card');
    expect(usedMachineCard).toBeInTheDocument();
  })
})
