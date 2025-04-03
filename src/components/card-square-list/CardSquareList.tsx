import { Scrollbar } from '@/components/scrollbar';
import { clsx } from 'clsx';
import React from 'react';
import { CardSquare } from '../card-square';
import { HeaderLongComponent } from '../header-long-component';
import { Layout } from '../layout';
import { CardSquareListProps } from './card-square-list.interface';

export const CardSquareList: React.FC<CardSquareListProps> = ({
  items,
  variant,
  headline,
  id,
  ...headerProps
}: CardSquareListProps) => {
  return (
    <Layout id={id} className={clsx('zep-flex', 'zep-flex-col', 'md:zep-gap-4', 'sm:zep-gap-3', 'zep-gap-2.5')}>
      {headline && <HeaderLongComponent headline={headline} {...headerProps} variant={variant} />}
      <Scrollbar
        scrollOrientation="horizontal"
        dataTestId="zep-card-square-list"
        className={clsx(
          'zep-flex',
          'lg:zep-overflow-hidden',
          'lg:zep-grid',
          'lg:zep-grid-flow-row',
          'zep-gap-1',
          'md:zep-gap-1.5',
          'xl:zep-gap-2',
          {
            'lg:zep-grid-cols-2 xl:zep-flex': items.length <= 2,
            'lg:zep-grid-cols-3': items.length >= 3,
            'xl:zep-grid-cols-3': [3, 5, 6, 9].includes(items.length),
            'xl:zep-grid-cols-4': [4, 7, 8].includes(items.length) || items.length >= 10,
          },
        )}
        controlId="zep-card-square-scrollbar"
      >
        {items?.map((item) => (
          <CardSquare key={item.headline} {...item} variant={variant} gtmHeadline={headline} gtmId={id} />
        ))}
      </Scrollbar>
    </Layout>
  );
};
