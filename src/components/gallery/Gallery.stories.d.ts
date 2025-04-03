import { StoryObj } from '@storybook/react';
import { GalleryProps } from './gallery.interface';

declare const meta: {
    title: string;
    component: import('react').FC<GalleryProps>;
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
//# sourceMappingURL=Gallery.stories.d.ts.map