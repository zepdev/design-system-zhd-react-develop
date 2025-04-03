import { StoryObj } from '@storybook/react';
import { TablePatternProps } from './TablePattern.interface';

declare const meta: {
    title: string;
    component: import('react').FC<TablePatternProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=TablePattern.stories.d.ts.map