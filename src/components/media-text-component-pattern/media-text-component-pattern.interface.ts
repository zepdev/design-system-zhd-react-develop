import { MediaTextComponentContentProps } from '@/components/media-text-component';
import { HeaderLongProps } from '@/components/header-long';

export interface MediaTextComponentPatternProps extends HeaderLongProps {
  cards: MediaTextComponentContentProps[];
  id?: string;
}
