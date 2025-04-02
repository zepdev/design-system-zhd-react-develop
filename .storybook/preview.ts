import { withThemeByClassName } from '@storybook/addon-styling';
import type { Preview } from '@storybook/react';
import { backgrounds } from './background';
import { customViewports } from './customViewports';
import { themes } from './themes';

import '../src/tailwind.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: { viewports: customViewports },
    backgrounds: {
      values: [backgrounds.white, backgrounds.medium, backgrounds.dark, backgrounds.gradient],
    },
  },
};

export default preview;

export const decorators = [
  withThemeByClassName({
    themes,
    defaultTheme: 'holding',
  }),
];
