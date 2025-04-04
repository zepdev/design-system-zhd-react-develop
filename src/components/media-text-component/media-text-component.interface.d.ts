import { BlocksContent } from '@strapi/blocks-react-renderer';
import { FunctionalIconNames } from '@zepdev/design-system-component-library-react';
import { ReactNode } from 'react';

export interface MediaTextComponentContentProps extends MediaTextComponentImageProps, MediaTextComponentButtonProps {
    imageAlt?: string;
    mediaUrl?: string;
    mediaAlignment?: 'left' | 'right';
    buttonText?: string;
    headline?: string;
    tagline?: string;
    content: BlocksContent;
    imageOrientation?: 'horizontal' | 'vertical';
    contentAlignment?: 'start' | 'center';
}
export interface MediaTextComponentBodyProps {
    children: ReactNode;
}
export interface MediaTextComponentImageProps {
    alt: string;
    mediaUrl?: string;
    mediaType?: 'image' | 'video';
    videoThumbnail?: string;
    imageOrientation?: 'horizontal' | 'vertical';
    mediaAlignment?: 'left' | 'right';
}
export interface MediaTextComponentButtonProps {
    labelPrimary?: string;
    onClickPrimary?: () => void;
    urlPrimary?: string;
    iconPrimary?: FunctionalIconNames;
    iconPrimaryPosition?: 'left' | 'right';
}
//# sourceMappingURL=media-text-component.interface.d.ts.map