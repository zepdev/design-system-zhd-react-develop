import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('react').FC<import('./image-image-pattern.interface').ImageImagePatternProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithOnlyLargeImage: Story;
//# sourceMappingURL=ImageImagePattern.stories.d.ts.map