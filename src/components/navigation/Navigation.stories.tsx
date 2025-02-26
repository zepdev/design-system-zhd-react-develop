import type { Meta, StoryObj } from '@storybook/react';
import zepCatLogo from '../../assets/zep-logo.svg';
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
  { label: 'Deutsch (DE)', value: 'de', country: 'Germany (Deutschland)' },
  { label: 'English (EN)', value: 'en', country: 'Germany (Deutschland)' },
  { label: 'Deutsch (AT)', value: 'de-AT', country: 'Austria (Österreich)' },
];

export const Default: Story = {
  args: {
    logo: zepCatLogo,
    navigationItems: [
      {
        navId: '1',
        label: 'Industrien',
        link: '/home',
        children: [
          {
            navId: '1',
            label: 'Industrien 1',
            link: '',
            children: [
              {
                id: '1',
                label: 'Industrien 1-1',
                children: [{ label: 'Industrien 1-1-1', link: 'https://www.google.co.uk/' }],
              },
              { label: 'Industrien 1-2' },
            ],
          },
        ],
      },
      { id: '2', label: 'Kompetenzen', children: [{ label: 'Kompetenzen 1' }] },
      { id: '3', label: 'Produkte', children: [{ label: 'Produkte 1' }] },
      { id: '4', label: 'Service' },
      { id: '5', label: 'Über UNs' },
    ],
    locales: locales,
    selectedLocale: locales[0],
    navigationUtilityItems: [
      { label: 'Nachhaltige Lösungen' },
      { label: 'News & Media' },
      { label: 'Messen & Events' },
      { label: 'Karriere' },
      { label: 'Kontakt' },
    ],
  } as NavigationProps,
};
