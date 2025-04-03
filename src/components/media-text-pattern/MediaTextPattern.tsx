import clsx from 'clsx';
import { FC } from 'react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { HeaderShortComponent } from '../header-short-component';
import { Layout } from '../layout';
import { MediaText } from '../media-text';
import { MediaTextPatternProps } from './MediaTextPattern.interface';

export const MediaTextPattern: FC<MediaTextPatternProps> = ({
  cards,
  variant = GlobalVariants.Zps,
  ...headerShortProps
}) => {
  return (
    <Layout
      className={clsx(
        'zep-flex',
        'md:zep-max-w-[1564px]',
        'xl:zep-max-w-[1920px]',
        'zep-flex-col',
        'md:zep-gap-4',
        'sm:zep-gap-3',
        'zep-gap-2.5',
        'md:zep-px-[120px]',
        'lg:zep-px-[240px]',
        'zep-overflow-hidden',
      )}
    >
      {headerShortProps?.headline && (
        <HeaderShortComponent {...headerShortProps} variant={variant} className="md:zep-w-[35%] zep-w-full" />
      )}
      <div
        className={clsx('zep-flex', 'zep-flex-col', 'zep-gap-2.5', 'sm:zep-gap-3', 'md:zep-gap-5', 'xl:zep-gap-7.5')}
        data-testid="zep-media-text"
      >
        {cards.map((card, index) => (
          <MediaText
            key={card.headline}
            {...card}
            variant={variant}
            imageAlignment={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </Layout>
  );
};
