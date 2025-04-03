import { GlobalVariants } from '../../interfaces/global-variants';
import { LinkListItemProps } from '@/components/link-list-item';

export interface ContactSectionProps {
  variant?: GlobalVariants;
  linkLists: LinkListItemProps[];
  headline: string;
  id?: string;
}
