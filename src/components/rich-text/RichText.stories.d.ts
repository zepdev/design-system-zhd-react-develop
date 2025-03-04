import { StoryObj } from '@storybook/react';
import { RichTextProps } from './RichText.interface';

declare const meta: {
    title: string;
    component: {
        ({ children, onDownload, description, buttonText, ...headerProps }: RichTextProps): import("react/jsx-dev-runtime").JSX.Element;
        BlocksRichText: import('react').FC<import('./RichText.interface').BlocksRichTextProps>;
        Images: import('react').FC<import('./RichText.interface').ImagesProps>;
        Accordion: import('react').FC<import('./RichText.interface').AccordionProps>;
        Table: ({ children, className, variant, maxWidth, maxHeight, fullWidth, textTop, buttonLabel, descriptionBottom, descriptionTop, dataSource, columns, align, tableButtonOnClick, ...props }: import('@zepdev/design-system-component-library-react').TableProps<{}>) => import("react/jsx-dev-runtime").JSX.Element;
        Certificates: import('react').FC<import('./RichText.interface').CertificatesProps>;
    };
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=RichText.stories.d.ts.map