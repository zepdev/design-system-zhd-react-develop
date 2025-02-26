import { Meta, StoryObj } from '@storybook/react';
import { LeadText } from '@/components/lead-text/LeadText';
import { LeadTextProps } from '@/components/lead-text/lead-text.interface';
import { BlocksContent } from '@strapi/blocks-react-renderer';

const mockContent: BlocksContent = [
  {
    type: 'paragraph',
    children: [
      {
        text: 'Unsere Produktkomponenten von Optimarin umfassen leistungsstarke UV-Systeme, effiziente Filter, robuste Rückspülpumpen, präzise Druckregelventile und bedienfreundliche Control Panel. Innovative Technologien gewährleisten eine effektive Entfernung von Organismen und Partikeln, hohe Durchflussraten und eine zuverlässige Leistung bei minimalem Wartungsaufwand. Damit sorgen unsere Ballastwasserbehandlungssysteme für eine nachhaltige und effiziente Ballastwasserbehandlung, die den höchsten Umweltstandards entspricht.',
        type: 'text'
      }
    ]
  },
]

const meta = {
  title: 'Components/LeadText',
  component: LeadText,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['cat', 'power-systems'],
      }
    }
  },
} satisfies Meta<typeof LeadText>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample JSON
export const Default: Story = {
  args: {
    headline: 'Headline',
    // content: 'Unsere Produktkomponenten von Optimarin umfassen leistungsstarke UV-Systeme, effiziente Filter, robuste Rückspülpumpen, präzise Druckregelventile und bedienfreundliche Control Panel. Innovative Technologien gewährleisten eine effektive Entfernung von Organismen und Partikeln, hohe Durchflussraten und eine zuverlässige Leistung bei minimalem Wartungsaufwand. Damit sorgen unsere Ballastwasserbehandlungssysteme für eine nachhaltige und effiziente Ballastwasserbehandlung, die den höchsten Umweltstandards entspricht.',
    content: mockContent,
    theme: 'power-systems',
  } as LeadTextProps
}
