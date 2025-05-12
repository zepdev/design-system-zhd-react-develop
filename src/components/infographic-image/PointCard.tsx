import clsx from 'clsx';
import { Point } from './infographic-image.interface';

interface InfoPointProps {
  point: Point;
  activePoint?: Point;
  setActivePoint: (x: Point) => void;
}

const PointCard = ({ point, activePoint, setActivePoint }: InfoPointProps) => {
  return (
    <div
      id={`${point.x}${point.y}`}
      onClick={() => setActivePoint(point)}
      className={clsx(
        'zep-p-1 zep-min-w-[80%] sm:zep-min-w-[60%] zep-w-full',
        clsx(
          'zep-bg-primary-default zep-text-typography-light-100',
          activePoint === point && 'zep-shadow-[inset_0_0_0_4px_rgba(255,204,0,1)]',
        ),
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
