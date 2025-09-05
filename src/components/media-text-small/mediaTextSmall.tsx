import { clsx } from 'clsx';
import { FC } from 'react';
import { RichText } from '../rich-text';
import { MediaTextSmallProps } from './media-text-small.interface';
export const MediaTextSmall: FC<MediaTextSmallProps> = ({ headline, description = [], imageSrc, imageAlt }) => {
  return (
    <div className={clsx('zep-min-w-[280px]')}>
      <img loading="lazy" data-testid="media-text-small-image" className='zep-aspect-[16/9] zep-w-full zep-object-cover' src={imageSrc} alt={imageAlt} />
      <div className={clsx('zep-p-0.75', 'sm:zep-p-1', 'md:zep-p-1.5')}>
        <h2 data-testid="media-text-small-headline" className="zep-typography-headlineSM-fluid-cqi zep-mb-1">
          {headline}
        </h2>
        <div data-testid="media-text-small-description" className="zep-mb-1">
          <RichText content={description} />
        </div>
      </div>
    </div>
  );
};
