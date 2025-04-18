import { clsx } from 'clsx';
import React from 'react';
import { Card } from '../card/Card';
import { HeaderLongComponent } from '../header-long-component';
import { Layout } from '../layout';
import { CardPatternProps } from './CardPattern.interface';

export const CardPattern: React.FC<CardPatternProps> = ({ items, headline, id, ...headerProps }: CardPatternProps) => {
  const cardLists = items.length > 12 ? items.slice(0, 12) : items;
  return (
    <Layout id={id}>
      {headline && (
        <div className="zep-mb-2.5 sm:zep-mb-3 md:zep-mb-4 xl:zep-mb-5">
          <HeaderLongComponent headline={headline} {...headerProps} />
        </div>
      )}
      <div
        data-testid="card-pattern-items"
        className={clsx('zep-grid', 'zep-gap-1', {
          'xl:zep-grid-cols-3': [3, 5, 6, 9].includes(cardLists.length),
          'xl:zep-grid-cols-4': [4, 7, 8].includes(items.length) || items.length >= 10,
          'lg:zep-grid-cols-2 xl:zep-flex': items.length <= 2,
          'lg:zep-grid-cols-3': items.length >= 3,
          'sm:zep-grid-cols-2': true,
        })}
      >
        {items?.map((item) => <Card key={item.title} {...item} gtmHeadline={headline} gtmid={id} />)}
      </div>
    </Layout>
  );
};
