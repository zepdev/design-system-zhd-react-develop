import { GlobalVariants } from '../../interfaces/global-variants';
import { USPProps } from '../USP';

export interface USPListProps {
  headerTitle: string;
  tagline?: string;
  variant?: GlobalVariants;
  uspCards?: USPProps[];
  id?: string;
}
