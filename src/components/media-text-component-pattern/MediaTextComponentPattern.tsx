import { HeaderLongComponent } from '@/components/header-long-component';
import { MediaTextComponent } from '@/components/media-text-component';
import clsx from 'clsx';
import { FC } from 'react';
import { Layout } from '../layout';
import { MediaTextComponentPatternProps } from './media-text-component-pattern.interface';

export const MediaTextComponentPattern: FC<MediaTextComponentPatternProps> = ({ id, cards, startingPosition = 'left', ...headerLongProps }) => {
  const mediaAlignLeft = startingPosition === 'left';
  return (
    <Layout
      id={id}
      className={clsx('zep-flex', 'zep-flex-col', 'md:zep-gap-4', 'sm:zep-gap-3', 'zep-gap-2.5', 'zep-overflow-hidden')}
    >
      {headerLongProps?.headline && <HeaderLongComponent {...headerLongProps} className="md:zep-w-[35%] zep-w-full" />}
      <div
        className={clsx('zep-flex', 'zep-flex-col', 'zep-gap-2.5', 'sm:zep-gap-3', 'md:zep-gap-5', 'xl:zep-gap-7.5')}
        data-testid="zep-media-text"
      >
        {cards.map((card, index) => (
          <MediaTextComponent
            key={card.headline}
            {...card}
            mediaAlignment={(index % 2 === 0 && mediaAlignLeft) || (index % 2 !== 0 && !mediaAlignLeft) ? 'left' : 'right'}
          />
        ))}
      </div>
    </Layout>
  );
};
