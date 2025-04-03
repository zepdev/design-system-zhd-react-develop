import { FunctionalIcon } from '@zepdev/design-system-component-library-react';
import { cva } from 'class-variance-authority';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { AnchorNavigationCardProps } from './anchor-navigation-card.interface';
import { GlobalVariants } from '../../interfaces/global-variants';

export const anchorCardVariants = {
  [GlobalVariants.Zps]: ['zep-bg-primary-default'],
  [GlobalVariants.Cat]: ['zep-bg-neutral-dark-default'],
};
export const anchorNavigationCardCva = cva(
  [
    `zep-w-full
    zep-min-w-[290px]
    zep-max-w-[290px]
    sm:zep-min-w-[290px]
    sm:zep-max-w-[352px]
    md:zep-min-w-[290px]
    md:zep-max-w-[435px]
    lg:zep-min-w-[300px]
    lg:zep-max-w-[700px]
    zep-p-1.5 
    md:zep-p-2 
    lg:zep-p-2.5`,
  ],
  {
    variants: {
      variant: anchorCardVariants,
    },
    defaultVariants: {
      variant: GlobalVariants.Zps,
    },
  },
);

export const AnchorNavigationCard: React.FC<AnchorNavigationCardProps> = ({
  headline,
  linkLabel,
  scrollToIdLink,
  variant,
  className,
  ...props
}: AnchorNavigationCardProps) => {
  return (
    <div
      data-testid="zep-anchor-navigation-card"
      className={twMerge(
        anchorNavigationCardCva({ variant }),
        className,
        'zep-flex zep-flex-col zep-gap-1.5 zep-@container-normal',
      )}
      {...props}
    >
      {headline && (
        <h3
          className="zep-typography-headlineSM-fluid-cqi zep-text-typography-light-100 zep-hyphens-auto zep-break-normal"
          data-testid="anchor-navigation-card-headline"
        >
          {headline}
        </h3>
      )}
      <a href={`#${scrollToIdLink}`}>
        <div className="zep-flex zep-items-center zep-gap-0.5">
          <p className="zep-text-secondary-default hover:zep-underline hover:zep-transition-all">{linkLabel}</p>
          <FunctionalIcon
            name={'arrow-long-down'}
            className="zep-stroke-secondary-default zep-fill-secondary-default zep-w-1"
          />
        </div>
      </a>
    </div>
  );
};
