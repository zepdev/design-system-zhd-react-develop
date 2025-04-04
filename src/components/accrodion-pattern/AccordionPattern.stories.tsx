import { Meta, StoryObj } from '@storybook/react';
import { BlocksContent } from '@strapi/blocks-react-renderer';
import { TableColumn } from '@zepdev/design-system-component-library-react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { AccordionPattern } from './AccordionPattern';
import { AccordionPatternProps } from './accordion.interface';

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

const mockContent: BlocksContent = [
  {
    type: 'paragraph',
    children: [
      {
        text: 'Unsere Produktkomponenten von Optimarin umfassen leistungsstarke UV-Systeme, effiziente Filter, robuste Rückspülpumpen, präzise Druckregelventile und bedienfreundliche Control Panel. Innovative Technologien gewährleisten eine effektive Entfernung von Organismen und Partikeln, hohe Durchflussraten und eine zuverlässige Leistung bei minimalem Wartungsaufwand. Damit sorgen unsere Ballastwasserbehandlungssysteme für eine nachhaltige und effiziente Ballastwasserbehandlung, die den höchsten Umweltstandards entspricht.',
        type: 'text',
      },
    ],
  },
];

const meta = {
  title: 'Patterns/AccordionPattern',
  component: AccordionPattern,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: [...Object.keys(GlobalVariants), 'default'],
      },
    },
  },
} satisfies Meta<typeof AccordionPattern>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    topDescription: mockContent,
    bottomDescription: mockContent,
    contents: [
      {
        title: 'Title one',
        accordionContent: mockContent,
      },
      {
        title: 'Title two',
        accordionContent: mockContent,
      },
      {
        title: 'Title three',
        accordionContent: mockContent,
      },
      {
        title: 'Title four',
        accordionContent: mockContent,
      },
      {
        title: 'Title five',
        accordionContent: mockContent,
      },
    ],
    variant: GlobalVariants.Zps,
    buttonText: 'Kontaktieren Sie unsere Experten',
    buttonOnClick: () => console.log('click'),
  } as AccordionPatternProps,
};

export const WithTable: Story = {
  args: {
    topDescription: mockContent,
    bottomDescription: mockContent,
    contents: [
      {
        title: 'Title one',
        accordionContent: mockContent,
      },
      {
        title: 'Tiwtle two',

        table: {
          columns: columns,
          dataSource: data,
        },
      },
    ],
    variant: GlobalVariants.Zps,
    buttonText: 'Kontaktieren Sie unsere Experten',
    buttonOnClick: () => console.log('click'),
  } as AccordionPatternProps,
};
