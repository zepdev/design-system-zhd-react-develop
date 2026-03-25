import { StoryObj } from '@storybook/react';
import { HeaderShortProps } from './headershort.interface';

declare const meta: {
    title: string;
    component: import('react').FC<HeaderShortProps>;
    tags: string[];
    argTypes: {
        backgroundVariant: {
            control: string;
            options: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const LongHeadline: Story;
export declare const ComponentWithoutTagline: Story;
export declare const ComponentWithoutArrow: Story;
export declare const ComponentWithGrayBackground: Story;
export declare const ComponentWithWhiteBackground: Story;
//# sourceMappingURL=HeaderShort.stories.d.ts.map