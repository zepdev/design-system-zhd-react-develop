import type { Meta, StoryObj } from '@storybook/react';
import { FunctionalIcons, ProductIcons } from '@zepdev/design-system-component-library-react';
import { UspCard } from './usp-card';
import { USPProps } from './usp-card.interface';

const meta = {
  title: 'Components/USP',
  component: UspCard,
  tags: ['autodocs'],
  argTypes: {
    iconName: {
      control: {
        type: 'select',
        options: [...Object.keys(FunctionalIcons), ...Object.keys(ProductIcons)],
      },
    },
  },
} satisfies Meta<typeof UspCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconName: 'hook',
    count: '70+',
    headline: 'Test headline',
    description:
      'Mit AEC können Sie den Zustand Ihrer Anlagen kontinuierlich analysieren und Optimierungspotenziale identifizieren, um eine ressourcenschonende Betriebsweise zu gewährleisten. Sie können die Lebensdauer Ihrer Motoren und Anlagen verlängern sowie die Emissionen und den Kraftstoffverbrauch senken. ',
  } as USPProps,
};
