import { StoryObj } from '@storybook/react';
import { ArticlesProps } from './articles.interface';

declare const meta: {
    title: string;
    component: import('react').FC<ArticlesProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Items11: Story;
export declare const MultipleItems: Story;
//# sourceMappingURL=Articles.stories.d.ts.map