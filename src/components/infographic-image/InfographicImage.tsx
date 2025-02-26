import { FC, useEffect, useRef, useState } from 'react';
import { useContainerDimensions } from '../../hooks/useContainerDimensions';
import InfoPoint from './InfoPoint';
import PointCard from './PointCard';
import { InfographicImageProps, Point } from './infographic-image.interface';

const InfographicImage: FC<InfographicImageProps> = ({ imageUrl, imageAlt, points }) => {
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
    <div>
      <div data-testid="zep-infographic-image" className="zep-relative" ref={componentRef}>
        <img src={imageUrl} alt={imageAlt} />
        {points?.map((point) => (
          <InfoPoint
            width={width}
            key={point.x}
            point={point}
            activePoint={activePoint}
            setActivePoint={setActivePoint}
          />
        ))}
      </div>
      <div className="zep-flex zep-overflow-x-scroll  md:zep-hidden zep-gap-0.5 zep-py-0.5 ">
        {points.map((point) => (
          <PointCard key={point.x} point={point} setActivePoint={setActivePoint} activePoint={activePoint} />
        ))}
      </div>
    </div>
  );
};
export { InfographicImage };
