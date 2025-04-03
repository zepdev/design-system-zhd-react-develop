export interface SliderProps {
    step?: number;
    min: number;
    max: number;
    value: {
        min: number;
        max: number;
    };
    onChange?: (value: {
        min: number;
        max: number;
    }) => void;
    label: string;
}
//# sourceMappingURL=Slider.interface.d.ts.map