import { StoryObj } from '@storybook/react';
import { LinkProps } from './ZsdLink.interface';

declare const meta: {
    title: string;
    component: import('react').FC<LinkProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=ZsdLink.stories.d.ts.map