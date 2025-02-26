import { List } from '@zepdev/design-system-component-library-react';
import { clsx } from 'clsx';
import { FC } from 'react';
import { MediaTextSmallProps } from './media-text-small.interface';
export const MediaTextSmall: FC<MediaTextSmallProps> = ({
  headline,
  orderedLists,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div
      className={clsx(
        'zep-min-w-[280px]'
      )}
    >
      <img data-testid="media-text-small-image" src={imageSrc} alt={imageAlt} />
      <div className={clsx('zep-p-0.75', 'sm:zep-p-1', 'md:zep-p-1.5')}>
        <h2 data-testid="media-text-small-headline" className="zep-typography-headlineSM-fluid-cqi zep-mb-1">
          {headline}
        </h2>
        <p data-testid="media-text-small-description" className="zep-mb-1">
          {description}
        </p>
        <List data-testid="media-text-small-list" className="zep-mb-2" type="numeric">
          {orderedLists && orderedLists.map((item, idx) => <List.Item key={idx}>{item}</List.Item>)}
        </List>
      </div>
    </div>
  );
};
