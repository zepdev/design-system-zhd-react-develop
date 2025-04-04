import { Meta, StoryObj } from '@storybook/react';
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
    mediaUrl: './assets/hero_image.png',
    mediaType: 'image',
    imageOrientation: 'horizontal',
    mediaPosition: 'left',
    headline: 'Example Headline',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    buttonText: 'Read More',
  },
};

export const WithVerticalImageLeft: Story = {
  args: {
    mediaUrl: './assets/vertical-image.png',
    mediaType: 'image',
    imageOrientation: 'vertical',
    mediaPosition: 'left',
    headline: 'Example Headline',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    buttonText: 'Read More',
  },
};

export const WithVerticalImageRight: Story = {
  args: {
    mediaUrl: './assets/vertical-image.png',
    mediaType: 'image',
    imageOrientation: 'vertical',
    mediaPosition: 'right',
    headline: 'Example Headline',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    buttonText: 'Read More',
  },
};

export const WithVideo: Story = {
  args: {
    mediaUrl: 'https://videos.pexels.com/video-files/20422317/20422317-hd_1920_1080_25fps.mp4',
    mediaType: 'video',
    mediaPosition: 'left',
    headline: 'Example Headline',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    buttonText: 'Read More',
    videoThumbnail: 'https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.jpg?s=2048x2048&w=is&k=20&c=FO-u3p_njEoIh7GusFYgrOo1RxF0EXobx0BXH6vMB4Q=',
  },
};

export const WithLinks: Story = {
  args: {
    mediaUrl: './assets/hero_image.png',
    mediaType: 'image',
    mediaPosition: 'left',
    headline: 'Example Headline',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    buttonText: 'Read More',
    links: [
      { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline' },
      { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline' },
      { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline' },
      { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline' },
      { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline' },
      { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline' },
      { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline' },
      { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline' },
    ],
  },
};


export const WithMediaAlignmentRight: Story = {
  args: {
    mediaUrl: './assets/hero_image.png',
    imageOrientation: 'horizontal',
    mediaType: 'image',
    mediaPosition: 'right',
    headline: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    buttonText: 'Read More',
  },
};