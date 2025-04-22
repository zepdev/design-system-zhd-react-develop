import { Meta, StoryObj } from '@storybook/react';
import horizontal from '../../assets/horz.png';
import vertical from '../../assets/verti.png';
import { mockRichText } from '../../utils/mocks';
import { MediaTextComponent } from './MediaTextComponent';

const meta = {
  title: 'Components/MediaTextComponent',
  component: MediaTextComponent,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof MediaTextComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mediaUrl: horizontal,
    mediaType: 'image',
    imageOrientation: 'horizontal',
    mediaAlignment: 'left',
    headline: 'Example Headline',
    content: mockRichText,
    type: 'primary-dark',
    alt: '',
    buttonText: 'Read More',
    contentAlignment: 'center',
    labelPrimary: 'aaaa',
  },
};

export const WithVerticalImageLeft: Story = {
  args: {
    mediaUrl: vertical,
    mediaType: 'image',
    imageOrientation: 'vertical',
    mediaAlignment: 'left',
    headline: 'Example Headline',
    content: mockRichText,
    alt: '',
    buttonText: 'Read More',
    contentAlignment: 'center',
  },
};

export const WithVerticalImageRight: Story = {
  args: {
    mediaUrl: vertical,
    mediaType: 'image',
    imageOrientation: 'vertical',
    mediaAlignment: 'right',
    headline: 'Example Headline',
    content: mockRichText,
    alt: '',
    buttonText: 'Read More',
  },
};

export const WithVideo: Story = {
  args: {
    mediaUrl: 'https://videos.pexels.com/video-files/20422317/20422317-hd_1920_1080_25fps.mp4',
    mediaType: 'video',
    mediaAlignment: 'left',
    contentAlignment: 'center',
    headline: 'Example Headline',
    content: mockRichText,
    alt: '',
    buttonText: 'Read More',
    videoThumbnail:
      'https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.jpg?s=2048x2048&w=is&k=20&c=FO-u3p_njEoIh7GusFYgrOo1RxF0EXobx0BXH6vMB4Q=',
  },
};

export const WithLinks: Story = {
  args: {
    mediaUrl: './assets/hero_image.png',
    mediaType: 'image',
    mediaAlignment: 'left',
    headline: 'Example Headline',
    content: mockRichText,
    alt: '',
    buttonText: 'Read More',
  },
};

export const WithMediaAlignmentRight: Story = {
  args: {
    mediaUrl: './assets/hero_image.png',
    imageOrientation: 'horizontal',
    mediaType: 'image',
    mediaAlignment: 'right',
    headline: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    content: mockRichText,
    alt: '',
    buttonText: 'Read More',
  },
};
