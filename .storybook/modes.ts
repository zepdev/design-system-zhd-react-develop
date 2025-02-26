import { BackgroundName, backgrounds, type Background } from './background';
import { ViewportType, customViewports } from './customViewports';
import { themes, type ThemeKey } from './themes';

type ModeNames = `${ViewportType}_${ThemeKey}_${BackgroundName}`;
type Mode = {
  backgrounds?: Background;
  theme?: ThemeKey;
  viewport?: ViewportType;
};
type Modes = {
  [key in ModeNames]: Mode[];
};

export const allModes: Modes = Object.keys(customViewports).reduce((acc, cur) => {
  Object.keys(themes).forEach((theme) => {
    Object.entries(backgrounds).forEach(([bgKey, bgValue]) => {
      acc[`${cur}_${theme}_${bgKey}`] = {
        backgrounds: bgValue,
        theme: theme,
        viewport: cur,
      };
    });
  });
  return acc;
}, {} as Modes);
