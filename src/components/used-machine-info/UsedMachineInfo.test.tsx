import { render } from '@testing-library/react';
import { UsedMachineInfo } from './UsedMachineInfo';
import { MachineCategory } from '../used-machine-pattern/used-machine-card';
import { LocaleVariants } from '../../interfaces/global-variants';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('Used Machine Info component', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <UsedMachineInfo
        brand="cat"
        onExposeClick={() => null}
        onOfferClick={() => null}
        description={''}
        items={[]}
        category={MachineCategory.ACCESSORY}
        city={''}
        country={''}
        locale={LocaleVariants.EN}
        name={''}
        postalCode={0}
        year={0}
      />
    );
    const usedMachineInfo = getByTestId('zep-used-machine-info');
    expect(usedMachineInfo).toBeInTheDocument();
  });
})
