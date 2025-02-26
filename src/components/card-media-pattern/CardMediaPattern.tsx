import { Context, createContext, FC, useContext } from 'react';
import clsx from 'clsx';
import { CardMedia } from './card-media-component';
import { CardMediaPatternProps, CardsSectionProps } from './CardMediaPattern.interface';
import { HeaderLongComponent } from '../header-long-component';
import { AnchorNavigationList } from '../anchor-navigation-list';
import { Scrollbar } from '../scrollbar';

const CardMediaContext: Context<{ imageOrientation?: 'horizontal' | 'vertical' }> = createContext({});

const useCardMediaContext = () => useContext(CardMediaContext);

const CardsSection: FC<CardsSectionProps> = ({ cards, scrollToIdLink, linkLabel }) => {
  const { imageOrientation } = useCardMediaContext();
  const cardsList = cards.map((card) => ({ ...card, imageOrientation }));
  return (
    <div id={scrollToIdLink} className="zep-flex-col zep-flex sm:zep-gap-2.5 zep-gap-2">
      <h4 className="zep-typography-headlineSM-fluid-cqi zep-text-typography-dark-100 zep-text-left">{linkLabel}</h4>
      <Scrollbar
        className={clsx('zep-w-full', 'zep-overflow-x-auto')}
        dataTestId="cards-container"
        controlId={`cards-section-${scrollToIdLink}`}
        scrollOrientation="horizontal"
      >
        <div className={clsx('zep-flex', 'zep-gap-1', 'sm:zep-gap-1.5', 'xl:zep-gap-2','zep-w-fit')}>
          {cardsList.map((card) => (
            <CardMedia {...card} />
          ))}
        </div>
      </Scrollbar>
    </div>
  );
};

export const CardMediaPattern: FC<CardMediaPatternProps> = ({
  className,
  tabs,
  imageOrientation = 'horizontal',
  ...headerLongComponentProps
}) => {
  const anchorTabs = tabs.map(({ cards, ...rest }) => rest);
  return (
    <CardMediaContext.Provider value={{ imageOrientation }}>
      <div
        className={clsx(
          'zep-bg-greyscale-0',
          'zep-flex',
          'zep-flex-col',
          'xl:zep-gap-5',
          'md:zep-gap-4',
          'sm:zep-gap-3',
          'zep-gap-2.5',
          'zep-items-start',
          'zep-w-full',
          'zep-max-w-[1920px]',
          'zep-py-3',
          'zep-pl-1',
          'sm:zep-px-2.5',
          'sm:zep-py-4',
          'md:zep-px-[65px]',
          'md:zep-py-[80px]',
          'xl:zep-px-[121px]',
          'xl:zep-py-[120px]',
        )}
      >
        <HeaderLongComponent {...headerLongComponentProps} />
        <div className="zep-flex zep-w-full zep-flex-col zep-gap-3.5">
          <div className="zep-sticky zep-top-[0] zep-z-[1000] zep-bg-greyscale-0 zep-w-full">
            <AnchorNavigationList tabs={anchorTabs} />
          </div>
          <div className="zep-flex zep-flex-col xl:zep-gap-5 md:zep-gap-4 sm:zep-gap-3 zep-gap-2">
            {tabs.map((tab) => (
              <CardsSection {...tab} />
            ))}
          </div>
        </div>
      </div>
    </CardMediaContext.Provider>
  );
};
