import { Meta, StoryObj } from '@storybook/react';
import { mockImage, mockRichText } from '../../utils/mocks';
import vertical from '../../assets/verti.png';
import { MediaTextComponentContentProps } from '../media-text-component/media-text-component.interface';
import { MediaTextComponentPattern } from './MediaTextComponentPattern';

const meta = {
  title: 'Patterns/MediaTextComponentPattern',
  component: MediaTextComponentPattern,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof MediaTextComponentPattern>;

export default meta;

type Story = StoryObj<typeof meta>;

const card: MediaTextComponentContentProps = {
  headline: 'Headline',
  mediaType: 'image',
  imageOrientation: 'vertical',
  tagline: 'TAGLINE',
  content: mockRichText,
  mediaUrl: vertical,
  alt: mockImage.alt,
  labelPrimary: 'Primary',
};

export const Default: Story = {
  args: {
    cards: [card, card, card, card, card, card],
    headline: 'Lösungen für Hilfs- und Propellerantriebe',
    tagline: 'Zeppelin Power Systems Lösungen für Marine',
  },
};
