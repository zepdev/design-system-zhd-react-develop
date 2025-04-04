import { cva } from 'class-variance-authority';
import { FC, useEffect, useRef, useState } from 'react';
import { useContainerDimensions } from '../../hooks/useContainerDimensions';
import { GlobalVariants } from '../../interfaces/global-variants';
import InfoPoint from './InfoPoint';
import PointCard from './PointCard';
import { InfographicImageProps, Point } from './infographic-image.interface';

export const infographicImageVariants = {
  [GlobalVariants.Zps]: [],
  [GlobalVariants.Cat]: [],
};

export const infographicImageCva = cva([``], {
  variants: {
    variant: infographicImageVariants,
  },
  defaultVariants: {
    variant: GlobalVariants.Zps,
  },
});

const InfographicImage: FC<InfographicImageProps> = ({ imageUrl, imageAlt, points, variant, className }) => {
  const [activePoint, setActivePoint] = useState<Point | undefined>();

  const componentRef = useRef<HTMLDivElement | null>(null);
  const { width } = useContainerDimensions(componentRef);

  useEffect(() => {
    const element = document.getElementById(`${activePoint?.x}${activePoint?.y}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
  }, [activePoint]);

  return (
    <div className={className}>
      <div data-testid="zep-infographic-image" className="zep-relative" ref={componentRef}>
        <img src={imageUrl} alt={imageAlt} />
        {points?.map((point) => (
          <InfoPoint
            width={width}
            variant={variant}
            key={point.x}
            point={point}
            activePoint={activePoint}
            setActivePoint={setActivePoint}
          />
        ))}
      </div>
      <div className="zep-flex zep-overflow-x-scroll  md:zep-hidden zep-gap-0.5 zep-py-0.5 ">
        {points.map((point) => (
          <PointCard
            key={point.x}
            point={point}
            variant={variant}
            setActivePoint={setActivePoint}
            activePoint={activePoint}
          />
        ))}
      </div>
    </div>
  );
};
export { InfographicImage };
