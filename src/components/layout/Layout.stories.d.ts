import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: ({ wrapperClassname, children, className, testId }: import('./layout.interface').LayoutProps) => import("react/jsx-dev-runtime").JSX.Element;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=Layout.stories.d.ts.map