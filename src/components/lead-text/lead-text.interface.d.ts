import { BlocksContent } from '@strapi/blocks-react-renderer';
import { GlobalVariants } from '../../interfaces/global-variants';
import { HeaderShortProps } from '../header-short';

export interface LeadTextProps extends Omit<HeaderShortProps, 'variant'> {
    content: BlocksContent;
    variant?: GlobalVariants;
}
//# sourceMappingURL=lead-text.interface.d.ts.map