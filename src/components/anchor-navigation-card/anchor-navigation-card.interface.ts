import { GlobalVariants } from '../../interfaces/global-variants';

export interface AnchorNavigationCardProps {
  headline?: string;
  linkLabel: string;
  scrollToIdLink: string;
  variant: GlobalVariants;
  className?: string;
}
