import { Pagination } from '@zepdev/design-system-component-library-react';
import { FC, useState } from 'react';
import { HeaderLongComponent } from '../header-long-component';
import { Layout } from '../layout';
import { CardEventsZsdProps } from './CardEventsZsd.interface';
import { CardEventZsd } from './card-event';

export const CardEventsZsd: FC<CardEventsZsdProps> = ({ cards, ...headerProps }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const startIndex = (currentPage - 1) * 10;
  const endIndex = startIndex + 10;

  return (
    <Layout
      className="zep-flex zep-flex-col xl:zep-gap-5 md:zep-gap-4 sm:zep-gap-3 zep-gap-2.5"
      testId="zep-card-events"
    >
      <HeaderLongComponent {...headerProps} />
      <div className="zep-flex zep-flex-col md:zep-gap-2 zep-gap-1.5">
        {cards.slice(startIndex, endIndex).map((card) => (
          <CardEventZsd {...card} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalElements={cards.length}
        setCurrentPage={setCurrentPage}
        itemsPerPage={10}
      />
    </Layout>
  );
};
