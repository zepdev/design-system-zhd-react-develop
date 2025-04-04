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
  urlPrimary,
  iconPrimaryPosition,
  iconPrimary,
  mediaUrl,
  mediaType,
  imageOrientation,
  contentAlignment,
}: MediaTextComponentContentProps) => {
  return (
    <MediaTextContext.Provider value={{ imageAlignment: mediaAlignment }}>
      <div
        className={clsx(
          'zep-container',
          'zep-max-w-[1920px]',
          'zep-relative',
          'zep-flex',
          'zep-flex-col',
          mediaAlignment === 'left' ? 'md:zep-flex-row' : 'md:zep-flex-row-reverse',
          contentAlignment === 'center' ? 'zep-items-center' : 'zep-items-start',
        )}
        data-testid="zep-mediaText"
      >
        <MediaTextImage mediaUrl={mediaUrl} alt={alt} mediaType={mediaType} imageOrientation={imageOrientation} />
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
            <h3
              data-testid="zep-MediaText-headline"
              className={'zep-typography-headlineMD-fluid-cqi zep-mb-1 zep-break-all'}
            >
              {headline}
            </h3>
          </div>
          <RichText content={content} />
          {labelPrimary && (
            <a className="zep-max-w-max" href={urlPrimary}>
              <Button
                icon={iconPrimary}
                iconPosition={iconPrimaryPosition}
                // onClick={onClickPrimary}
                label={labelPrimary}
                variant={ZsdButtonVariant.SecondaryDark}
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
}: MediaTextComponentImageProps) => {
  const imageHeightClass =
    mediaType === 'image' && imageOrientation === 'vertical' ? ' zep-aspect-[4/5]' : 'zep-aspect-[16/9]';

  return (
    <div data-testid="zep-mediaText-image" className={clsx('zep-w-full')}>
      <div className={`${imageHeightClass} zep-h-auto zep-mx-auto`}>
        {mediaType === 'image' ? (
          <img src={mediaUrl} alt={alt} className={`zep-w-full zep-h-full zep-object-cover`} />
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
        zep-p-1
        sm:zep-p-2.5
        md:zep-p-2
        lg:zep-p-4
        md:zep-w-full
        md:zep-min-w-[499px]
        xl:zep-min-w-[700px]
        zep-flex
        zep-flex-col
        zep-gap-1.5`,
      )}
      data-testid="zep-mediaText-body"
    >
      {children}
    </div>
  );
};

export { MediaTextComponent };
