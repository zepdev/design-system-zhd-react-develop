import { Meta, StoryObj } from '@storybook/react';
import { RichTextPattern } from './RichTextPattern';
import { mockRichText } from '../../utils/mocks';
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
