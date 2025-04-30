import { Meta, StoryObj } from '@storybook/react';
import { mockRichText } from '../../utils/mocks';
import { RichTextPattern } from './RichTextPattern';
import { RichTextPatternProps } from './RichTextPattern.interface';

const meta = {
  title: 'Patterns/RichTextPattern',
  component: RichTextPattern,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof RichTextPattern>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: mockRichText,
    headline: 'Headline',
    tagline: 'Tagline',
  } as RichTextPatternProps,
};

export const WithSingleImage: Story = {
  args: {
    content: [
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
        type: 'heading',
        level: 3,
        children: [{ type: 'text', text: 'Service-Modul für Verfügbarkeit & Reaktionszeit' }],
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
    ],
    headline: 'Headline',
    tagline: 'Tagline',
  } as RichTextPatternProps,
};