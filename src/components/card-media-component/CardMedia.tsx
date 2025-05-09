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
}: CardMediaProps) => {
  const imageHeightClass =
    imageOrientation === 'horizontal' ? 'zep-h-[116px] md:zep-h-[132px] lg:zep-h-[148px]' : 'zep-aspect-[100/141]';

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
        'zep-min-w-[280px]',
        'md:zep-max-w-[330px]',
        'md:zep-min-w-[300px]',
        'lg:zep-max-w-[538px]',
        'lg:zep-min-w-[525px]',
        className,
      )}
      data-testid="card-media"
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className={clsx(imageHeightClass, 'zep-w-full', 'lg:zep-max-w-[377px]', 'lg:zep-mx-2', 'zep-object-cover')}
        data-testid="card-media-image"
      />
      <div className={clsx('zep-flex', 'zep-flex-col', 'zep-gap-1', 'zep-items-start')}>
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
        className={'zep-text-typography-dark-100 zep-self-start'}
        download={linkType === 'download'}
        icon={icon}
        iconPlacement={iconPlacement}
      />
    </div>
  );
};
