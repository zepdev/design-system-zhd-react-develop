import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('react').FC<import('./processChain.interface').ProcessChainProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const ListChain: Story;
export declare const LinkChain: Story;
//# sourceMappingURL=procesChain.stories.d.ts.map