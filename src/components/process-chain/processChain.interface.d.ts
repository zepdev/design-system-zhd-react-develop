import { FunctionalIconNames } from '../../../node_modules/@zepdev/design-system-component-library-react/dist/lib';
import { HeaderLongProps } from '../header-long';

export interface LinkItem {
    icon: FunctionalIconNames;
    link: string;
}
export interface ProcessChainItem {
    headline: string;
    listItems?: string[];
    linkItems?: LinkItem[];
}
export interface ProcessChainProps extends Partial<HeaderLongProps> {
    contentItems: ProcessChainItem[];
    linkChain: boolean;
}
//# sourceMappingURL=processChain.interface.d.ts.map