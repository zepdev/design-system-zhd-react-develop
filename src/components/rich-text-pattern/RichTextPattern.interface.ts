import { HeaderShortProps } from '@/components/header-short';
import { RichTextProps } from '../rich-text';

export interface RichTextPatternProps
  extends Omit<RichTextProps, 'variant'>,
    Partial<Omit<HeaderShortProps, 'variant'>> {
  id?: string;
}
