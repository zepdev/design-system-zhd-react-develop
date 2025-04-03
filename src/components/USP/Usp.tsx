import { ProductIcon } from '@zepdev/design-system-component-library-react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { GlobalVariants } from '../../interfaces/global-variants';
import { USPProps } from './usp.interface';
export const USP: React.FC<USPProps> = ({
  iconName,
  variant,
  count,
  headline,
  description,
  className,
  ...props
}: USPProps) => {
  const uspCountVariants = {
    [GlobalVariants.Zps]: [
      '[&>span]:zep-text-yellow-500 [&>h4]:zep-text-typography-light-100 [&>p]:zep-text-typography-light-100 [&>svg]:zep-fill-typography-light-100',
    ],
    [GlobalVariants.Cat]: [
      '[&>span]:zep-text-yellow-500 [&>h4]:zep-text-typography-light-100 [&>p]:zep-text-typography-light-100 [&>svg]:zep-fill-typography-light-100',
    ],
    default: [
      '[&>span]:zep-text-primary-default [&>h4]:zep-text-primary-default [&>p]:zep-text-primary-default [&>svg]:zep-fill-indigo-500',
    ],
  };
  const uspCountCva = cva([`zep-block zep-min-w-[330px] zep-max-w-[550px]`], {
    variants: {
      variant: uspCountVariants,
    },
    defaultVariants: {
      variant: GlobalVariants.Zps,
    },
  });

  return (
    <div className={twMerge(uspCountCva({ variant }), className)} data-testid="zep-usp" {...props}>
      {iconName && <ProductIcon className="zep-mb-1" name={iconName} role="img" />}
      <span className="zep-typography-headline2XL-fluid-cqi zep-mb-0.25">{count}</span>
      <h4 className="zep-typography-headlineMD-fluid-cqi zep-mb-1">{headline}</h4>
      <p className="zep-typography-bodyText">{description}</p>
    </div>
  );
};
