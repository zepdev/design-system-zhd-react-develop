import { clsx } from 'clsx';
import { FC } from 'react';
import { LinkMode } from '@zepdev/design-system-component-library-react';
import { Link } from '../../zsd-link';
import { CardMediaProps } from './cardmedia.interface';

export const CardMedia: FC<CardMediaProps> = ({
  imageSrc,
  imageAlt,
  imageOrientation = 'horizontal',
  className,
  headline,
  onDownload,
  linkText,
  description,
}: CardMediaProps) => {
  const imageHeightClass = imageOrientation === 'horizontal' ? 'zep-h-[116px] md:zep-h-[132px] xl:zep-h-[148px]' : 'zep-aspect-[100/141]';

  return (
    <div
      className={clsx(
        'zep-px-1.5',
        'md:zep-px-2',
        'xl:zep-px-3',
        'zep-py-2',
        'xl:zep-py-3',
        'zep-flex',
        'zep-flex-col',
        'zep-gap-2',
        'zep-bg-greyscale-0',
        'zep-min-w-[280px]',
        'md:zep-max-w-[330px]',
        'md:zep-min-w-[300px]',
        'xl:zep-w-[537px]',
        'xl:zep-max-w-[537px]',
        'zep-border-1',
        'zep-border-greyscale-400',
        className,
      )}
      data-testid="card-media"
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className={clsx(
          imageHeightClass,
          'zep-w-full',
          'xl:zep-max-w-[377px]',
          'xl:zep-mx-2',
          'zep-object-cover',
        )}
        data-testid="card-media-image"
      />
      <div className={clsx('zep-flex', 'zep-flex-col', 'zep-gap-1', 'zep-items-start')}>
        <h4
          className={clsx('zep-typography-headlineXS-fluid-cqi', 'zep-break-all', 'zep-text-typography-dark-100, zep-text-left')}
          data-testid="card-media-headline"
        >
          {headline}
        </h4>
        <p
          className={clsx('zep-typography-bodyText', 'zep-break-words', 'zep-text-typography-dark-100, zep-text-left')}
          data-testid="card-media-description"
        >
          {description}
        </p>
      </div>
      <Link data-testid="card-media-link" icon="download" as="button" onClick={onDownload} label={linkText} mode={LinkMode.Standalone} />
    </div>
  );
};
