import { HeaderShortComponentProps } from './HeaderShortComponent.interface';
import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: ({ tagline, headline, className }: HeaderShortComponentProps) => import("react/jsx-dev-runtime").JSX.Element;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const LongHeadline: Story;
export declare const ComponentWithoutTagline: Story;
export declare const ComponentWithoutArrow: Story;
//# sourceMappingURL=HeaderShortComponent.stories.d.ts.map