import { BlocksContent } from '@strapi/blocks-react-renderer';
import { FunctionalIconNames } from '@zepdev/design-system-component-library-react';
import { ReactNode } from 'react';

export interface MediaTextComponentContentProps extends MediaTextComponentImageProps, MediaTextComponentButtonProps {
    imageAlt?: string;
    mediaUrl?: string;
    mediaAlignment?: 'left' | 'right' | 'none';
    buttonText?: string;
    headline?: string;
    tagline?: string;
    content: BlocksContent;
    imageOrientation?: 'horizontal' | 'vertical' | 'none';
    contentAlignment?: 'start' | 'center' | 'none';
}
export interface MediaTextComponentBodyProps {
    children: ReactNode;
}
export interface MediaTextComponentImageProps {
    alt: string;
    mediaUrl?: string;
    mediaType?: 'image' | 'video' | 'none';
    videoThumbnail?: string;
    imageOrientation?: 'horizontal' | 'vertical' | 'none';
    mediaAlignment?: 'left' | 'right' | 'none';
}
export interface MediaTextComponentButtonProps {
    labelPrimary?: string;
    iconPrimary?: FunctionalIconNames;
    iconPrimaryPosition?: 'left' | 'right' | 'none';
    buttonUrl?: string;
    buttonAction?: 'open-internal-link' | 'open-external-link' | 'download-file' | 'none';
}
//# sourceMappingURL=media-text-component.interface.d.ts.map