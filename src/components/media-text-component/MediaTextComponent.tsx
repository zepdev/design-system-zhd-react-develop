import clsx from 'clsx';
import { createContext, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { RichText } from '../rich-text';
import ResponsivePlayer from '../video/ResponsivePlayer';
import { Button, ZsdButtonVariant } from '../zsd-button';
import {
  MediaTextComponentBodyProps,
  MediaTextComponentContentProps,
  MediaTextComponentImageProps,
} from './media-text-component.interface';

const MediaTextContext = createContext({
  imageAlignment: 'left',
});
export const useMediaTextContext = () => useContext(MediaTextContext);

const MediaTextComponent = ({
  mediaAlignment = 'left',
  headline = '',
  tagline = '',
  content,
  labelPrimary,
  alt,
  type,
  iconPrimaryPosition,
  buttonAction,
  buttonUrl,
  iconPrimary,
  mediaUrl,
  mediaType,
  imageOrientation,
  contentAlignment,
  imageStretch,
}: MediaTextComponentContentProps) => {
  return (
    <MediaTextContext.Provider value={{ imageAlignment: mediaAlignment }}>
      <div
        className={clsx(
          'zep-container',
          'zep-max-w-[1728px]',
          'zep-relative',
          'zep-flex',
          'zep-flex-col',
          'md:zep-flex-row',
          'zep-gap-1.5',
          'md:zep-gap-2.5',
          'xl:zep-gap-5',
          mediaAlignment === 'left' ? 'md:zep-flex-row' : 'md:zep-flex-row-reverse',
          contentAlignment === 'center' ? 'zep-items-center' : 'zep-items-start',
        )}
        data-testid="zep-mediaText"
      >
        <MediaTextImage
          mediaUrl={mediaUrl}
          alt={alt}
          mediaType={mediaType}
          imageOrientation={imageOrientation}
          imageStretch={imageStretch}
        />
        <MediaTextBody>
          <div className={clsx('zep-flex zep-flex-col zep-gap-0.5', { 'zep-hidden': !tagline && !headline })}>
            <p
              data-testid="zep-MediaText-tagline"
              className={twMerge(
                'zep-typography-tagline',
                `zep-hyphens-auto zep-break-normal ${!tagline && 'zep-hidden'}`,
              )}
            >
              {tagline}
            </p>
            <h3 data-testid="zep-MediaText-headline" className={'zep-typography-headlineMD-fluid-cqi zep-mb-1'}>
              {headline}
            </h3>
          </div>
          <RichText content={content} />
          {labelPrimary && buttonUrl && (
            <a
              className="zep-max-w-max"
              href={buttonUrl}
              target={buttonAction === 'open-internal-link' ? '_self' : '_blank'}
              download={buttonAction === 'download-file'}
              rel="noreferrer"
            >
              <Button
                icon={iconPrimary}
                iconPosition={iconPrimaryPosition}
                label={labelPrimary}
                variant={type === 'primary-dark' ? ZsdButtonVariant.PrimaryDark : ZsdButtonVariant.SecondaryDark}
              />
            </a>
          )}
        </MediaTextBody>
      </div>
    </MediaTextContext.Provider>
  );
};

const MediaTextImage = ({
  alt,
  mediaType,
  mediaUrl,
  videoThumbnail,
  imageOrientation,
  imageStretch,
}: MediaTextComponentImageProps) => {
  const imageHeightClass =
    mediaType === 'image' && imageOrientation === 'vertical'
      ? 'zep-w-full sm:zep-max-h-[500] sm:zep-max-w-[364px]  md:zep-w-[348px] lg:zep-max-h-[595px] lg:zep-w-auto lg:zep-max-w-[740px] xl:zep-max-w-[740px] zep-aspect-[4/5]'
      : 'zep-aspect-[16/9]';

  return (
    <div data-testid="zep-mediaText-image" className={clsx('zep-w-full')}>
      <div className={`${imageHeightClass} zep-h-full zep-mx-auto`}>
        {mediaType === 'image' ? (
          <img
            loading="lazy"
            src={mediaUrl}
            alt={alt}
            className={`zep-w-full zep-h-full zep-object-top ${imageStretch === 'cover' ? 'zep-object-cover' : 'zep-object-contain'}`}
          />
        ) : (
          <ResponsivePlayer url={mediaUrl || ''} thumbnail={videoThumbnail || ''} thumbnailAlt="alt" />
        )}
      </div>
    </div>
  );
};

const MediaTextBody = ({ children }: MediaTextComponentBodyProps) => {
  return (
    <div
      className={twMerge(
        `
        zep-relative
        zep-h-[max-content]
        zep-z-10
        md:zep-w-full
        md:zep-min-w-[499px]
        xl:zep-min-w-[700px]
        zep-flex
        zep-flex-col
        zep-gap-1`,
      )}
      data-testid="zep-mediaText-body"
    >
      {children}
    </div>
  );
};

export { MediaTextComponent };
