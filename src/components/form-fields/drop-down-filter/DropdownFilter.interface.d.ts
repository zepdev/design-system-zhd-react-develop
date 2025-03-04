export interface DropdownFilterItem {
    label: string;
    value: string;
}
export interface DropdownFilterProps {
    value?: string | string[];
    onChange: (event: {
        target: {
            value: string | string[];
            name: string;
        };
    }) => void;
    options?: DropdownFilterItem[];
    name: string;
    placeholder?: string;
    className?: string;
    label?: string;
    error?: string;
    disabled?: boolean;
    dropdownClassname?: string;
    errorClassname?: string;
    required?: boolean;
    notRequiredHint?: string;
}
//# sourceMappingURL=DropdownFilter.interface.d.ts.map