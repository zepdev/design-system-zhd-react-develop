import React from 'react';
import { clsx } from 'clsx';
import { CardSquare } from './card-square';
import { CardSquareListProps } from './card-square-list.interface';
import { Layout } from '../layout';
import { HeaderLongComponent } from '../header-long-component';
import { Scrollbar } from '../scrollbar';

export const CardSquareList: React.FC<CardSquareListProps> = ({ items, headline, ...headerProps }: CardSquareListProps) => {
  const cardLists = items.length > 12 ? items.slice(0, 12) : items;

  return (
    <Layout className={clsx('zep-flex', 'zep-flex-col', 'md:zep-gap-4', 'sm:zep-gap-3', 'zep-gap-2.5')}>
    {headline && <HeaderLongComponent headline={headline} {...headerProps} />}
    <Scrollbar
      scrollOrientation="horizontal"
      dataTestId="zep-card-square-list"
      className={clsx(
        'zep-flex',
        'md:zep-overflow-hidden',
        'zep-grid',
        'md:zep-grid-flow-row',
        'zep-gap-1',
        'md:zep-gap-1.5',
        'xl:zep-gap-2',
        {
          'xl:zep-grid-cols-2': cardLists.length <= 2,
          'xl:zep-grid-cols-3': [3, 5, 6, 9].includes(cardLists.length),
          'xl:zep-grid-cols-4': [4, 7, 8, 10, 11, 12].includes(cardLists.length),
          'md:zep-grid-cols-2': [0, 1, 2, 4].includes(cardLists.length),
          'md:zep-grid-cols-3': [3, 5, 6, 7, 8, 9, 10, 11, 12].includes(cardLists.length),
          'sm:zep-grid-cols-2': [ 0,1,2,3,4,5, 6, 7, 8, 9, 10, 11, 12].includes(cardLists.length),
        },
      )}
        controlId="zep-card-square-scrollbar"
      >
        {items?.map((item) => (
          <CardSquare key={item.headline} {...item} cardListsLength={items.length} />
        ))}
      </Scrollbar>
    </Layout>
  );
};
