import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import { GlobalVariants } from '../../interfaces/global-variants';
import { Point } from './infographic-image.interface';

interface InfoPointProps {
  point: Point;
  activePoint?: Point;
  setActivePoint: (x: Point) => void;
}

const PointCard = ({ point, activePoint, setActivePoint }: InfoPointProps) => {
  const pointCardVariants = {
    [GlobalVariants.Zps]: [
      clsx(
        'zep-bg-greyscale-200 zep-text-typography-dark-100',
        activePoint === point && 'zep-shadow-[inset_0_0_0_4px_rgba(39,22,111,1)]',
      ),
    ],
  };

  const pointCardCva = cva([`zep-p-1 zep-min-w-[80%] sm:zep-min-w-[60%] zep-w-full`], {
    variants: {
      variant: pointCardVariants,
    },
    defaultVariants: {
      variant: GlobalVariants.Zps,
    },
  });

  return (
    <div
      id={`${point.x}${point.y}`}
      onClick={() => setActivePoint(point)}
      className={clsx(
        pointCardCva({ variant: GlobalVariants.Zps }),
        'card',
        activePoint === point && 'active',
        'zep-snap-center',
      )}
    >
      <p className="zep-text-headlineXS-fluid-cqi zep-mb-1 zep-text-start">{point.label}</p>
      <p className="zep-typography-bodyText zep-text-start">{point.description}</p>
    </div>
  );
};

export default PointCard;
