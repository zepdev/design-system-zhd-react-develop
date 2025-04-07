import { clsx } from 'clsx';
import { HeaderLongComponent } from '../header-long-component';
import { Layout } from '../layout';
import { MediaTextSmall } from '../media-text-small/mediaTextSmall';
import { MediaTextSmallPatternProps } from './media-text-small-pattern.interfce';

export const MediaTextSmallPattern: React.FC<MediaTextSmallPatternProps> = ({ items, id, headline, ...headerProps }) => {
  const mediaTextLists = items.length > 12 ? items.slice(0, 12) : items;
  return (
    <Layout
      id={id}
      className={clsx('zep-flex', 'zep-flex-col', 'md:zep-gap-4', 'sm:zep-gap-3', 'zep-gap-2.5')}
    >
      <div  data-testid="media-text-pattern">
        <div
          data-testid="media-text-small-pattern-headline"
          className="zep-mb-2.5 sm:zep-mb-3 md:zep-mb-4 xl:zep-mb-5 zep-max-w-[952px]"
        >
          {headline && <HeaderLongComponent headline={headline} {...headerProps} />}
        </div>
        <div
          data-testid="media-text-small-pattern-items"
          className={clsx('zep-grid', 'zep-gap-1', 'md:zep-gap-1.5', 'xl:zep-gap-2', {
            'xl:zep-grid-cols-3': [2, 3, 6, 9].includes(mediaTextLists.length),
            'xl:zep-grid-cols-4': [4, 5, 7, 8, 10, 11, 12].includes(mediaTextLists.length),
            'md:zep-grid-cols-2': [0, 1, 2, 4].includes(mediaTextLists.length),
            'md:zep-grid-cols-3': [3, 5, 6, 7, 8, 9, 10, 11, 12].includes(mediaTextLists.length),
            'sm:zep-grid-cols-2': true,
          })}
        >
          {items.map((item, index) => (
            <MediaTextSmall key={index} {...item} />
          ))}
        </div>
      </div>
    </Layout>
  );
};
