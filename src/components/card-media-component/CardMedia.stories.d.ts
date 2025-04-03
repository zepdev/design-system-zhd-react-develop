import { StoryObj } from '@storybook/react';
import { CardMediaProps } from './cardmedia.interface';

declare const meta: {
    title: string;
    component: import('react').FC<CardMediaProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=CardMedia.stories.d.ts.map