import { StoryObj } from '@storybook/react';
import { RichTextProps } from './RichText.interface';

declare const meta: {
    title: string;
    component: ({ content, children, className, button, buttonIcon, type, buttonIconPosition, buttonAction, buttonUrl, }: RichTextProps) => import("react/jsx-dev-runtime").JSX.Element | null;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithSingleImage: Story;
//# sourceMappingURL=RichText.stories.d.ts.map