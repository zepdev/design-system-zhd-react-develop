import { StoryObj } from '@storybook/react';
import { NavigationProps } from './navigation.interface';

declare const meta: {
    title: string;
    component: import('react').FC<NavigationProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const ZsdVariant: Story;
//# sourceMappingURL=Navigation.stories.d.ts.map