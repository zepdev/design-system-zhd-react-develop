import { StoryObj } from '@storybook/react';
import { AccordionPatternProps } from './accordion.interface';

declare const meta: {
    title: string;
    component: import('react').FC<AccordionPatternProps>;
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
export declare const WithTable: Story;
//# sourceMappingURL=AccordionPattern.stories.d.ts.map