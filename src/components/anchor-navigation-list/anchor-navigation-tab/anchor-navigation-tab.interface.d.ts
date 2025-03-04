export interface Tab {
    linkLabel: string;
    scrollToIdLink: string;
}
export interface AnchorNavigationTabProps {
    setSelectedTab?: (x: Tab) => void | null;
    activeTab?: Tab | null;
    tab: Tab;
}
//# sourceMappingURL=anchor-navigation-tab.interface.d.ts.map