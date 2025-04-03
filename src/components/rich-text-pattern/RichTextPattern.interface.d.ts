import { HeaderShortProps } from '../header-short';
import { RichTextProps } from '../rich-text';

export interface RichTextPatternProps extends Omit<RichTextProps, 'variant'>, Partial<Omit<HeaderShortProps, 'variant'>> {
    id?: string;
}
//# sourceMappingURL=RichTextPattern.interface.d.ts.map