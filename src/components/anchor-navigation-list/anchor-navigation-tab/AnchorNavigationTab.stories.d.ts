import { StoryObj } from '@storybook/react';
import { AnchorNavigationTabProps } from './anchor-navigation-tab.interface';

declare const meta: {
    title: string;
    component: import('react').FC<AnchorNavigationTabProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=AnchorNavigationTab.stories.d.ts.map