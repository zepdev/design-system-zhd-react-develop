import { Meta, StoryObj } from '@storybook/react';
import { type UsedMachineFiltersProps, UsedMachineFiltersType } from './UsedMachineFilters.interface';
import { UsedMachineFilters } from './UsedMachineFilters';
import { MachineCategory } from '../used-machine-card';
import { LocaleVariants } from '../../../interfaces/global-variants';
import { useState } from 'react';

const meta = {
  title: 'Components/UsedMachineFilters',
  component: UsedMachineFilters,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => {
      const [filters, setFilters] = useState<UsedMachineFiltersType>({
        category: MachineCategory.GEN_SET,
        power: { min: 100, max: 1000 },
        sort: undefined,
        fuel: [],
        rating: [],
        type: [],
      });
      return <Story value={filters} setValue={setFilters} />;
    }
  ]
} satisfies Meta<typeof UsedMachineFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    locale: LocaleVariants.DE,
    powerOptions: {
      min: 100,
      max: 1000,
      step: 1,
    }
  } as UsedMachineFiltersProps,
  render: (args, { value, setValue }) => (
    <UsedMachineFilters {...args} setFilters={setValue} filters={value} />
  )
}
