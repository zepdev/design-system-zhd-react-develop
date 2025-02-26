import { FC } from 'react';
import clsx from 'clsx';
import { ProductIcon } from '@zepdev/design-system-component-library-react';
import { USPProps } from './usp-card.interface';
export const UspCard: FC<USPProps> = ({
  iconName,
  count,
  headline,
  description,
  className,
}: USPProps) => {

  return (
    <div
      className={clsx('zep-block zep-max-w-full sm:zep-max-w-[calc(50%-20px)] [&>svg]:zep-fill-indigo-500', className)}
      data-testid="zep-usp"
    >
      {iconName && <ProductIcon className="zep-mb-1" name={iconName} role="img" />}
      <span className="zep-typography-headline2XL-fluid-cqi zep-text-primary-default">{count}</span>
      <h4 className="zep-typography-headlineMD-fluid-cqi zep-mb-1 zep-text-typography-dark-100 zep-break-all">{headline}</h4>
      <p className="zep-typography-bodyText zep-text-typography-dark-100">{description}</p>
    </div>
  );
};
