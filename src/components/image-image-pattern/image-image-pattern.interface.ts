import { HeaderLongProps } from '@/components/header-long';
import type { ImageImageProps } from '@/components/image-image'; // Ensure using `type` to import types

export interface ImageImagePatternProps extends Partial<HeaderLongProps> {
  items: ImageImageProps;
  id?: string;
}
