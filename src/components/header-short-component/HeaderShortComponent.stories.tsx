import type { Meta, StoryObj } from '@storybook/react';
import { HeaderShortComponent } from './HeaderShortComponent';
import { HeaderShortComponentProps } from './HeaderShortComponent.interface';

const meta = {
  title: 'Components/HeaderShortComponent',
  component: HeaderShortComponent,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof HeaderShortComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: 'Headline',
    tagline: 'Tagline',
    showArrow: true,
  } as HeaderShortComponentProps,
};

export const LongHeadline: Story = {
  args: {
    headline: 'Headline is longer than expected, This is just a long sample.',
    tagline: 'Tagline',
    showArrow: true,
  } as HeaderShortComponentProps,
};

export const ComponentWithoutTagline: Story = {
  args: {
    headline: 'Component without Tagline',
    showArrow: true,
  } as HeaderShortComponentProps,
};

export const ComponentWithoutArrow: Story = {
  args: {
    tagline: 'Tagline',
    headline: 'Component without Arrow',
    showArrow: false,
  } as HeaderShortComponentProps,
};
