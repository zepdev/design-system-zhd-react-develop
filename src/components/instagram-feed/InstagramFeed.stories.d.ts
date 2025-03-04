import { StoryObj } from '@storybook/react';
import { InstagramFeedProps } from './InstagramFeed.interface';

declare const meta: {
    title: string;
    component: import('react').FC<InstagramFeedProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=InstagramFeed.stories.d.ts.map