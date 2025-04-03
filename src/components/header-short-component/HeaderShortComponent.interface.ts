import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';

export interface HeaderShortComponentProps {
  variant?: GlobalVariants | GlobalVariantExtended;
  showArrow?: boolean;
  tagline?: string;
  headline?: string;
  className?: string;
}
