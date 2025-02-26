import type { Meta, StoryObj } from '@storybook/react';
import { PageEntry } from './PageEntry';
import { PageEntryProps } from './page-entry.interface';

const meta = {
  title: 'Patterns/PageEntry',
  component: PageEntry,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof PageEntry>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: 'Page Entry Headline',
    tagline: 'ZSD',
    description:
      'Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of',
    primaryButtonText: 'Button',
    primaryButtonClick: () => null,
    secondaryButtonClick: () => null,
    secondaryButtonText: 'Button',
    media: [
      {
        type: 'image',
        source: 'https://d4n0y8dshd77z.cloudfront.net/listings/54708513/lg/img-1691658124-18e84fbbc736.jpg',
        thumbnail: 'https://d4n0y8dshd77z.cloudfront.net/listings/54708513/lg/img-1691658124-18e84fbbc736.jpg',
      },
      {
        type: 'image',
        source: 'https://cdn.machineseeker.com/data/listing/img/vga/ms/64/67/16411717-01.jpg?v=1719651454',
        thumbnail: 'https://cdn.machineseeker.com/data/listing/img/vga/ms/64/67/16411717-01.jpg?v=1719651454',
      },
      {
        type: 'video',
        source: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        thumbnail: 'https://d4n0y8dshd77z.cloudfront.net/listings/48835610/lg/j07uCsOwSDcSScqLU07V.jpg',
      },
      {
        type: 'video',
        source: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        thumbnail:
          'https://www.njuskalo.hr/image-w920x690/bageri-gusjenicari/bager-gusjenicar-caterpillar-330f-ln-2016-cat-330-slika-169039563.jpg',
      },
    ],
  } as PageEntryProps,
};

export const OneItemImage: Story = {
  args: {
    headline: 'Headline',
    tagline: 'ZSD',
    description: 'Description',
    primaryButtonText: 'Button',
    primaryButtonClick: () => null,
    secondaryButtonClick: () => null,
    secondaryButtonText: 'Button',
    media: [
      {
        type: 'image',
        source: 'https://d4n0y8dshd77z.cloudfront.net/listings/54708513/lg/img-1691658124-18e84fbbc736.jpg',
        thumbnail: 'https://d4n0y8dshd77z.cloudfront.net/listings/54708513/lg/img-1691658124-18e84fbbc736.jpg',
      },
    ],
  } as PageEntryProps,
};

export const OneItemVideo: Story = {
  args: {
    headline: 'Headline',
    tagline: 'ZSD',
    description: 'Description',
    primaryButtonText: 'Button',
    primaryButtonClick: () => null,
    secondaryButtonClick: () => null,
    secondaryButtonText: 'Button',
    media: [
      {
        type: 'video',
        source: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        thumbnail:
          'https://www.njuskalo.hr/image-w920x690/bageri-gusjenicari/bager-gusjenicar-caterpillar-330f-ln-2016-cat-330-slika-169039563.jpg',
      },
    ],
  } as PageEntryProps,
};
