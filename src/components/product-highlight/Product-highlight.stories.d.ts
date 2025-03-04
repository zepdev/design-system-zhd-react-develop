import { StoryObj } from '@storybook/react';
import { ProductHighLightProps } from './product-highlight.interface';

declare const meta: {
    title: string;
    component: import('react').FC<ProductHighLightProps>;
    tags: string[];
    argTypes: {
        buttonVariant: {
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
export declare const RightImageAlignment: Story;
//# sourceMappingURL=Product-highlight.stories.d.ts.map