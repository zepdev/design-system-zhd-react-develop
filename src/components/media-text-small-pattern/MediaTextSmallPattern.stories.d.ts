import { StoryObj } from '@storybook/react';
import { MediaTextSmallPatternProps } from './media-text-small-pattern.interfce';

declare const meta: {
    title: string;
    component: import('react').FC<MediaTextSmallPatternProps>;
    tags: string[];
    argTypes: {
        items: {
            control: {
                type: string;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithHeadline: Story;
export declare const With3Items: Story;
export declare const With4Items: Story;
export declare const With5Items: Story;
export declare const With6Items: Story;
export declare const With7Items: Story;
export declare const With8Items: Story;
//# sourceMappingURL=MediaTextSmallPattern.stories.d.ts.map