import React from 'react';
import { USP } from '../USP/Usp';
import { HeaderShortComponent } from '../header-short-component';
import { Layout } from '../layout';
import { Scrollbar } from '../scrollbar';
import { USPListProps } from './usp-list.interface';

export const USPList: React.FC<USPListProps> = ({ uspCards, headerTitle, tagline, id }: USPListProps) => {
  return (
    <Layout
      id={id}
      wrapperClassname={'zep-bg-greyscale-200'}
      className={'zep-flex zep-flex-col zep-gap-2.5 sm:zep-gap-3 md:zep-gap-4 zep-py-3 sm:zep-py-4 md:zep-py-5'}
    >
      <HeaderShortComponent className="zep-p-[0px] zep-w-[40%]" headline={headerTitle} tagline={tagline} />
      <Scrollbar
        scrollOrientation="horizontal"
        theme="light"
        controlId="USP-list-scrollbar"
        dataTestId="zep-usp-list"
        className="zep-flex zep-w-full zep-gap-1 md:zep-gap-1.5 lg:zep-gap-3.5"
      >
        {uspCards?.map((card, index) => (
          <USP
            key={card.headline}
            count={card?.count || `${index + 1}.`}
            headline={card.headline}
            description={card.description}
            iconName={card.iconName}
          />
        ))}
      </Scrollbar>
    </Layout>
  );
};
