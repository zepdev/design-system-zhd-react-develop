import { HeaderShortProps } from '@/components/header-short';
import { MediaTextComponentContentProps } from '@/components/media-text-component';

export interface MediaTextComponentPatternProps extends HeaderShortProps {
  cards: MediaTextComponentContentProps[];
  id?: string;
}
