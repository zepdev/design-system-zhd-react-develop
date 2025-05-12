import { Point } from './infographic-image.interface';

interface InfoPointProps {
    point: Point;
    activePoint?: Point;
    setActivePoint: (x: Point) => void;
}
declare const PointCard: ({ point, activePoint, setActivePoint }: InfoPointProps) => import("react/jsx-dev-runtime").JSX.Element;
export default PointCard;
//# sourceMappingURL=PointCard.d.ts.map