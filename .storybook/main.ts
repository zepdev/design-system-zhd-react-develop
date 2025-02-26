import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import turbosnap from 'vite-plugin-turbosnap';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-styling',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  // enable chromatic turbosnap
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      plugins:
        configType === 'PRODUCTION'
          ? [
              turbosnap({
                // This should be the base path of your storybook.  In monorepos, you may only need process.cwd().
                rootDir: config.root ?? process.cwd(),
              }),
            ]
          : [],
    });
  },
};
export default config;
