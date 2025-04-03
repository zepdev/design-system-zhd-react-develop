import { BlocksContent } from '@strapi/blocks-react-renderer';
import { GlobalVariants } from '../../interfaces/global-variants';
import { HeaderShortProps } from '@/components/header-short';

export interface LeadTextProps extends Omit<HeaderShortProps, 'variant'> {
  content: BlocksContent,
  variant?: GlobalVariants
}
