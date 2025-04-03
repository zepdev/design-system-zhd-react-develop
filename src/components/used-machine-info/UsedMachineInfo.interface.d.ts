import { MouseEvent } from 'react';
import { GalleryProps } from '../gallery';
import { UsedMachineDescriptionProps } from '../used-machine-pattern';

export interface UsedMachineInfoProps extends GalleryProps, UsedMachineDescriptionProps {
    onExposeClick: (ev: MouseEvent<HTMLElement>) => void;
    onOfferClick: (ev: MouseEvent<HTMLElement>) => void;
    description: string;
}
//# sourceMappingURL=UsedMachineInfo.interface.d.ts.map