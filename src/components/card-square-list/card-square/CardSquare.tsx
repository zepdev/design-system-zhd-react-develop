import { FC, useRef } from 'react';
import clsx from 'clsx';
import arrowImg from '../../../../public/assets/big-right-arrow.svg';
import { useContainerDimensions } from '../../../hooks/useContainerDimensions';
import { CardSquareProps } from './card-square.interface';

export const cardSquareCardCva = [
  'zep-flex',
  'zep-justify-between',
  'zep-items-center',
  'zep-absolute',
  'zep-gap-1',
  'group-hover:zep-bg-none',
  'zep-bg-primary-default',
  'group-hover:zep-bg-none',
  'group-hover:zep-bg-primary-hover',
]

const CardSquare: FC<CardSquareProps> = ({
  imageSrc,
  description,
  headline,
  imageAlt,
  cardListsLength = 0,
}) => {
  const componentRef = useRef<HTMLDivElement | null>(null);
  const { width } = useContainerDimensions(componentRef);

  const paddingContainer = {
    'zep-bottom-2 zep-left-2 zep-right-2': width >= 548,
    'zep-bottom-1.5 zep-left-1.5 zep-right-1.5': width < 548 && width > 407,
    'zep-bottom-1 zep-left-1 zep-right-1': width <= 407 && width > 336,
    'zep-bottom-0.75 zep-left-0.75 zep-right-0.75': width <= 336,
  }

  return (
    <div
      className={clsx(
        'zep-relative',
        'zep-group',
        'hover:zep-brightness-90',
        'zep-w-full',
        'zep-min-w-[271px]',
        'zep-aspect-[1/1]',
        'zep-@container',
        'xl:zep-@container-normal',
      )}
      tabIndex={0}
      data-testid="zep-card-square"
      ref={componentRef}
    >
      <img
        className="zep-object-cover zep-aspect-[1/1] zep-w-full zep-h-auto group-hover:zep-transition-all zep-duration-1000 group-hover:zep-brightness-90"
        src={imageSrc}
        alt={imageAlt}
        title="construction site"
      />
      <div className={clsx(cardSquareCardCva, paddingContainer, 'zep-py-1', 'zep-pl-1','sm:zep-pl-1.5',  'sm:zep-py-1.5' , 'lg:zep-pl-2' ,'lg:zep-py-2','lg:zep-pr-1.5','sm:zep-pr-1','zep-pr-0.75')}>
        <div className="zep-flex zep-flex-col zep-items-start zep-w-full">
          <h4
            data-testid="card-square-headline"
            className={clsx('zep-typography-headlineSM-fluid-cqi', 'zep-text-typography-light-70', 'zep-text-left','zep-mb-0.5')}
          >
            {headline}
          </h4>
          {description && (
            <p
              data-testid="card-square-description"
              className={clsx(
                'zep-typography-bodyText',
                'zep-text-typography-light-70',
                'zep-text-left',
                'zep-break-all',
              )}
            >
              {description}
            </p>
          )}
        </div>
        <div className="zep-transition zep-duration-500  group-hover:zep-translate-x-0.5 zep-mr-0.5">
          <img src={arrowImg} alt="white right arrow" data-testid="zep-her-arrowIcon" />
        </div>
      </div>
    </div>
  );
};
export { CardSquare };
