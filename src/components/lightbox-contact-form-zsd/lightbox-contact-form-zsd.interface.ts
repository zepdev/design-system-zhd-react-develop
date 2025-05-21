import { LinkListItemProps } from '@/components/link-list-item';
import { LocaleVariants } from '../../interfaces/global-variants';

export interface LightboxContactFormZsdProps {
  onSubmit: (data: unknown) => void;
  locale: LocaleVariants;
  isOpen: boolean;
  setIsOpen: (x: boolean) => void;
  loading?: boolean;
  contactArea?: string;
  contactList?: LinkListItemProps[];
  privacyPolicyUrl: string;
}
