import { StoryObj } from '@storybook/react';
import { NewsDetailsProps } from './NewsDetails.interface';

declare const meta: {
    title: string;
    component: import('react').FC<NewsDetailsProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=NewsDetails.stories.d.ts.map