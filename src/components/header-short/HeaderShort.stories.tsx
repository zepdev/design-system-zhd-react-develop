import type { Meta, StoryObj } from '@storybook/react';
import { HeaderShort } from './HeaderShort';
import { HeaderShortProps } from './headershort.interface';

const meta = {
  title: 'Patterns/HeaderShort',
  component: HeaderShort,
  tags: ['autodocs'],
  argTypes: {
    backgroundVariant: {
      control: 'select',
      options: ['white', 'gray'],
    },
  },
} satisfies Meta<typeof HeaderShort>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: 'Headline',
    tagline: 'Tagline',
  } as HeaderShortProps,
};

export const LongHeadline: Story = {
  args: {
    headline: 'Headline is longer than expected, This is just a long sample.',
    tagline: 'Tagline',
  } as HeaderShortProps,
};

export const ComponentWithoutTagline: Story = {
  args: {
    headline: 'Component without Tagline',
  } as HeaderShortProps,
};

export const ComponentWithoutArrow: Story = {
  args: {
    tagline: 'Tagline',
    headline: 'Component without Arrow',
  } as HeaderShortProps,
};

export const ComponentWithGrayBackground: Story = {
  args: {
    backgroundVariant: 'gray',
    tagline: 'Tagline',
    headline: 'Component with gray background',
  } as HeaderShortProps,
};

export const ComponentWithWhiteBackground: Story = {
  args: {
    backgroundVariant: 'white',
    tagline: 'Tagline',
    headline: 'Component with white background',
  } as HeaderShortProps,
};
