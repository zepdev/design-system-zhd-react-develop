import { LocaleVariants } from '../../../interfaces/global-variants';

export declare enum MachineRating {
    STAND_BY = "standby",
    CONTINUOUS = "continuous",
    PRIME = "prime"
}
export declare enum MachineCategory {
    GEN_SET = "genset",
    ENGINE = "engine",
    ACCESSORY = "accessory"
}
export declare enum MachineFuel {
    DIESEL = "diesel",
    GAS = "gas",
    DUAL_FUEL = "dual_fuel"
}
export declare enum MachineGenSetType {
    STATIONARY = "stationary",
    MOBILE = "mobile"
}
export interface UsedMachineCardProps extends UsedMachineDescriptionProps {
    imageSrc: string;
    type?: MachineGenSetType;
    url: string;
}
export interface IUsedMachine {
    availability?: string;
    category: MachineCategory;
    certification?: string;
    city: string;
    country: string;
    frequency?: string;
    frequencyRange?: string;
    fuel?: MachineFuel;
    gNumber?: string;
    isMarine?: boolean;
    locale: LocaleVariants;
    manufacturer?: string;
    name: string;
    operatingHours?: number;
    postalCode: number;
    power?: number;
    rating?: MachineRating;
    serialNumber?: string;
    speed?: string;
    status?: string;
    voltage?: string;
    weight?: string;
    year: number;
    brand: string;
}
export interface UsedMachineDescriptionProps extends IUsedMachine {
    boldLabel?: boolean;
}
export interface ContentRowProps {
    boldLabel?: boolean;
    className?: string;
    hideBorder?: boolean;
    label: string;
    value: string | number;
}
//# sourceMappingURL=UsedMachineCard.interface.d.ts.map