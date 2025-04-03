import { StoryObj } from '@storybook/react';
import { UsedMachineCardProps } from './UsedMachineCard.interface';

declare const meta: {
    title: string;
    component: import('react').FC<UsedMachineCardProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=UsedMachineCard.stories.d.ts.map