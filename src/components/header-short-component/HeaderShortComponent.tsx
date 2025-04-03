import { clsx } from 'clsx';
import arrowImg from '../../../public/assets/moving-forward-arrow.svg';
import { GlobalVariants } from '../../interfaces/global-variants';
import { HeaderShortComponentProps } from './HeaderShortComponent.interface';

export const HeaderShortComponent = ({
  tagline,
  headline,
  showArrow,
  className,
  variant = GlobalVariants.Zps,
}: HeaderShortComponentProps) => {
  return (
    <div
      className={clsx(
        'zep-flex',
        'zep-w-full',
        'zep-@container',
        'zep-items-center',
        'xl:zep-gap-3.5',
        'md:zep-gap-1.5',
        'sm:zep-gap-2.5',
        'zep-gap-1.5',
        { 'md:zep-max-w-[701px]': showArrow },
        className,
      )}
      data-testid="header-short-component"
    >
      {showArrow ? (
        <img
          className={clsx('zep-h-4', 'sm:zep-h-5', 'md:zep-h-4', 'xl:zep-h-[100px]', 'zep-w-auto')}
          alt="forward arrow"
          src={arrowImg}
        />
      ) : null}
      <div className="zep-w-full zep-flex zep-flex-col zep-gap-0.5 zep-items-start zep-justify-start">
        {tagline ? (
          <p
            className={clsx(
              'zep-typography-tagline zep-hyphens-auto zep-break-normal zep-text-typography-dark-100',
              'zep-typography-tagline',
              'zep-hyphens-auto',
              'zep-break-normal',
            )}
          >
            {tagline}
          </p>
        ) : null}
        <h2
          className={
            'zep-typography-headlineLG-fluid-cqi zep-hyphens-auto zep-break-normal zep-text-typography-dark-100'
          }
        >
          {headline}
        </h2>
      </div>
    </div>
  );
};
