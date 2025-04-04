import { StoryObj } from '@storybook/react';
import { MediaTextComponentPatternProps } from './media-text-component-pattern.interface';

declare const meta: {
    title: string;
    component: import('react').FC<MediaTextComponentPatternProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithLinkList: Story;
export declare const VerticalImage: Story;
export declare const WithVideo: Story;
//# sourceMappingURL=MediaTextComponentPattern.stories.d.ts.map