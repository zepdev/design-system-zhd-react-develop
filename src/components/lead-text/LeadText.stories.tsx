import { Meta, StoryObj } from '@storybook/react';
import { LeadText } from './LeadText';
import { LeadTextProps } from './lead-text.interface';
import { mockRichText } from '../../utils/mocks';

const meta = {
  title: 'Components/LeadText',
  component: LeadText,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LeadText>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample JSON
export const Default: Story = {
  args: {
    headline: 'Headline',
    content: mockRichText,
    theme: 'power-systems',
  } as LeadTextProps
}
