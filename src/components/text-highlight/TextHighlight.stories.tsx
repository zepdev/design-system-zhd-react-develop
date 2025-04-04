import { Meta, StoryObj } from '@storybook/react';
import { BlocksContent } from '@strapi/blocks-react-renderer';
import { TableColumn } from '@zepdev/design-system-component-library-react';
import { mockRichTextShort } from '../../utils/mocks';
import { TextHighlight } from './TextHighlight';

const columns: TableColumn<object>[] = [
  { key: '1', title: '', dataIndex: 'type' },
  { key: 'aec', title: 'Active Equipment Connect', dataIndex: 'aec' },
  { key: 'foc', title: 'Fleet Operations Center', dataIndex: 'foc' },
  { key: 'catVL', title: 'CAT VisionLink', dataIndex: 'catVL' },
];

const data = Array.from({ length: 10 }).map((_, index) => ({
  id: index,
  type: 'Standard Funktionen',
  aec: 'Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement',
  foc: 'Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement',
  catVL: 'Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement',
}));

const accordionContents = [
  {
    title: 'Title one',
    accordionContent: mockRichTextShort,
  },
  {
    title: 'Title two',
    accordionContent: mockRichTextShort,
  },
  {
    title: 'Title three',
    accordionContent: mockRichTextShort,
  },
  {
    title: 'Title four',
    accordionContent: mockRichTextShort,
  },
];

const content: BlocksContent = [
  {
    type: 'heading',
    level: 4,
    children: [{ type: 'text', text: 'Service-Modul für Verfügbarkeit & Reaktionszeit' }],
  },
  {
    type: 'list',
    format: 'unordered',
    children: [
      {
        type: 'list-item',
        children: [
          { type: 'text', text: 'Individuelle Reaktionszeiten auf Störmeldungen' },
          { type: 'text', text: 'Verfügbarkeit von Servicetechnikern vor Ort' },
          { type: 'text', text: 'Garantierte Erreichbarkeit per Telefon oder E-Mail' },
          { type: 'text', text: 'Schnelle Störungsbeseitigung' },
          { type: 'text', text: 'Maximale Verfügbarkeit und Erhöhung der Betriebsbereitschaft' },
          { type: 'text', text: 'Minimierung von Kosten bei ungeplanten Ausfällen' },
        ],
      },
    ],
  },
];

const meta = {
  title: 'Patterns/TextHighlight',
  component: TextHighlight,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextHighlight>;

type Story = StoryObj<typeof meta>;
export default meta;

export const TextHighlightRichText: Story = {
  args: {
    buttonText: 'Kontaktieren Sie unsere Experten',
    imageSrc: 'https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg',
    imageAlt: 'cat',
    imageAlignment: 'left',
    children: <TextHighlight.RichText content={content} />,
    message:
      'Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?',
    topDescription: mockRichTextShort,
  },
};

export const ImageAlignmentRight: Story = {
  args: {
    buttonText: 'Kontaktieren Sie unsere Experten',
    imageSrc: 'https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg',
    imageAlt: 'cat',
    imageAlignment: 'right',
    children: <TextHighlight.RichText content={content} />,
    message:
      'Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?',
    topDescription: mockRichTextShort,
  },
};

export const TextHighlightTable: Story = {
  args: {
    headline: 'asdad',
    buttonText: 'Kontaktieren Sie unsere Experten',
    imageSrc: 'https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg',
    imageAlt: 'cat',
    children: <TextHighlight.Table columns={columns} dataSource={data} />,
    message:
      'Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?',
  },
};

export const TextHighlightAccordion: Story = {
  args: {
    buttonText: 'Kontaktieren Sie unsere Experten',
    imageSrc: 'https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg',
    imageAlt: 'cat',
    children: <TextHighlight.Accordion contents={accordionContents} />,
    message:
      'Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?',
  },
};
