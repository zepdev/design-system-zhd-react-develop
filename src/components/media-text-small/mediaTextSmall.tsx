import { clsx } from 'clsx';
import { FC } from 'react';
import { RichText } from '../rich-text';
import { MediaTextSmallProps } from './media-text-small.interface';
export const MediaTextSmall: FC<MediaTextSmallProps> = ({ headline, content = [], imageSrc, imageAlt }) => {
  return (
    <div className={clsx('zep-min-w-[280px]')}>
      <img data-testid="media-text-small-image" src={imageSrc} alt={imageAlt} />
      <div className={clsx('zep-p-0.75', 'sm:zep-p-1', 'md:zep-p-1.5')}>
        <h2 data-testid="media-text-small-headline" className="zep-typography-headlineSM-fluid-cqi zep-mb-1">
          {headline}
        </h2>
        <p data-testid="media-text-small-description" className="zep-mb-1">
        <RichText content={content} />
        </p>
      </div>
    </div>
  );
};
