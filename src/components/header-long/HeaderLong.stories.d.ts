import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: ({ variant, ...rest }: import('../header-long-component').HeaderLongComponentProps) => import("react/jsx-dev-runtime").JSX.Element;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithBackground: Story;
export declare const WithLink: Story;
export declare const WithButton: Story;
//# sourceMappingURL=HeaderLong.stories.d.ts.map