/** @type {import('tailwindcss').Config} */
const DesignTokensPreset = require('@zepdev/figma-design-tokens/tailwind/design-tokens.preset');

module.exports = {
  presets: [DesignTokensPreset],
  jit: true,
  content: ['./src/**/*.{ts,tsx}', './.storybook/provide-theme-variables.html','./node_modules/@zepdev/design-system-component-library-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      //TODO: remove this if preset provides the right tokens (@see https://jira.zeppelin.com/browse/DS-299)
      outlineWidth: {
        3: '3px',
      },
      backgroundImage: {
        'zsd-gradient': 'linear-gradient(173.238deg, #F2F8FD 0%, #D9E4ED 52%, #CBD8E3 73%, #A2BDCE 96%)',
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
};
