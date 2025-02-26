type ViewportStyles = {
  width: string | 0;
  height: string | 0;
};

export enum ViewportType {
  Desktop = 'desktop',
  Laptop = 'laptop',
  Tablet = 'tablet',
  Mobile = 'mobile',
}

type Viewport = {
  name: string;
  styles: ViewportStyles;
  type?: ViewportType;
};

type CustomViewports = {
  [key in ViewportType]: Viewport;
};

export const customViewports: CustomViewports = {
  desktop: {
    name: 'Desktop (1920)',
    styles: {
      width: '1920px',
      height: '1080px',
    },
    type: ViewportType.Desktop,
  },
  laptop: {
    name: 'Laptop (1024)',
    styles: {
      width: '1024px',
      height: '768px',
    },
    type: ViewportType.Laptop,
  },
  tablet: {
    name: 'Tablet (768)',
    styles: {
      width: '768px',
      height: '1024px',
    },
    type: ViewportType.Tablet,
  },
  mobile: {
    name: 'Mobile (360)',
    styles: {
      width: '360px',
      height: '780px',
    },
    type: ViewportType.Mobile,
  },
};
