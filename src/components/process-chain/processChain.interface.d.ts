import { HeaderLongProps } from '../header-long';
import { GlobalVariants } from '../../interfaces/global-variants';

export interface ProcessChainItem {
    headline: string;
    listItems: string[];
}
export interface ProcessChainProps extends Partial<Omit<HeaderLongProps, 'variant'>> {
    contentItems: ProcessChainItem[];
    variant?: GlobalVariants;
    id?: string;
}
//# sourceMappingURL=processChain.interface.d.ts.map