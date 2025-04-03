import { Meta, StoryObj } from '@storybook/react';
import { BlocksContent } from '@strapi/blocks-react-renderer';
import { RichText } from './RichText';
import { RichTextProps } from './richText.interface';

const meta = {
  title: 'Components/RichText',
  component: RichText,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof RichText>;

export default meta;
type Story = StoryObj<typeof meta>;

const content: BlocksContent = [
  {
    type: 'heading',
    level: 4,
    children: [{ type: 'text', text: 'Li Europan lingues tot Europa' }],
  },
  {
    type: 'heading',
    level: 3,
    children: [{ type: 'text', text: 'Li Europan Lingues' }],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Zeppelin Power Systems ist führender Anbieter in den Bereichen Antrieb und Energie auf Basis hocheffizienter Motoren für alle ',
        type: 'text',
      },
      {
        bold: true,
        text: 'Anwendungsgebiete',
        type: 'text',
      },
      {
        text: ' mit einem Leistungsbereich von 10 bis 16.800 kW. Unsere Kunden vertrauen uns, wenn es um Diesel- und Gasmotoren, Notstromaggregate, Stromerzeuger, Komplettsysteme für Marine-, Schienen-, ',
        type: 'text',
      },
      {
        text: 'Öl- und Gas-Anwendunge',
        type: 'text',
        underline: true,
      },
      {
        text: 'n oder BHKW-Anlagen geht. Sie profitieren von unserer ausgeprägten Engineering-Kompetenz, die eine hohe Verfügbarkeit der Maschinen und Anlagen sicherstellt.',
        type: 'text',
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: '',
        type: 'text',
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Alle Aggregate oder Motoren, die unsere Produktion verlassen, werden bei Bedarf auf Herz und Nieren auf unseren modernen Prüfständen getestet. Die Kunden sind auf Wunsch beim ',
        type: 'text',
      },
      {
        url: 'https://www.google.com/',
        type: 'link',
        children: [
          {
            text: 'Abnahme-Prüfstandslauf ',
            type: 'text',
          },
        ],
      },
      {
        text: '(FAT) dabei und erhalten eine ausführliche Leistungsdokumentation als Nachweis. Abnahmeläufe mit Klassifizierungsgesellschaften ergänzen das Portfolio.',
        type: 'text',
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        type: 'text',
        text:
          'Zeppelin Power Systems ist führender Anbieter in den Bereichen Antrieb und Energie auf Basis hocheffizienter Motoren für alle Anwendungsgebiete mit einem Leistungsbereich von 10 bis 16.800 kW. Unsere Kunden vertrauen uns, wenn es um Diesel- und Gasmotoren, Notstromaggregate, Stromerzeuger, Komplettsysteme für Marine-, Schienen-, Öl- und Gas-Anwendungen oder BHKW-Anlagen geht. Sie profitieren von unserer ausgeprägten Engineering-Kompetenz, die eine hohe Verfügbarkeit der Maschinen und Anlagen sicherstellt.\n' +
          'Alle Aggregate oder Motoren, die unsere Produktion verlassen, werden bei Bedarf auf Herz und Nieren auf unseren modernen Prüfständen getestet. Die Kunden sind auf Wunsch beim Abnahme-Prüfstandslauf (FAT) dabei und erhalten eine ausführliche Leistungsdokumentation als Nachweis. Abnahmeläufe mit Klassifizierungsgesellschaften ergänzen das Portfolio.',
      },
    ],
  },
  {
    type: 'heading',
    level: 3,
    children: [{ type: 'text', text: 'Service-Modul für Verfügbarkeit & Reaktionszeit' }],
  },
  {
    type: 'list',
    format: 'unordered',
    children: [
      {
        type: 'list-item',
        children: [{ type: 'text', text: 'Individuelle Reaktionszeiten auf Störmeldungen' }],
      },
      {
        type: 'list-item',
        children: [{ type: 'text', text: 'Verfügbarkeit von Servicetechnikern vor Ort' }],
      },
      {
        type: 'list-item',
        children: [{ type: 'text', text: 'Garantierte Erreichbarkeit per Telefon oder E-Mail' }],
      },
      {
        type: 'list-item',
        children: [{ type: 'text', text: 'Schnelle Störungsbeseitigung' }],
      },
      {
        type: 'list-item',
        children: [{ type: 'text', text: 'Maximale Verfügbarkeit und Erhöhung der Betriebsbereitschaft' }],
      },
    ],
  },
  {
    type: 'list',
    format: 'ordered',
    children: [
      {
        type: 'list-item',
        children: [{ type: 'text', text: 'Minimierung von Kosten bei ungeplanten Ausfällen' }],
      },
      {
        type: 'list-item',
        children: [{ type: 'text', text: 'Minimierung von Kosten bei ungeplanten Ausfällen' }],
      },
    ],
  },
  {
    type: 'image',
    image: {
      url: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      name: 'test',
      caption: 'Test test',
      alternativeText: 'test',
      width: 224,
      height: 150,
      hash: '',
      ext: '',
      mime: '',
      size: 0,
      provider: '',
      createdAt: '',
      updatedAt: '',
    },
    children: [
      {
        type: 'text',
        text: '',
      },
    ],
  },
  {
    type: 'image',
    image: {
      url: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      name: 'test',
      caption: 'Test test',
      alternativeText: 'test',
      width: 224,
      height: 150,
      hash: '',
      ext: '',
      mime: '',
      size: 0,
      provider: '',
      createdAt: '',
      updatedAt: '',
    },
    children: [
      {
        type: 'text',
        text: '',
      },
    ],
  },
];

export const Default: Story = {
  args: {
    content: content,
    children: <p className="zep-mb-1">This is Custom</p>,
    appStoreUrl: 'ddd',
    googlePlayUrl: 'aaaa',
  } as RichTextProps,
};
