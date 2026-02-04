import { Link, LinkMode, LinkTarget } from '@zepdev/design-system-component-library-react';
import { clsx } from 'clsx';
import React from 'react';
import { getUrlWithTrailingSlash } from '../../utils/getUrlWithTrailingSlash';
import { CardMediaProps } from './cardmedia.interface';

export const CardMedia: React.FC<CardMediaProps> = ({
  imageSrc,
  imageAlt,
  imageOrientation = 'horizontal',
  className,
  headline,
  linkSrc,
  linkText,
  description,
  linkType = 'internal-link',
  icon,
  iconPlacement,
  fullWidth = false,
}: CardMediaProps) => {
  const getImageClass = () => {
    if (imageOrientation === 'vertical') {
      return 'zep-aspect-[100/141]';
    }
    // horizontal orientation
    if (fullWidth) {
      // Use aspect ratio in grid for consistent scaling
      return 'zep-aspect-[16/9]';
    }
    // Fixed heights for pattern use
    return 'zep-h-[116px] md:zep-h-[132px] lg:zep-h-[148px]';
  };

  return (
    <div
      className={clsx(
        'zep-px-1.5',
        'md:zep-px-2',
        'lg:zep-px-3',
        'zep-py-2',
        'xl:zep-py-3',
        'zep-flex',
        'zep-flex-col',
        'zep-content-start',
        'zep-gap-2',
        'zep-flex-grow',
        'zep-bg-greyscale-0',
        fullWidth
          ? 'zep-w-full'
          : [
              'zep-min-w-[280px]',
              'md:zep-max-w-[330px]',
              'md:zep-min-w-[300px]',
              'lg:zep-max-w-[538px]',
              'lg:zep-min-w-[525px]',
            ],
        fullWidth && 'zep-h-full',
        className,
      )}
      data-testid="card-media"
    >
      <img
        loading="lazy"
        src={imageSrc}
        alt={imageAlt}
        className={clsx(
          getImageClass(),
          'zep-w-full',
          'zep-object-cover',
          !fullWidth && ['lg:zep-max-w-[377px]', 'lg:zep-mx-2'],
        )}
        data-testid="card-media-image"
      />
      <div className={clsx('zep-flex', 'zep-flex-col', 'zep-gap-1', 'zep-items-start', fullWidth && 'zep-flex-grow')}>
        <h4
          className={clsx(
            'zep-typography-headlineXS-fluid-cqi',
            'zep-hyphens-auto',
            'zep-break-normal',
            'zep-text-typography-dark-100',
          )}
          data-testid="card-media-headline"
        >
          {headline}
        </h4>
        <p
          className={clsx(
            'zep-typography-bodyText',
            'zep-hyphens-auto',
            'zep-break-normal',
            'zep-text-typography-dark-100',
          )}
          data-testid="card-media-description"
        >
          {description}
        </p>
      </div>
      <Link
        target={linkSrc?.startsWith('http') ? LinkTarget.Blank : LinkTarget.Self}
        data-testid="card-media-link"
        label={linkText}
        href={getUrlWithTrailingSlash(linkSrc)}
        mode={LinkMode.Standalone}
        className={clsx('zep-text-typography-dark-100 zep-self-start', fullWidth && 'zep-mt-auto')}
        download={linkType === 'download'}
        icon={icon !== 'none' ? icon : undefined}
        iconPlacement={iconPlacement}
        rel="noopener noreferrer"
      />
    </div>
  );
};
