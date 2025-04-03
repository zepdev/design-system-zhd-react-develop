import { StoryObj } from '@storybook/react';
import { InfographicImageProps } from './infographic-image.interface';

declare const meta: {
    title: string;
    component: import('react').FC<InfographicImageProps>;
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
export declare const WithSteps: Story;
//# sourceMappingURL=InfographicImage.stories.d.ts.map