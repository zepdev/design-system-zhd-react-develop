import { GlobalVariants } from '../../interfaces/global-variants';

export interface SingleVideo {
    title: string;
    tagline: string;
    thumbnailAlt: string;
    description: string;
    url: string;
    thumbnail: string;
    linkHref?: string;
    linkText?: string;
    cookiesResetLabel?: string;
    cookiesLayerDescription?: string;
}
export interface VideoProps {
    videos: SingleVideo[];
    variant?: GlobalVariants;
    className?: string;
    id?: string;
}
//# sourceMappingURL=video.interface.d.ts.map