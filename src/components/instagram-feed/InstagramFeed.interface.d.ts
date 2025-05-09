import { HeaderLongProps } from '../header-long';

export interface InstagramFeedProps extends HeaderLongProps {
    feed: {
        src: string;
        alt: string;
        url?: string;
    }[];
    cookiesResetLabel: string;
    cookiesLayerDescription: string;
}
//# sourceMappingURL=InstagramFeed.interface.d.ts.map