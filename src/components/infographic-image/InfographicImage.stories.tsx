import type { Meta, StoryObj } from '@storybook/react';
import { InfographicImage } from './InfographicImage';
import { InfographicImageProps } from './infographic-image.interface';

const meta = {
  title: 'Components/InfographicImage',
  component: InfographicImage,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof InfographicImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <button>
        <Story />
      </button>
    ),
  ],
  args: {
    imageUrl:
      'https://img.buzzfeed.com/buzzfeed-static/static/2017-12/22/11/asset/buzzfeed-prod-fastlane-01/sub-buzz-13082-1513961489-5.jpg?output-format=auto&output-quality=auto',
    imageAlt: 'Image alt',
    points: [
      { x: 20, y: 20, description: 'Tooltip content', label: 'Label' },
      { x: 40, y: 30, description: 'Tooltip content', label: 'Label' },
      { x: 15, y: 80, description: 'Tooltip content', label: 'Label' },
      { x: 85, y: 70, description: 'Tooltip content', label: 'Label' },
    ],
  } as InfographicImageProps,
};

export const WithSteps: Story = {
  decorators: [
    (Story) => (
      <button>
        <Story />
      </button>
    ),
  ],
  args: {
    imageUrl:
      'https://img.buzzfeed.com/buzzfeed-static/static/2017-12/22/11/asset/buzzfeed-prod-fastlane-01/sub-buzz-13082-1513961489-5.jpg?output-format=auto&output-quality=auto',
    imageAlt: 'Image alt',
    points: [
      { x: 20, y: 20, description: 'Tooltip content', label: 'Label', step: '1' },
      { x: 40, y: 30, description: 'Tooltip content', label: 'Label', step: '2' },
      { x: 15, y: 80, description: 'Tooltip content', label: 'Label', step: '3' },
      { x: 85, y: 70, description: 'Tooltip content', label: 'Label', step: '4' },
    ],
  } as InfographicImageProps,
};
