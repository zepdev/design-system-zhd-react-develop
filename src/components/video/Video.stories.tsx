import { Meta, StoryObj } from '@storybook/react';
import { Video } from './Video';

const meta = {
  title: 'Patterns/Video',
  component: Video,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Video>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    video: {
      title: 'Big Buck Bunny with title larger than 3 lines',
      tagline: 'By Blender Foundation',
      type: 'link',
      linkText: 'Watch on Youtube',
      linkHref: 'https://www.youtube.com/watch?v=YE7VzlLtp-4',
      description:
        'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit aint no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org',
      url: 'https://videos.pexels.com/video-files/20422317/20422317-hd_1920_1080_25fps.mp4',
      thumbnail:
        'https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.jpg?s=2048x2048&w=is&k=20&c=FO-u3p_njEoIh7GusFYgrOo1RxF0EXobx0BXH6vMB4Q=',
      videoDetails:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.',
    },
  },
};

export const WithoutVideoDescription: Story = {
  args: {
    video: {
      title: 'Big Buck Bunny with title larger than 3 lines',
      tagline: 'By Blender Foundation',
      linkText: 'Watch on Youtube',
      linkHref: 'https://www.youtube.com/watch?v=YE7VzlLtp-4',
      description:
        'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit aint no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org',
      url: 'https://videos.pexels.com/video-files/20422317/20422317-hd_1920_1080_25fps.mp4',
      thumbnail:
        'https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.jpg?s=2048x2048&w=is&k=20&c=FO-u3p_njEoIh7GusFYgrOo1RxF0EXobx0BXH6vMB4Q=',
    },
  },
};
