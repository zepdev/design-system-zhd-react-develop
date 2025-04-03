import { UsedMachineCardProps } from './used-machine-card';
import { UsedMachineFiltersProps } from './used-machine-filters';
import { Dispatch, MouseEvent, SetStateAction } from 'react';

export interface UsedMachinePatternProps extends UsedMachineFiltersProps {
    cards: UsedMachineCardProps[];
    total: number;
    currentTotal: number;
    setCurrentTotal: Dispatch<SetStateAction<number>>;
    onContactExpertsClick: (ev: MouseEvent<HTMLElement>) => void;
}
//# sourceMappingURL=UsedMachinePattern.interface.d.ts.map