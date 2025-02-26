export enum BackgroundName {
  White = 'white',
  Medium = 'medium',
  Dark = 'dark',
  Gradient = 'gradient',
}

export type Background = {
  name: BackgroundName;
  value: string;
};

export type Backgrounds = {
  [key in BackgroundName]: Background;
};

export const backgrounds: Backgrounds = {
  white: { name: BackgroundName.White, value: '#fff' },
  medium: { name: BackgroundName.Medium, value: '#F1F1F1' },
  dark: { name: BackgroundName.Dark, value: '#262626' },
  gradient: { name: BackgroundName.Gradient, value: 'linear-gradient(90deg, #1F1B37 0%, #27166F 100%)' },
};
