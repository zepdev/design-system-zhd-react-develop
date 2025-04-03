import type { Meta, StoryObj } from '@storybook/react';
import { ImageImageComponent } from './ImageImage';
import { ImageImageProps } from './image-image.interface';

const meta = {
  title: 'Components/ImageImageComponent',
  component: ImageImageComponent,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ImageImageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    smallImageSrc: './assets/image-332x249.png',
    smallImageAlt: 'small image',
    largeImageSrc: './assets/Leistungsuebersicht_Gen_Sets_50_HZ_460594e581.png',
    largeImageAlt: 'large image',
  } as ImageImageProps,
};

export const WithoutSmallImage: Story = {
  args: {
    largeImageSrc: './Leistungsuebersicht_Gen_Sets_50_HZ_460594e581.png',
    largeImageAlt: 'large image',
  } as ImageImageProps,
};
