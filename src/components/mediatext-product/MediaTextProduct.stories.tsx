import { Meta, StoryObj } from '@storybook/react';
import { MediaTextProduct } from './MediaTextProduct';
import { MediaTextProductProps } from './mediatext-product.interface';

const description =
  'Unsere Produktkomponenten von Optimarin umfassen leistungsstarke UV-Systeme, effiziente Filter, robuste Rückspülpumpen, präzise Druckregelventile und bedienfreundliche Control Panel. Innovative Technologien gewährleisten eine effektive Entfernung von Organismen und Partikeln, hohe Durchflussraten und eine zuverlässige Leistung bei minimalem Wartungsaufwand. Damit sorgen unsere Ballastwasserbehandlungssysteme für eine nachhaltige und effiziente.';

const meta = {
  title: 'Components/MediaTextProduct',
  component: MediaTextProduct,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof MediaTextProduct>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description: [{
      type: 'paragraph',
      children: [{
        type: 'text',
        text: description,
      }],
    }],
    headline: 'Tiernahrung',
    subline: 'Herstellung auf spitzenniveau',
    imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    productDescription: [],
    buttonLabel: 'Broschüre herunterladen PDF | 1MB',
  } as unknown as MediaTextProductProps,
};
