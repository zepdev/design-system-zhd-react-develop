import type { Meta, StoryObj } from '@storybook/react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { ImageImagePattern } from './ImageImagePattern';
import { mockRichTextShort } from '../../utils/mocks';
// import { ImageImagePatternProps } from './image-image-pattern.interface';

const meta = {
  title: 'Patterns/ImageImagePattern',
  component: ImageImagePattern,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ImageImagePattern>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'link',
    tagline: 'tagline',
    headline: 'This is a long header',
    description: mockRichTextShort,
    linkHref: 'www.google.com',
    linkText: 'Click Me',
    items: {
      smallImageSrc: './assets/image-332x249.png',
      smallImageAlt: 'small image',
      largeImageSrc: './assets/Leistungsuebersicht_Gen_Sets_50_HZ_460594e581.png',
      largeImageAlt: 'large image',
    },
    variant: GlobalVariants.Zps,
  },
};

export const WithOnlyLargeImage: Story = {
  args: {
    type: 'link',
    tagline: 'tagline',
    headline: 'This is a long header',
    description: mockRichTextShort,
    linkHref: 'www.google.com',
    linkText: 'Click Me',
    items: {
      largeImageSrc: './assets/Leistungsuebersicht_Gen_Sets_50_HZ_460594e581.png',
      largeImageAlt: 'large image',
    },
    variant: GlobalVariants.Zps,
  },
};
