import { Meta, StoryObj } from '@storybook/react';
import { MediaText } from './MediaText';
import { MediaTextVariant } from './mediaText.interface';

const meta = {
  title: 'Components/MediaText',
  component: MediaText,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: Object.keys(MediaTextVariant),
      },
    },
  },
} satisfies Meta<typeof MediaText>;

export default meta;
type Story = StoryObj<typeof meta>;
const Image = {
  src: './assets/image-4_3.png',
  alt: 'Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis.',
};

export const Default: Story = {
  args: {
    imageAlignment: 'left',
    variant: MediaTextVariant.Zps,
    headline: 'Headline',
    tagline: 'TAGLINE',
    description:
      'Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque. Sed amet feugiat egestas elementum convallis pretium pellentesque. sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.',
    children: (
      <>
        <MediaText.Image src={Image.src} alt={Image.alt} />
        <MediaText.Body>
          <MediaText.Tagline />
          <MediaText.Headline />
          <MediaText.Description />
          <MediaText.Button labelPrimary="Primary" labelSecondary="Secondary"></MediaText.Button>
        </MediaText.Body>
      </>
    ),
  },
};

export const ImageRight: Story = {
  args: {
    imageAlignment: 'right',
    variant: MediaTextVariant.Zps,
    headline: 'Headline',
    tagline: 'TAGLINE',
    description:
      'Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque. Sed amet feugiat egestas elementum convallis pretium pellentesque. sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.',
    children: (
      <>
        <MediaText.Image src={Image.src} alt={Image.alt} />
        <MediaText.Body>
          <MediaText.Tagline />
          <MediaText.Headline />
          <MediaText.Description />
          <MediaText.Button labelPrimary="Primary" labelSecondary="Secondary"></MediaText.Button>
        </MediaText.Body>
      </>
    ),
  },
};
