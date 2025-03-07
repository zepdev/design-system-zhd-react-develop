import { LinkProps } from '@zepdev/design-system-component-library-react';

export interface MediaTextComponentProps {
    mediaUrl: string;
    mediaType: 'image' | 'video';
    imageOrientation?: 'horizontal' | 'vertical';
    imageAlt?: string;
    mediaPosition: 'left' | 'right';
    headline: string;
    description?: string;
    buttonText?: string;
    links?: LinkProps[];
    videoThumbnail?: string;
}
//# sourceMappingURL=media-text-component.interface.d.ts.map