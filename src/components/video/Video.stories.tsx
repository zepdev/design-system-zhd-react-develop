import { Meta, StoryObj } from '@storybook/react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { Video } from './Video';

const meta = {
  title: 'Components/Video',
  component: Video,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: Object.keys(GlobalVariants),
      },
    },
  },
} satisfies Meta<typeof Video>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    videos: [
      {
        title: 'Big Buck Bunny with title larger than 3 lines',
        tagline: 'By Blender Foundation',
        description:
          'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit aint no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org',
        url: 'https://videos.pexels.com/video-files/20422317/20422317-hd_1920_1080_25fps.mp4',
        thumbnail:
          'https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.jpg?s=2048x2048&w=is&k=20&c=FO-u3p_njEoIh7GusFYgrOo1RxF0EXobx0BXH6vMB4Q=',
        thumbnailAlt: 'alt',
        cookiesResetLabel: 'Reset Cookies',
        cookiesLayerDescription: 'This video requires cookies to be enabled. Please accept cookies to proceed.',
      },
    ],
    variant: GlobalVariants.Cat,
  },
};

export const MultiVideo: Story = {
  args: {
    videos: Array.from({ length: 7 }).map(() => ({
      title: 'Big Buck Bunny with title larger than 3 lines',
      tagline: 'By Blender Foundation',
      description:
        'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit aint no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org',
      url: 'https://videos.pexels.com/video-files/20422317/20422317-hd_1920_1080_25fps.mp4',
      thumbnail:
        'https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.jpg?s=2048x2048&w=is&k=20&c=FO-u3p_njEoIh7GusFYgrOo1RxF0EXobx0BXH6vMB4Q=',
      thumbnailAlt: 'alt',
      cookiesResetLabel: 'Reset Cookies',
      cookiesLayerDescription: 'This video requires cookies to be enabled. Please accept cookies to proceed.',
    })),
    variant: GlobalVariants.Cat,
  },
};
