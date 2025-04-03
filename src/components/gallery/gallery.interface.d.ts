import { GlobalVariants } from '../../interfaces/global-variants';

export interface GalleryImage {
    src: string;
    srcset?: string;
    sizes?: string;
    alt?: string;
    thumbnail?: string;
}
export interface GalleryProps {
    items: GalleryImage[];
    variant?: GlobalVariants;
    className?: string;
}
//# sourceMappingURL=gallery.interface.d.ts.map