export interface SingleVideo {
    title: string;
    tagline?: string;
    type?: 'primary-button' | 'secondary-button' | 'link' | 'none';
    description?: string;
    url: string;
    thumbnail: string;
    linkHref?: string;
    linkText?: string;
    thumbnailAlt: string;
    videoDetails?: string;
    cookiesResetLabel?: string;
    cookiesLayerDescription?: string;
}
export interface VideoProps {
    video: SingleVideo;
    className?: string;
    id?: string;
}
//# sourceMappingURL=video.interface.d.ts.map