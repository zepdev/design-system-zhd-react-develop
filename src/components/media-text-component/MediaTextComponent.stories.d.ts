import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: ({ mediaUrl, mediaType, imageOrientation, imageAlt, mediaPosition, headline, description, buttonText, videoThumbnail, links, }: import('./media-text-component.interface').MediaTextComponentProps) => import("react/jsx-dev-runtime").JSX.Element;
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