import { Meta, StoryObj } from '@storybook/react';
import { MediaTextSmall } from './mediaTextSmall';
import { mockRichText } from '../../utils/mocks';


const meta = {
    title: 'Components/MediaTextSmall',
    component: MediaTextSmall,
    tags: ['autodocs'],
    argTypes: {},
    } satisfies Meta<typeof MediaTextSmall>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        headline: 'Headline',
        description: mockRichText,
        imageAlt: 'image alt',
        imageSrc: './assets/image-4_3.png',
    },
};
