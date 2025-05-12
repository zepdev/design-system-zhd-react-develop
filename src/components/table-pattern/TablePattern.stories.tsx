import type { Meta, StoryObj } from '@storybook/react';
import { TablePattern } from './TablePattern';
import { mockRichTextShort } from '../../utils/mocks';
import { TableColumn } from '@zepdev/design-system-component-library-react';
import { TablePatternProps } from './TablePattern.interface';

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

const meta = {
  title: 'Patterns/TablePattern',
  component: TablePattern,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TablePattern>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: columns,
    dataSource: data,
    headline: 'Leistungsübersicht Cat Ersatzmotoren',
    description: mockRichTextShort,
    tagline: 'Zeppelin Power Systems Produkte für Schiene',
    tableButtonLabel: 'Kontaktiere Sie unsere Experten',
    tableButtonOnClick: () => console.log('click'),
  } as TablePatternProps,
}
