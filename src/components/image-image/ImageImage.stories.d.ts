import { StoryObj } from '@storybook/react';
import { ImageImageProps } from './image-image.interface';

declare const meta: {
    title: string;
    component: import('react').FC<ImageImageProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithoutSmallImage: Story;
//# sourceMappingURL=ImageImage.stories.d.ts.map