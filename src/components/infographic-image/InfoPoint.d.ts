import { Point } from './infographic-image.interface';

interface InfoPointProps {
    point: Point;
    activePoint?: Point;
    setActivePoint: (x: Point) => void;
    width?: number;
}
declare const InfoPoint: ({ point, setActivePoint, activePoint, width }: InfoPointProps) => import("react/jsx-dev-runtime").JSX.Element;
export default InfoPoint;
//# sourceMappingURL=InfoPoint.d.ts.map