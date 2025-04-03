import { Meta, StoryObj } from '@storybook/react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { mockImage, mockRichText } from '../../utils/mocks';
import { MediaText } from './MediaText';

const meta = {
  title: 'Components/MediaText',
  component: MediaText,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof MediaText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageAlignment: 'left',
    variant: GlobalVariants.Zps,
    headline: 'Headline',
    tagline: 'TAGLINE',
    content: mockRichText,
    src: mockImage.src,
    alt: mockImage.alt,
    labelPrimary: 'Primary',
    labelSecondary: 'Secondary',
    urlPrimary: '/url-1',
    urlSecondary: '/url-2',
  },
};

export const ImageRight: Story = {
  args: {
    imageAlignment: 'right',
    variant: GlobalVariants.Zps,
    headline: 'Headline',
    tagline: 'TAGLINE',
    content: mockRichText,
    src: mockImage.src,
    alt: mockImage.alt,
    labelPrimary: 'Primary',
    labelSecondary: 'Secondary',
  },
};
