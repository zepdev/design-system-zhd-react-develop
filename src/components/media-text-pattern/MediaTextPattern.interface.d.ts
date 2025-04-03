import { MediaTextContentProps } from '../media-text';
import { GlobalVariants } from '../../interfaces/global-variants';
import { HeaderShortProps } from '../header-short';

export interface MediaTextPatternProps extends Partial<Omit<HeaderShortProps, 'variant'>> {
    cards: MediaTextContentProps[];
    variant?: GlobalVariants;
}
//# sourceMappingURL=MediaTextPattern.interface.d.ts.map