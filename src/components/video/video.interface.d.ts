export interface SingleVideo {
    title: string;
    tagline?: string;
    type?: 'primary-button' | 'secondary-button' | 'link' | 'none';
    description?: string;
    url: string;
    thumbnail: string;
    linkHref?: string;
    linkText?: string;
    videoDetails?: string;
}
export interface VideoProps {
    video: SingleVideo;
    className?: string;
}
//# sourceMappingURL=video.interface.d.ts.map