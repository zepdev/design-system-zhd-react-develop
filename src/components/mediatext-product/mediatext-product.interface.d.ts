import { BlocksContent } from '@strapi/blocks-react-renderer';
import { FunctionalIconNames } from '@zepdev/design-system-component-library-react';
import { AccordionContent } from '../accrodion-pattern';
import { HeaderLongProps } from '../header-long';

export interface MediaTextProductProps extends Partial<Omit<HeaderLongProps, 'variant'>> {
    className?: string;
    imageSrc: string;
    imageAlt?: string;
    productDescription?: BlocksContent;
    labelPrimary?: string;
    iconPrimary?: FunctionalIconNames;
    iconPrimaryPosition?: 'left' | 'right' | 'none';
    buttonUrl?: string;
    buttonAction?: 'open-internal-link' | 'open-external-link' | 'download-file' | 'none';
    accordionContent?: AccordionContent[];
}
//# sourceMappingURL=mediatext-product.interface.d.ts.map