import type { Meta, StoryObj } from '@storybook/react';
import { USP } from './Usp';
import { USPProps } from './usp.interface';

const meta = {
  title: 'Components/USP',
  component: USP,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof USP>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: '70+',
    headline: 'Test headline',
    description:
      'Mit AEC können Sie den Zustand Ihrer Anlagen kontinuierlich analysieren und Optimierungspotenziale identifizieren, um eine ressourcenschonende Betriebsweise zu gewährleisten. Sie können die Lebensdauer Ihrer Motoren und Anlagen verlängern sowie die Emissionen und den Kraftstoffverbrauch senken. ',
  } as USPProps,
};
