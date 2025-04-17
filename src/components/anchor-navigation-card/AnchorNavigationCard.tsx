import clsx from 'clsx';
import React from 'react';
import { AnchorNavigationCardProps } from './anchor-navigation-card.interface';

export const AnchorNavigationCard: React.FC<AnchorNavigationCardProps> = ({
  linkLabel,
  scrollToIdLink,
  className,
  ...props
}: AnchorNavigationCardProps) => {
  return (
    <div data-testid="zep-anchor-navigation-card" className={clsx(className, 'zep-min-w-max')} {...props}>
      {linkLabel && (
        <a href={`#${scrollToIdLink}`}>
          <h4
            className="zep-text-typography-dark-100 zep-hyphens-auto zep-break-normal hover:zep-text-typography-dark-70/70"
            data-testid="anchor-navigation-card-headline"
          >
            {linkLabel}
          </h4>
        </a>
      )}
    </div>
  );
};
