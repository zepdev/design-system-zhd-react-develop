import { BlocksContent } from '@strapi/blocks-react-renderer';
import { GlobalVariants } from '../../interfaces/global-variants';

export interface NewsDetailsProps {
    date?: string;
    location?: string;
    description?: BlocksContent;
    imageSrc: string;
    imageAlt: string;
    imageDescription?: string;
    content: BlocksContent;
    variant?: GlobalVariants;
}
//# sourceMappingURL=NewsDetails.interface.d.ts.map