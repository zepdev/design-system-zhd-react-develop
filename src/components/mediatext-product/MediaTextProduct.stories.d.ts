import { StoryObj } from '@storybook/react';
import { MediaTextProductProps } from './mediatext-product.interface';

declare const meta: {
    title: string;
    component: import('react').FC<MediaTextProductProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=MediaTextProduct.stories.d.ts.map