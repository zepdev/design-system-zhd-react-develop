import { StoryObj } from '@storybook/react';
import { RichTextPatternProps } from './RichTextPattern.interface';

declare const meta: {
    title: string;
    component: import('react').FC<RichTextPatternProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=RichTextPattern.stories.d.ts.map