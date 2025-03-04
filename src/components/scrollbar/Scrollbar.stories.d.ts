import { StoryObj } from '@storybook/react';
import { ScrollbarProps } from './Scrollbar.interface';

declare const meta: {
    title: string;
    component: import('react').FC<ScrollbarProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const HorizontalScroll: Story;
export declare const VerticalScroll: Story;
export declare const BothScrolls: Story;
//# sourceMappingURL=Scrollbar.stories.d.ts.map