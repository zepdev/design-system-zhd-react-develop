import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: ({ linkChain, contentItems, id, headline, ...headerProps }: {
        [x: string]: any;
        linkChain: any;
        contentItems: any;
        id: any;
        headline: any;
    }) => import("react/jsx-dev-runtime").JSX.Element;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const ListChain: Story;
export declare const LinkChain: Story;
//# sourceMappingURL=procesChain.stories.d.ts.map