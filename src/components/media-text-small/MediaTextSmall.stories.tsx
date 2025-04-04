import { Meta, StoryObj } from '@storybook/react';
import { MediaTextSmall } from './mediaTextSmall';


const meta = {
    title: 'Components/MediaTextSmall',
    component: MediaTextSmall,
    tags: ['autodocs'],
    argTypes: {
        content: {
        control: {
            type: 'object',
        },
        },
    },
    } satisfies Meta<typeof MediaTextSmall>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        headline: 'Headline',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet feugiat egestas elementum convallis pretium pellentesque.',
        orderedLists: ['Lorem Ipsum dolor sit amet', 'Lorem Ipsum dolor sit amet', 'Lorem Ipsum dolor sit amet', 'Lorem Ipsum dolor sit amet', 'Lorem Ipsum dolor sit amet'],
        imageAlt: 'image alt',
        imageSrc: './assets/image-4_3.png',
    },
};
