import { StoryObj } from '@storybook/react';
import { FeedbackProps } from './feedback.interface';

declare const meta: {
    title: string;
    component: import('react').FC<FeedbackProps>;
    tags: string[];
    argTypes: {
        variant: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=FeedbackComponent.stories.d.ts.map