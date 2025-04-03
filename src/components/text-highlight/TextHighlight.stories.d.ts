import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: {
        ({ buttonText, children, imageAlt, imageSrc, message, buttonOnClick, variant, imageAlignment, headline, bottomDescription, topDescription, id, buttonType, buttonVariant, buttonUrl, buttonIcon, buttonIconPosition, ...headerLongProps }: import('./TextHighlight.interface').TextHighlightProps): import("react/jsx-dev-runtime").JSX.Element;
        Accordion: import('react').FC<import('./TextHighlight.interface').AccordionProps>;
        Table: import('react').FC<import('./TextHighlight.interface').TableProps>;
        RichText: import('react').FC<import('./TextHighlight.interface').RichTextProps>;
    };
    tags: string[];
    argTypes: {};
};
type Story = StoryObj<typeof meta>;
export default meta;
export declare const TextHighlightRichText: Story;
export declare const ImageAlignmentRight: Story;
export declare const TextHighlightTable: Story;
export declare const TextHighlightAccordion: Story;
//# sourceMappingURL=TextHighlight.stories.d.ts.map