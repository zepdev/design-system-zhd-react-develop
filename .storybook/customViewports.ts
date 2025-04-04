type ViewportStyles = {
  width: string | 0;
  height: string | 0;
};

export enum ViewportType {
  LargeDesktop = 'largeDesktop',
  Desktop="desktop",
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
  largeDesktop: {
    name: 'LargeDesktop (1728)',
    styles: {
      width: '1728px',
      height: '1080px',
    },
    type: ViewportType.Desktop,
  },
  desktop: {
    name: 'Desktop (1440)',
    styles: {
      width: '1440px',
      height: '768px',
    },
    type: ViewportType.Laptop,
  },
  laptop: {
    name: 'Laptop (1025)',
    styles: {
      width: '1025px',
      height: '768px',
    },
    type: ViewportType.Laptop,
  },
  tablet: {
    name: 'Tablet (769)',
    styles: {
      width: '769px',
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
