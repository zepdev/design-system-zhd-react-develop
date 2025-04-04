import type { Meta, StoryObj } from '@storybook/react';
import { FunctionalIcons, ProductIcons } from '@zepdev/design-system-component-library-react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { USP } from './Usp';
import { USPProps } from './usp.interface';

const meta = {
  title: 'Components/USP',
  component: USP,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: [...Object.keys(GlobalVariants), 'default'],
      },
    },
    iconName: {
      control: {
        type: 'select',
        options: [...Object.keys(FunctionalIcons), ...Object.keys(ProductIcons)],
      },
    },
  },
} satisfies Meta<typeof USP>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconName: 'hook',
    count: '70+',
    variant: 'default',
    headline: 'Test headline',
    description:
      'Mit AEC können Sie den Zustand Ihrer Anlagen kontinuierlich analysieren und Optimierungspotenziale identifizieren, um eine ressourcenschonende Betriebsweise zu gewährleisten. Sie können die Lebensdauer Ihrer Motoren und Anlagen verlängern sowie die Emissionen und den Kraftstoffverbrauch senken. ',
  } as USPProps,
};
