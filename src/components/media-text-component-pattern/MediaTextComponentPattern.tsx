import clsx from 'clsx';
import { FC } from 'react';
import { HeaderShortComponent } from '../header-short-component';
import { Layout } from '../layout';
import { MediaTextComponent } from '@/components/media-text-component';
import { MediaTextComponentPatternProps } from './media-text-component-pattern.interface';

export const MediaTextComponentPattern: FC<MediaTextComponentPatternProps> = ({ id, cards, ...headerShortProps }) => {
  return (
    <Layout
      id={id}
      className={clsx('zep-flex', 'zep-flex-col', 'md:zep-gap-4', 'sm:zep-gap-3', 'zep-gap-2.5', 'zep-overflow-hidden')}
    >
      {headerShortProps?.headline && (
        <HeaderShortComponent {...headerShortProps} className="md:zep-w-[35%] zep-w-full" />
      )}
      <div
        className={clsx('zep-flex', 'zep-flex-col', 'zep-gap-2.5', 'sm:zep-gap-3', 'md:zep-gap-5', 'xl:zep-gap-7.5')}
        data-testid="zep-media-text"
      >
        {cards.map((card, index) => (
          <MediaTextComponent key={card.headline} {...card} mediaAlignment={index % 2 === 0 ? 'left' : 'right'} />
        ))}
      </div>
    </Layout>
  );
};
