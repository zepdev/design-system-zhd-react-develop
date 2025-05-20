import { FunctionalIconNames, Link, LinkMode, LinkTarget } from '@zepdev/design-system-component-library-react';
import clsx from 'clsx';
import { FC } from 'react';
import { getDataLayer } from '../../utils/getDataLayer';
import { getUrlWithTrailingSlash } from '../../utils/getUrlWithTrailingSlash';
import { CardProps } from './card.interface';

export const Card: FC<CardProps> = ({
  imageSrc,
  imageAlt,
  tagline,
  title,
  description,
  linkLabel = '',
  url,
  icon,
  iconPosition,
  linkType,
  gtmHeadline,
  gtmid,
}: CardProps) => {
  const onClick = () => {
    if (window !== undefined) {
      window.open(getUrlWithTrailingSlash(url), '_self');
    }
  };
  const datalayer = getDataLayer();
  return (
    <div
      onClick={onClick}
      onClickCapture={() => {
        datalayer?.push({
          event: 'interaction_tile',
          link_text: title,
          link_context: gtmHeadline,
          link_section: gtmid,
        });
      }}
      data-testid="card-component"
      className={clsx(
        'zep-flex',
        'zep-group',
        'zep-flex-col',
        'zep-border-1',
        'zep-zep-focus-visible:zep-zep-outline-none',
        'zep-border-greyscale-400',
        'hover:zep-border-primary-hover',
        'zep-cursor-pointer',
        'zep-w-full',
        'zep-max-w-[700px]',
        'zep-min-w-[290px]',
        'sm:zep-min-w-[348px]',
        'lg:zep-min-w-[330px]',
      )}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className={clsx('zep-aspect-[16/9]', 'zep-w-full', 'zep-object-cover')}
        data-testid="card-component-image"
      />
      <div
        className={clsx(
          'zep-flex',
          'zep-h-full',
          'zep-flex-col',
          'zep-p-1',
          'sm:zep-p-1.5',
          'md:zep-p-2.5',
          'zep-items-start',
        )}
      >
        {tagline && (
          <p
            className={clsx('zep-typography-tagline', 'zep-text-left', 'zep-mb-0.25', 'zep-text-typography-dark-70/70')}
            data-testid="card-component-tagline"
          >
            {tagline}
          </p>
        )}
        <a href={getUrlWithTrailingSlash(url)}>
          <h4
            data-testid="card-component-title"
            className={clsx(
              'zep-typography-headlineXS-fluid-cqi zep-hyphens-auto zep-text-left zep-text-typography-dark-100',
              { 'zep-mb-0.5': description },
            )}
          >
            {title}
          </h4>
        </a>
        {description && (
          <p
            data-testid="card-component-description"
            className={clsx(
              'zep-typography-bodyText',
              'zep-flex-grow',
              'zep-break-words',
              'zep-text-typography-dark-100, zep-text-left',
            )}
          >
            {description}
          </p>
        )}
        {url && linkLabel && (
          <Link
            target={linkType === 'external-link' ? LinkTarget.Blank : LinkTarget.Self}
            className="zep-text-primary-default zep-mt-1.5 group-hover:zep-underline"
            data-testid="card-component-link"
            icon={icon !== 'none' && iconPosition !== 'none' ? (icon as FunctionalIconNames) : undefined}
            iconPlacement={iconPosition}
            label={linkLabel}
            mode={LinkMode.Standalone}
            href={getUrlWithTrailingSlash(url)}
          />
        )}
      </div>
    </div>
  );
};
