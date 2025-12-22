import { StoryObj } from '@storybook/react';
import { CardMediaGridProps } from './CardMediaGrid.interface';

declare const meta: {
    title: string;
    component: import('react').FC<CardMediaGridProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const CardMediaGridVertical: Story;
export declare const CardMediaGrid3Cards: Story;
export declare const CardMediaGrid4Cards: Story;
export declare const CardMediaGrid6Cards: Story;
export declare const CardMediaGridVaryingContent: Story;
//# sourceMappingURL=CardMediaGrid.stories.d.ts.map