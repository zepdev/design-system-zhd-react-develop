import { MachineCategory, MachineFuel, MachineGenSetType, MachineRating } from '../used-machine-card';
import { Dispatch, SetStateAction } from 'react';
import { LocaleVariants } from '../../../interfaces/global-variants';
import { SliderProps } from '../../slider';

export declare enum MachineSort {
    POWER_ASCENDING = "power:asc",
    POWER_DESCENDING = "power:desc"
}
export interface UsedMachineFiltersType {
    category: MachineCategory;
    fuel: MachineFuel[];
    power: {
        min: number;
        max: number;
    };
    rating: MachineRating[];
    type: MachineGenSetType[];
    sort?: MachineSort;
}
export interface UsedMachineFiltersProps {
    setFilters: Dispatch<SetStateAction<UsedMachineFiltersType>>;
    locale: LocaleVariants;
    filters: UsedMachineFiltersType;
    powerOptions?: Omit<SliderProps, 'label' | 'value'>;
    className?: string;
}
//# sourceMappingURL=UsedMachineFilters.interface.d.ts.map