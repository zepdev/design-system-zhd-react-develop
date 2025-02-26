import type { Meta, StoryObj } from '@storybook/react';
import { MediaTextProductPattern } from './MediaTextProductPattern';
import { MediaTextProductPatternProps } from './mediatext-product-pattern.interface';

const description =
  'Unsere Produktkomponenten von Optimarin umfassen leistungsstarke UV-Systeme, effiziente Filter, robuste Rückspülpumpen, präzise Druckregelventile und bedienfreundliche Control Panel. Innovative Technologien gewährleisten eine effektive Entfernung von Organismenl.';

const meta = {
  title: 'Patterns/MediaTextProductPattern',
  component: MediaTextProductPattern,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: {
        type: 'array',
      },
    },
    hasButton: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
  },
} satisfies Meta<typeof MediaTextProductPattern>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: new Array(2).fill({
      headline: 'KOKEISL KAD',
      subline: 'Zum Austrag und präzisem Dosieren aus Silos und Containern ',
      description: description,
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
      buttonLabel: 'Download brochure PDF | 1MB',
      imageSrc: './public/assets/newhero-small.png',
      imageAlt: 'worker img',
    }),
    headline: 'Zukunftsweisende Antriebslösungen',
    tagline: 'tagline',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus Dosieren aus Silos und Containern.',
    linkText: 'Alle Lösungen',
    type: 'link',
    hasButton: true,
  } as MediaTextProductPatternProps,
};
