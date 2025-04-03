import { StoryObj } from '@storybook/react';
import { UsedMachinePatternProps } from './UsedMachinePattern.interface';
import { LocaleVariants } from '../../interfaces/global-variants';
import { UsedMachineCardProps } from './used-machine-card';
import { UsedMachineFiltersType } from './used-machine-filters';

declare const meta: {
    title: string;
    component: import('react').FC<UsedMachinePatternProps>;
    tags: string[];
    argTypes: {};
    decorators: ((Story: import('@storybook/types').PartialStoryFn<import('@storybook/react/dist/types-0fc72a6d').R, {
        cards: UsedMachineCardProps[];
        total: number;
        currentTotal: number;
        setCurrentTotal: import('react').Dispatch<import('react').SetStateAction<number>>;
        onContactExpertsClick: (ev: import('react').MouseEvent<HTMLElement, MouseEvent>) => void;
        setFilters: import('react').Dispatch<import('react').SetStateAction<UsedMachineFiltersType>>;
        locale: LocaleVariants;
        filters: UsedMachineFiltersType;
        powerOptions?: Omit<import('..').SliderProps, "label" | "value"> | undefined;
        className?: string | undefined;
    }>) => import("react/jsx-dev-runtime").JSX.Element)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=UsedMachinePattern.stories.d.ts.map