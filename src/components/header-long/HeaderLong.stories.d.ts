import { StoryObj } from '@storybook/react';
import { HeaderLongProps } from './headerlong.interface';

declare const meta: {
    title: string;
    component: (props: HeaderLongProps) => import("react/jsx-dev-runtime").JSX.Element;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithLink: Story;
export declare const WithButton: Story;
//# sourceMappingURL=HeaderLong.stories.d.ts.map