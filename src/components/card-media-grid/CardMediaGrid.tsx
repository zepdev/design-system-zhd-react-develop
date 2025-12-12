import clsx from 'clsx';
import React from 'react';
import { CardMedia } from '../card-media-component';
import { HeaderLongComponent } from '../header-long-component';
import { Layout } from '../layout';
import { CardMediaGridProps } from './CardMediaGrid.interface';

export const CardMediaGrid: React.FC<CardMediaGridProps> = ({
  cards,
  imageOrientation = 'horizontal',
  id,
  ...headerLongComponentProps
}) => {
  return (
    <Layout
      id={id}
      wrapperClassname="zep-bg-background-medium"
      className={clsx(
        'zep-flex',
        'zep-flex-col',
        'zep-justify-start',
        'lg:zep-gap-4',
        'sm:zep-gap-3',
        'zep-gap-2',
        'zep-py-3',
        'sm:zep-py-4',
        'md:zep-py-5',
        'zep-items-start',
      )}
    >
      <HeaderLongComponent {...headerLongComponentProps} />
      <div
        data-testid="cards-container"
        className={clsx(
          'zep-grid',
          'zep-w-full',
          'zep-gap-[16px]',
          'sm:zep-gap-[20px]',
          'lg:zep-gap-[24px]',
          'zep-grid-cols-1',
          'sm:zep-grid-cols-2',
          'lg:zep-grid-cols-3',
          'xl:zep-grid-cols-4',
        )}
      >
        {cards.map((card) => (
          <CardMedia
            key={card.headline}
            {...card}
            imageOrientation={imageOrientation}
            fullWidth
          />
        ))}
      </div>
    </Layout>
  );
};
