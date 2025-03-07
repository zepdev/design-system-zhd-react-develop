import type { Meta, StoryObj } from '@storybook/react';
import { MediaTextComponentPattern } from './MediaTextComponentPattern';
import { MediaTextComponentPatternProps } from './media-textcomponent-pattern.interfce';

const meta = {
  title: 'Patterns/MediaTextComponentPattern',
  component: MediaTextComponentPattern,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof MediaTextComponentPattern>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: new Array(4).fill(null).map((_, index) => ({
      mediaUrl: './assets/hero_image.png',
      imageOrientation: 'horizontal',
      mediaType: 'image',
      mediaPosition: index % 2 === 0 ? 'left' : 'right', // Alternating positions
      headline: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      buttonText: 'Read More',
    })),
    headline: 'Zukunftsweisende Antriebslösungen',
    tagline: 'tagline',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus Dosieren aus Silos und Containern.',
    linkText: 'Alle Lösungen',
    type: 'link',
  } as MediaTextComponentPatternProps,
};

export const WithLinkList: Story = {
  args: {
    items: new Array(4).fill(null).map((_, index) => ({
      mediaUrl: './assets/hero_image.png',
      imageOrientation: 'horizontal',
      mediaType: 'image',
      mediaPosition: index % 2 === 0 ? 'left' : 'right', // Alternating positions
      headline: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      links: [
        { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline' },
        { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline' },
        { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline' },
        { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline' },
        { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline' },
        { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline' },
        { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline' },
        { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline' },
        { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline' },
        { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline' },
      ],
      buttonText: 'Read More',
    })),
    headline: 'Zukunftsweisende Antriebslösungen',
    tagline: 'tagline',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus Dosieren aus Silos und Containern.',
    linkText: 'Alle Lösungen',
    type: 'link',
  } as MediaTextComponentPatternProps,
};

export const VerticalImage: Story = {
  args: {
    items: new Array(4).fill(null).map((_, index) => ({
      mediaUrl: './assets/vertical-image.png',
      imageOrientation: 'vertical',
      mediaType: 'image',
      mediaPosition: index % 2 === 0 ? 'left' : 'right', // Alternating positions
      headline: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      buttonText: 'Read More',
    })),
    headline: 'Zukunftsweisende Antriebslösungen',
    tagline: 'tagline',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus Dosieren aus Silos und Containern.',
    linkText: 'Alle Lösungen',
    type: 'link',
  } as MediaTextComponentPatternProps,
};

export const WithVideo: Story = {
  args: {
    items: new Array(4).fill(null).map((_, index) => ({
      videoThumbnail:
        'https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.jpg?s=2048x2048&w=is&k=20&c=FO-u3p_njEoIh7GusFYgrOo1RxF0EXobx0BXH6vMB4Q=',
      mediaUrl: 'https://videos.pexels.com/video-files/20422317/20422317-hd_1920_1080_25fps.mp4',
      mediaType: 'video',
      mediaPosition: index % 2 === 0 ? 'left' : 'right', // Alternating positions
      headline: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      buttonText: 'Read More',
    })),
    headline: 'Zukunftsweisende Antriebslösungen',
    tagline: 'tagline',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus Dosieren aus Silos und Containern.',
    linkText: 'Alle Lösungen',
    type: 'link',
  } as MediaTextComponentPatternProps,
};
