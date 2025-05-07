import { StoryObj } from '@storybook/react';
import { USPProps } from './usp.interface';

declare const meta: {
    title: string;
    component: import('react').FC<USPProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=Usp.stories.d.ts.map