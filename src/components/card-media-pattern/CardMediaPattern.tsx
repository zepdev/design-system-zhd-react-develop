import clsx from 'clsx';
import React from 'react';
import { CardMedia } from '../card-media-component';
import { HeaderLongComponent } from '../header-long-component';
import { Layout } from '../layout';
import { Scrollbar } from '../scrollbar';
import { CardMediaPatternProps } from './CardMediaPattern.interface';

export const CardMediaPattern: React.FC<CardMediaPatternProps> = ({
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
      <Scrollbar
        scrollOrientation="horizontal"
        dataTestId="cards-container"
        controlId="card-media-scrollbar"
        className={clsx('zep-flex', 'zep-gap-1', 'sm:zep-gap-1.5', 'lg:zep-gap-2')}
      >
        {cards.map((card) => (
          <CardMedia key={card.headline} {...card} imageOrientation={imageOrientation} />
        ))}
      </Scrollbar>
    </Layout>
  );
};
