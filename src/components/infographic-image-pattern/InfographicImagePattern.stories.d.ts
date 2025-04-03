import { StoryObj } from '@storybook/react';
import { InfographicImagePatternProps } from './infographic-image-pattern.interface';

declare const meta: {
    title: string;
    component: import('react').FC<InfographicImagePatternProps>;
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
//# sourceMappingURL=InfographicImagePattern.stories.d.ts.map