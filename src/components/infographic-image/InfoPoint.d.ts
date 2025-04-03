import { GlobalVariants } from '../../interfaces/global-variants';
import { Point } from './infographic-image.interface';

interface InfoPointProps {
    point: Point;
    variant: GlobalVariants;
    activePoint?: Point;
    setActivePoint: (x: Point) => void;
    width?: number;
}
declare const InfoPoint: ({ point, variant, setActivePoint, activePoint, width }: InfoPointProps) => import("react/jsx-dev-runtime").JSX.Element;
export default InfoPoint;
//# sourceMappingURL=InfoPoint.d.ts.map