import { HeaderShortProps } from '@/components/header-short';
import { MediaTextComponentContentProps } from '../media-text-component/media-text-component.interface';

export interface MediaTextComponentPatternProps extends HeaderShortProps {
  cards: MediaTextComponentContentProps[];
}
