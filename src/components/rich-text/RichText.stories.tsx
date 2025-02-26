import type { Meta, StoryObj } from '@storybook/react';
import { BlocksContent } from '@strapi/blocks-react-renderer';
import { mockRichTextShort } from '../../utils/mocks';
import { RichText } from './RichText';
import { RichTextProps } from './RichText.interface';

const images = Array.from({ length: 3 }).map(() => ({
  src: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  alt: '',
}));
const content: BlocksContent = [
  {
    type: 'paragraph',
    children: [
      {
        text: 'Als Kunde von Zeppelin Systems können Sie ruhigen Gewissens mit offenen Farbkarten spielen – und dabei auch noch maximal flexibel agieren. Unsere innovative Anlagentechnologie schafft dafür die perfekten Voraussetzungen. Vom zügigen Austragen bis zur optimalen Förderung, vom zuverlässigen Filtern bis zur hochpräzisen Verwiegung und Dosierung.',
        type: 'text',
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Profitieren Sie vom umfassenden Zeppelin Know-how in allen relevanten Steps der Dispersionsfarbenproduktion, inklusive dem sicheren Handling von Titanoxid.',
        type: 'text',
      },
    ],
  },
  {
    type: 'heading',
    level: 3,
    children: [{ type: 'text', text: 'Vorteile für Ihre Dispersionsfarbenproduktion' }],
  },
  {
    type: 'list',
    format: 'unordered',
    children: [
      {
        type: 'list-item',
        children: [
          { type: 'text', text: 'Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet' },
        ],
      },
      {
        type: 'list-item',
        children: [
          { type: 'text', text: 'Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet' },
        ],
      },
    ],
  },
];

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

const columns = Array.from({ length: 10 }).map((_, i) => ({
  key: `title-${i}`,
  dataIndex: `title-${i}`,
  title: 'Title',
}));

const certificateImages = [
  { src: 'https://images.seeklogo.com/logo-png/5/1/fda-logo-png_seeklogo-53223.png?v=1958567723175956784', alt: '' },
  { src: 'https://images.seeklogo.com/logo-png/5/1/fda-logo-png_seeklogo-53223.png?v=1958567723175956784', alt: '' },
  { src: 'https://images.seeklogo.com/logo-png/5/1/fda-logo-png_seeklogo-53223.png?v=1958567723175956784', alt: '' },
  { src: 'https://images.seeklogo.com/logo-png/5/1/fda-logo-png_seeklogo-53223.png?v=1958567723175956784', alt: '' },
  { src: 'https://images.seeklogo.com/logo-png/5/1/fda-logo-png_seeklogo-53223.png?v=1958567723175956784', alt: '' },
  { src: 'https://images.seeklogo.com/logo-png/5/1/fda-logo-png_seeklogo-53223.png?v=1958567723175956784', alt: '' },
];

const dataSource = Array.from({ length: 15 }).map((_, i) => ({
  'title-0': 'Title',
  'title-1': 'Title',
  'title-2': 'Title',
  'title-3': 'Title',
  'title-4': 'Title',
  'title-5': 'Title',
  'title-6': 'Title',
  'title-7': 'Title',
  'title-8': 'Title',
  'title-9': 'Title',
}));

const meta = {
  title: 'Components/RichText',
  component: RichText,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof RichText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: 'Headline',
    tagline: 'Tagline',
    onDownload: () => null,
    buttonText: 'Herunterladen (PDF, 2MB)',
    description: 'Mehr Informationen finded sie in der Prduktbroschüre:',
    children: (
      <>
        <RichText.BlocksRichText content={content} />
        <RichText.Images images={images} />
        <RichText.BlocksRichText content={content} />
        <RichText.Accordion contents={accordionContents} />
        <RichText.BlocksRichText content={content} />
        <RichText.Table dataSource={dataSource} columns={columns} textTop={false} />
        <RichText.BlocksRichText content={content} />
        <RichText.Certificates
          title="Zertifiziert und geprüft für viele Anwendunsfälle:"
          certificateImages={certificateImages}
        />
      </>
    ),
  } as RichTextProps,
};
