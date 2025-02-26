import { clsx } from 'clsx';
import arrowImg from '../../../public/assets/moving-forward-arrow.svg';
import { HeaderShortComponentProps } from './HeaderShortComponent.interface';

export const HeaderShortComponent = ({
  tagline,
  headline,
  showArrow,
  className,
}: HeaderShortComponentProps) => {
  return (
    <div
      className={clsx(
        'zep-flex',
        'zep-@container',
        'zep-items-center',
        'xl:zep-gap-3.5',
        'md:zep-gap-1.5',
        'sm:zep-gap-2.5',
        'zep-gap-1.5',
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
      <div className="zep-w-full">
        {tagline ? (
          <h3 className="zep-mb-0.5 zep-text-typography-dark-100 zep-typography-taglineMD zep-break-all">
            {tagline}
          </h3>
        ) : null}
        <h2 className="zep-typography-headlineLG-fluid-cqi zep-text-typography-dark-100 zep-break-all">{headline}</h2>
      </div>
    </div>
  );
};
