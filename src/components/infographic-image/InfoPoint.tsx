import { Tooltip } from '@zepdev/design-system-component-library-react';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import { GlobalVariants } from '../../interfaces/global-variants';
import { Point } from './infographic-image.interface';

interface InfoPointProps {
  point: Point;
  variant: GlobalVariants;
  activePoint?: Point;
  setActivePoint: (x: Point) => void;
  width?: number;
}

const InfoPoint = ({ point, variant, setActivePoint, activePoint, width }: InfoPointProps) => {
  const infoPointVariants = {
    [GlobalVariants.Zps]: ['zep-bg-typography-light-100'],
    [GlobalVariants.Cat]: ['zep-bg-secondary-default'],
  };

  const shadowVariants = {
    [GlobalVariants.Zps]: [
      clsx(
        'zep-shadow-[0_0_0_10px_rgba(39,22,111,1)] md:group-hover:zep-shadow-[0_0_0_5px_rgba(39,22,111,1)] [&>p]:zep-text-primary-default',
        activePoint === point && 'zep-shadow-[0_0_0_3px_rgba(39,22,111,1)]',
      ),
    ],
    [GlobalVariants.Cat]: [
      clsx(
        'zep-shadow-[0_0_0_10px_rgba(38,38,38,1)] md:group-hover:zep-shadow-[0_0_0_5px_rgba(38,38,38,1)] [&>p]:zep-text-typography-primary-default',
        activePoint === point && 'zep-shadow-[0_0_0_3px_rgba(38,38,38,1)]',
      ),
    ],
  };

  const infoPointCva = cva([`zep-absolute zep-w-2.5 zep-h-2.5 md:zep-w-3 md:zep-h-3 zep-rounded-full`], {
    variants: {
      variant: infoPointVariants,
    },
    defaultVariants: {
      variant: GlobalVariants.Zps,
    },
  });

  const shadowCva = cva(
    [
      clsx(
        `zep-w-1 zep-h-1 md:zep-w-1.25 md:zep-h-1.25 zep-rounded-full zep-transition-all md:group-hover:zep-w-2 md:group-hover:zep-h-2`,
        activePoint === point ? 'zep-w-2 zep-h-2 ' : '',
      ),
    ],
    {
      variants: {
        variant: shadowVariants,
      },
      defaultVariants: {
        variant: GlobalVariants.Zps,
      },
    },
  );

  return (
    <div
      onClick={() => {
        if (width && width < 990) {
          setActivePoint(point);
        }
      }}
      style={{ left: `${point.x}%`, top: `${point.y}%` }}
      className={clsx(infoPointCva({ variant }))}
    >
      <div className="zep-hidden md:zep-block">
        <Tooltip
          color={variant === GlobalVariants.Zps ? 'zps' : 'cat'}
          label={point.label}
          description={point.description}
        >
          <div className="zep-w-2.5 zep-h-2.5 md:zep-w-3 md:zep-h-3 zep-rounded-full zep-flex zep-justify-center zep-items-center zep-group">
            <div className={clsx(shadowCva({ variant }), 'zep-flex zep-justify-center zep-items-center')}>
              {point.step && <p>{point.step}</p>}
            </div>
          </div>
        </Tooltip>
      </div>
      <div className="md:zep-hidden zep-w-2.5 zep-h-2.5 md:zep-w-3 md:zep-h-3 zep-rounded-full zep-flex zep-justify-center zep-items-center zep-group">
        <div className={clsx(shadowCva({ variant }), 'zep-flex zep-justify-center zep-items-center')}>
          {point.step && <p className="zep-typography-supportText">{point.step}</p>}
        </div>
      </div>
    </div>
  );
};

export default InfoPoint;
