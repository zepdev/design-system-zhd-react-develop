import type { Meta, StoryObj } from '@storybook/react';
import { InstagramFeed } from './InstagramFeed';
import { InstagramFeedProps } from './InstagramFeed.interface';

const meta = {
  title: 'Patterns/InstagramFeed',
  component: InstagramFeed,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof InstagramFeed>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: 'Headline optional',
    tagline: 'Tagline optional',
    linkText: 'click me',
    linkHref: 'https://www.google.com',
    headerButtonIcon: 'external-link',
    cookiesResetLabel: 'Reset Cookies',
    cookiesLayerDescription: 'This video requires cookies to be enabled. Please accept cookies to proceed.',
    feed: Array.from({ length: 6 }).map(() => ({ src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1280px-Placeholder_view_vector.svg.png', alt: 'placeholder' }))
  } as InstagramFeedProps,
}
