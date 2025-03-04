interface NavUtilityItem {
    link: string;
    label: string;
}
export interface Locale {
    label: string;
    value: string;
    country: string;
}
export interface NavigationItem {
    navId: string;
    label: string;
    link?: string;
    children?: NavigationItem[];
}
export interface SidebarProps {
    navItems: NavigationItem[];
    open: boolean;
    setOpen: (x: boolean) => void;
    initialPath?: string[];
    setInitialPath: (x: string[]) => void;
    selectedLocale?: Locale;
    locales?: Locale[];
    setSelectedLocale?: (x: Locale) => void;
    navigationUtilityItems?: NavUtilityItem[];
}
export interface NavigationProps {
    className?: string;
    navigationUtilityItems?: NavUtilityItem[];
    navigationItems: NavigationItem[];
    selectedLocale?: Locale;
    locales?: Locale[];
    logo: string;
}
export interface LanguageSwitcherProps {
    setLocaleSwitcherMenu?: (x: boolean) => void;
    selectedLocale?: Locale;
    setLanguageSwitcher?: (x: boolean) => void;
    locales?: Locale[];
    setSelectedLocale?: (x: Locale) => void;
}
export {};
//# sourceMappingURL=navigation.interface.d.ts.map