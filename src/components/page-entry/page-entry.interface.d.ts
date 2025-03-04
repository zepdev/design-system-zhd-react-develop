interface MediaItem {
    thumbnail: string;
    source: string;
    type: 'image' | 'video';
}
export interface PageEntryProps {
    media: MediaItem[];
    headline: string;
    tagline: string;
    description: string;
    primaryButtonText: string;
    primaryButtonClick: () => void;
    secondaryButtonText: string;
    secondaryButtonClick: () => void;
}
export {};
//# sourceMappingURL=page-entry.interface.d.ts.map