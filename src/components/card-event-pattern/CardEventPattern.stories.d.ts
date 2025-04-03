import { StoryObj } from '@storybook/react';
import { CardEventPatternProps } from './card-event-pattern.interface';

declare const meta: {
    title: string;
    component: import('react').FC<CardEventPatternProps>;
    tags: string[];
    argTypes: {
        items: {
            control: {
                type: string;
            };
        };
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
export declare const With5Items: Story;
export declare const With20Items: Story;
export declare const With100Items: Story;
//# sourceMappingURL=CardEventPattern.stories.d.ts.map