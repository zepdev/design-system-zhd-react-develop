import { FC } from 'react';
import { AccordionProps, RichTextProps, THContext, TableProps, TextHighlightProps } from './TextHighlight.interface';

export declare const useTextHighlightContext: () => THContext;
declare const TextHighlight: {
    ({ buttonText, children, imageAlt, imageSrc, message, buttonOnClick, imageAlignment, headline, bottomDescription, topDescription, id, buttonType, buttonVariant, buttonUrl, buttonIcon, buttonIconPosition, ...headerLongProps }: TextHighlightProps): import("react/jsx-dev-runtime").JSX.Element;
    Accordion: FC<AccordionProps>;
    Table: FC<TableProps>;
    RichText: FC<RichTextProps>;
};
export { TextHighlight };
//# sourceMappingURL=TextHighlight.d.ts.map