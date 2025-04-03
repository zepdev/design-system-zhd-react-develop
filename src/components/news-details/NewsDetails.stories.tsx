import type { Meta, StoryObj } from '@storybook/react';
import { NewsDetails } from './NewsDetails';
import { NewsDetailsProps } from './NewsDetails.interface';
import { mockRichText } from '../../utils/mocks';

const meta = {
  title: 'Patterns/NewsDetails',
  component: NewsDetails,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NewsDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageSrc: './assets/image-4_3.png',
    imageAlt: 'image',
    imageDescription: 'Image Description',
    headline: 'Headline optional',
    content: mockRichText,
  } as NewsDetailsProps
}
