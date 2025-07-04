interface ResponsivePlayerProps {
    url: string;
    thumbnail: string;
    thumbnailAlt: string;
    label?: string;
    description?: string;
}
export type OneTrustType = {
    ToggleInfoDisplay: () => void;
    OnConsentChanged: (callback: () => void) => void;
};
declare const ResponsivePlayer: ({ url, thumbnail, label, description }: ResponsivePlayerProps) => import("react/jsx-dev-runtime").JSX.Element;
export default ResponsivePlayer;
//# sourceMappingURL=ResponsivePlayer.d.ts.map