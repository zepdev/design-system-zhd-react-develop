import { StoryObj } from '@storybook/react';
import { SliderProps } from './Slider.interface';

declare const meta: {
    title: string;
    component: import('react').FC<SliderProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=Slider.stories.d.ts.map