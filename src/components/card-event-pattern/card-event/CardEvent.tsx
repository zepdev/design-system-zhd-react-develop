import { Link, LinkMode, LinkTarget } from '@zepdev/design-system-component-library-react';
import { clsx } from 'clsx';
import React from 'react';
import { GlobalVariants } from '../../../interfaces/global-variants';
import { textColor } from '../../../utils/commonCSS';
import { CardEventProps } from './card-event.interface';
import { getUrlWithTrailingSlash } from '../../../utils/getUrlWithTrailingSlash';

export const CardEvent: React.FC<CardEventProps> = ({
  imageSrc,
  imageAlt,
  date,
  location,
  headline,
  linkLabel,
  linkSrc,
  description,
  variant = GlobalVariants.Zps,
}: CardEventProps) => {
  const truncatedDescription = description.length > 250 ? description.slice(0, 250) + '...' : description;

  return (
    <a href={getUrlWithTrailingSlash(linkSrc)} target="_self">
      <div
        data-testid="zep-card-event"
        className={clsx(
          'zep-w-full',
          'md:zep-flex',
          'zep-px-1',
          'zep-py-1.5',
          'sm:zep-px-1.5',
          'sm:zep-py-2.5',
          'md:zep-px-2',
          'xl:zep-p-3',
          'md:zep-gap-2',
          'xl:zep-gap-3',
        )}
      >
        <div
          style={{ height: 'fit-content' }}
          className="zep-block md:zep-flex md:zep-flex-shrink-0 md:zep-h-auto md:zep-w-1/5 zep-mb-1.5 sm:zep-mb-2 md:zep-mb-[0] zep-aspect-3.4"
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className={clsx('zep-w-full')}
            style={{ height: 'min-intrinsic', objectFit: 'cover' }}
            data-testid="zep-card-event-image"
          />
        </div>
        <div className={clsx('zep-block', 'md:zep-flex', 'md:zep-flex-col', 'zep-max-w-[944px]', 'md:zep-w-4/5')}>
          <h2
            className={clsx(
              'zep-typography-headlineSM-fluid-cqi',
              'zep-mb-1',
              'sm:zep-mb-1.5',
              'xl:zep-mb-3',
             'zep-hyphens-auto',
            'zep-break-normal',
              textColor[variant],
            )}
            data-testid="zep-card-event-headline"
          >
            {headline}
          </h2>

          <div
            className={clsx(
              textColor[variant],
              'zep-inline-flex',
              'zep-mb-1',
              'zep-items-center',
              'zep-typography-headlineXS-fluid-cqi',
            )}
          >
            <span>{date}</span>
            <span className="zep-ml-[6px] zep-mr-[8px] zep--mt-[4px]">|</span>
            <span>{location}</span>
          </div>
        <p
          className={clsx('zep-typography-bodyText', 'zep-mb-2', 'zep-hyphens-auto' ,'zep-break-normal', textColor[variant])}
          data-testid="zep-card-event-description"
        >
          {truncatedDescription}
        </p>
        <Link
          target={linkSrc?.startsWith('http') ? LinkTarget.Blank : LinkTarget.Self}
          data-testid="zep-event-link"
          label={linkLabel || ''}
          iconPlacement="after"
          icon="arrow-long-right"
          href={getUrlWithTrailingSlash(linkSrc)}
          mode={LinkMode.Standalone}
          className={clsx(textColor[variant], 'zep-inline-block', 'zep-w-fit')}
        />
      </div>
      </div>
    </a>
  );
};
