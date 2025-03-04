import { StoryObj } from '@storybook/react';
import { LeadTextProps } from './lead-text.interface';

declare const meta: {
    title: string;
    component: import('react').FC<LeadTextProps>;
    tags: string[];
    argTypes: {
        theme: {
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
//# sourceMappingURL=LeadText.stories.d.ts.map