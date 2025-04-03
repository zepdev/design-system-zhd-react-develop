import { GlobalVariants } from '../../interfaces/global-variants';
import { HeaderLongProps } from '../header-long';
import { InfographicImageProps } from '@/components/infographic-image';

export interface InfographicImagePatternProps {
  header: HeaderLongProps;
  infographic: InfographicImageProps;
  variant: GlobalVariants;
  id?: string;
}
