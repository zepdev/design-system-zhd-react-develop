import { StoryObj } from '@storybook/react';
import { AnchorNavigationListProps } from './anchor-navigation-list.interface';

declare const meta: {
    title: string;
    component: import('react').FC<AnchorNavigationListProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const With2Items: Story;
//# sourceMappingURL=AnchorNavigationList.stories.d.ts.map