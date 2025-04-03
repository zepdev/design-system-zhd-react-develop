import { Meta, StoryObj } from '@storybook/react';
import { MediaTextPattern } from './MediaTextPattern';
import { GlobalVariants } from '../../interfaces/global-variants';
import { MediaTextContentProps } from '@/components/media-text';
import { mockImage, mockRichText } from '../../utils/mocks';

const meta = {
  title: 'Patterns/MediaTextPattern',
  component: MediaTextPattern,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof MediaTextPattern>;

export default meta;

type Story = StoryObj<typeof meta>;

const card: MediaTextContentProps = {
  variant: GlobalVariants.Zps,
  headline: 'Headline',
  tagline: 'TAGLINE',
  content: mockRichText,
  src: mockImage.src,
  alt: mockImage.alt,
  labelPrimary: 'Primary',
  labelSecondary: 'Secondary',
}

export const Default: Story = {
  args: {
    cards: [card, card, card, card, card, card],
    headline: 'Lösungen für Hilfs- und Propellerantriebe',
    tagline: 'Zeppelin Power Systems Lösungen für Marine',
  }
}
