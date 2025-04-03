import { Link, LinkMode } from '@zepdev/design-system-component-library-react';
import clsx from 'clsx';
import { FC } from 'react';
import { CardProps } from './card.interface';

export const Card: FC<CardProps> = ({ imageSrc, imageAlt, tagline, title, description, linkLabel = '' }: CardProps) => {
  return (
    <button
      className={clsx(
        'zep-flex',
        'zep-group',
        'zep-flex-col',
        'zep-border-1',
        'zep-zep-focus-visible:zep-zep-outline-none',
        'zep-border-greyscale-400',
        'hover:zep-border-primary-hover',
        'zep-max-w-[600px]',
      )}
      data-testid="card-component"
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className={clsx('zep-aspect-16.9', 'zep-w-full', 'zep-object-cover')}
        data-testid="card-component-image"
      />
      <div className={clsx('zep-flex', 'zep-flex-col', 'zep-p-1.5', 'md:zep-p-2.5', 'md:zep-p-2.5', 'zep-items-start')}>
        <p
          className={clsx('zep-typography-tagline', 'zep-mb-0.25', 'zep-break-all', 'zep-text-typography-dark-70/70')}
          data-testid="card-component-tagline"
        >
          {tagline}
        </p>
        <h4
          data-testid="card-component-title"
          className="zep-typography-headlineXS-fluid-cqi zep-hyphens-auto zep-mb-0.5 zep-text-typography-dark-100 group-hover:zep-underline zep-break-normal "
        >
          {title}
        </h4>
        <p
          data-testid="card-component-description"
          className={clsx(
            'zep-typography-bodyText',
            'zep-break-words',
            'zep-mb-1.5',
            'zep-text-typography-dark-100, zep-text-left',
          )}
        >
          {description}
        </p>
        <Link
          className="zep-text-primary-default"
          data-testid="card-component-link"
          icon="arrow-long-right"
          iconPlacement="after"
          label={linkLabel}
          mode={LinkMode.Standalone}
        />
      </div>
    </button>
  );
};
