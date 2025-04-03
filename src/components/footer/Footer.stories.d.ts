import { StoryObj } from '@storybook/react';
import { FooterProps } from './Footer.interface';

declare const meta: {
    title: string;
    component: import('react').FC<FooterProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=Footer.stories.d.ts.map