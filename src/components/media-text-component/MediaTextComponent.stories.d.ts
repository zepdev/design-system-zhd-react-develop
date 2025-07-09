import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: ({ mediaAlignment, headline, tagline, content, labelPrimary, alt, type, iconPrimaryPosition, buttonAction, buttonUrl, iconPrimary, mediaUrl, mediaType, imageOrientation, contentAlignment, }: import('./media-text-component.interface').MediaTextComponentContentProps) => import("react/jsx-dev-runtime").JSX.Element;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithVerticalImageLeft: Story;
export declare const WithVerticalImageRight: Story;
export declare const WithVideo: Story;
export declare const WithLinks: Story;
export declare const WithMediaAlignmentRight: Story;
//# sourceMappingURL=MediaTextComponent.stories.d.ts.map