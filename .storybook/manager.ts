import { addons } from '@storybook/manager-api';
import customStorybookTheme from './customStorybookTheme';

addons.setConfig({
  theme: customStorybookTheme,
});
