import { RichTextProps } from './RichText.interface';

declare const RichText: {
    ({ children, onDownload, description, buttonText, ...headerProps }: RichTextProps): import("react/jsx-dev-runtime").JSX.Element;
    BlocksRichText: import('react').FC<import('./RichText.interface').BlocksRichTextProps>;
    Images: import('react').FC<import('./RichText.interface').ImagesProps>;
    Accordion: import('react').FC<import('./RichText.interface').AccordionProps>;
    Table: ({ children, className, variant, maxWidth, maxHeight, fullWidth, textTop, buttonLabel, descriptionBottom, descriptionTop, dataSource, columns, align, tableButtonOnClick, ...props }: import('@zepdev/design-system-component-library-react').TableProps<{}>) => import("react/jsx-dev-runtime").JSX.Element;
    Certificates: import('react').FC<import('./RichText.interface').CertificatesProps>;
};
export { RichText };
//# sourceMappingURL=RichText.d.ts.map