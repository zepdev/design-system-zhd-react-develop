import { FC } from 'react';
import { AnchorNavigationCard } from '../anchor-navigation-card';
import { HeaderLongComponent } from '../header-long-component';
import { Layout } from '../layout';
import { Scrollbar } from '../scrollbar';
import { AnchorNavigationListProps } from './anchor-navigation-list.interface';

export const AnchorNavigationList: FC<AnchorNavigationListProps> = ({
  navigationCards,
  className = '',
  headline,
  ...headerProps
}: AnchorNavigationListProps) => {
  return (
    <Layout className="zep-flex zep-flex-col zep-gap-2.5 sm:zep-gap-3 md:zep-gap-4">
      {headline && <HeaderLongComponent headline={headline} {...headerProps} />}
      <Scrollbar
        scrollOrientation="horizontal"
        dataTestId="zep-anchor-navigation-list"
        controlId="anchor-navigation-scrollbar"
        className={`zep-flex zep-gap-1 md:zep-gap-1.5 lg:zep-gap-2 zep-w-full ${className}`}
      >
        {navigationCards?.map((card) => <AnchorNavigationCard key={card.headline} {...card} />)}
      </Scrollbar>
    </Layout>
  );
};
