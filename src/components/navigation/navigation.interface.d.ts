export interface NavUtilityItem {
    link: string;
    label: string;
}
export interface Locale {
    label: string;
    value: string;
    country: string;
    langAbbrev: string;
}
export interface NavigationItem {
    navId: string;
    label: string;
    link?: string;
    children?: NavigationItem[];
}
export type LanguageSwitcherVariant = 'default' | 'zsd';
export interface SidebarProps {
    navItems: NavigationItem[];
    open: boolean;
    setOpen: (x: boolean) => void;
    initialPath?: string[];
    setInitialPath: (x: string[]) => void;
    selectedLocale?: Locale;
    locales?: Locale[];
    header?: string;
    labelBack: string;
    setSelectedLocale?: (x: Locale) => void;
    navigationUtilityItems?: NavUtilityItem[];
    languageSwitcherVariant?: LanguageSwitcherVariant;
}
export interface NavigationProps {
    className?: string;
    navigationUtilityItems?: NavUtilityItem[];
    navigationItems: NavigationItem[];
    selectedLocale?: Locale;
    setSelectedLocale?: (locale: Locale) => void;
    locales?: Locale[];
    logo: string;
    header: string;
    labelBack: string;
    activePageUrl?: string;
    languageSwitcherVariant?: LanguageSwitcherVariant;
}
export interface LanguageSwitcherProps {
    header: string;
    labelBack: string;
    setLocaleSwitcherMenu?: (x: boolean) => void;
    selectedLocale?: Locale;
    setLanguageSwitcher?: (x: boolean) => void;
    locales?: Locale[];
    setSelectedLocale?: (x: Locale) => void;
}
export interface LanguageSwitcherZsdProps {
    selectedLocale?: Locale;
    locales?: Locale[];
    setSelectedLocale?: (x: Locale) => void;
}
export interface NavigationMenuProps {
    items: NavigationItem[];
    children?: React.ReactNode;
}
//# sourceMappingURL=navigation.interface.d.ts.map