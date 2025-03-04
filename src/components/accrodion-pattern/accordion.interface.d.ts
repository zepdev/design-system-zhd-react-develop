import { BlocksContent } from '@strapi/blocks-react-renderer';
import { HeaderLongProps } from '../header-long';

export interface AccordionContent {
    title: string;
    accordionContent: BlocksContent;
}
export interface AccordionPatternProps extends Partial<HeaderLongProps> {
    topDescription?: BlocksContent;
    bottomDescription?: BlocksContent;
    contents: AccordionContent[];
    headerPosition?: 'top' | 'left';
}
//# sourceMappingURL=accordion.interface.d.ts.map