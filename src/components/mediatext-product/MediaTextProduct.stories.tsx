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
    description: description,
    headline: 'Tiernahrung',
    subline: 'Herstellung auf spitzenniveau',
    imageSrc: './public/assets/newhero-small.png',
    contents: [
      {
        title: 'Title one',
        content: description,
      },
      {
        title: 'Title two',
        content: description,
      },
      {
        title: 'Title three',
        content: description,
      },
      {
        title: 'Title four',
        content: description,
      },
      {
        title: 'Title five',
        content: description,
      },
    ],
    buttonLabel: 'Broschüre herunterladen PDF | 1MB',
  } as MediaTextProductProps,
};
