import { StoryObj } from '@storybook/react';
import { UsedMachineFiltersProps, UsedMachineFiltersType } from './UsedMachineFilters.interface';
import { LocaleVariants } from '../../../interfaces/global-variants';

declare const meta: {
    title: string;
    component: import('react').FC<UsedMachineFiltersProps>;
    tags: string[];
    argTypes: {};
    decorators: ((Story: import('@storybook/types').PartialStoryFn<import('@storybook/react/dist/types-0fc72a6d').R, {
        setFilters: import('react').Dispatch<import('react').SetStateAction<UsedMachineFiltersType>>;
        locale: LocaleVariants;
        filters: UsedMachineFiltersType;
        powerOptions?: Omit<import('../..').SliderProps, "label" | "value"> | undefined;
        className?: string | undefined;
    }>) => import("react/jsx-dev-runtime").JSX.Element)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=UsedMachineFilters.stories.d.ts.map