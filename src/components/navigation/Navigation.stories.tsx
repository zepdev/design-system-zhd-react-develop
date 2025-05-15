import type { Meta, StoryObj } from '@storybook/react';
import zepCatLogo from '../../assets/zep-cat-logo.svg';
import { Navigation } from './Navigation';
import { NavigationProps } from './navigation.interface';

const meta = {
  title: 'Components/Navigation',
  component: Navigation,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

const locales = [
  { label: 'Deutsch', value: 'de', country: 'Deutschland', langAbbrev: 'DE' },
  { label: 'English', value: 'en', country: 'Deutschland', langAbbrev: 'EN' },
  { label: 'Deutsch', value: 'de-AT', country: 'Österreich', langAbbrev: 'DE' },
];

export const Default: Story = {
  args: {
    logo: zepCatLogo,
    activePageUrl: '/Marine',
    navigationItems: [
      {
        navId: '1',
        label: 'Marine',
        link: '/Marine',
        children: [
          {
            navId: '1',
            label: 'Loesungen',
            link: '/Loesungen',
            children: [
              {
                navId: '1',
                label: 'Bratwurst',
                link: '/Bratwurst',
                children: [{ navId: '1', label: 'Bratwurst 1', link: 'https://www.google.co.uk/' }],
              },
              { navId: '2', label: 'Marine 1-2' },
            ],
          },
          {
            navId: '2',
            label: 'Power and heat',
            link: '/Power-and-heat',
            children: [
              {
                navId: '1',
                label: 'Bratwurst',
                children: [{ navId: '1', label: 'Bratwurst 1', link: 'https://www.google.co.uk/' }],
              },
              { navId: '2', label: 'Marine 1-2' },
            ],
          },
          {
            navId: '3',
            label: 'LILA',
            link: '',
            children: [
              {
                navId: '1',
                label: 'Bratwurst',
                children: [{ navId: '1', label: 'Bratwurst 1', link: 'https://www.google.co.uk/' }],
              },
              { navId: '2', label: 'Marine 1-2' },
            ],
          },
        ],
      },
      { navId: '2', label: 'Strom & Wärme', children: [{ navId: '1', label: 'Strom 1' }] },
      {
        navId: '3',
        label: 'Industrie',
        children: [{ label: 'Industrie 1' }],
      },
      { navId: '4', label: 'Öl & Gas' },
      { navId: '5', label: 'Schiene' },
      { navId: '6', label: 'Gebrauchtmaschinen' },
    ],
    locales: locales,
    header: ' Select preferred country and language',
    labelBack: 'Back',
    selectedLocale: locales[0],
    navigationUtilityItems: [{ label: 'Services' }, { label: 'Unternehmen' }, { label: 'Kontakt & Standorte' }],
  } as NavigationProps,
};
