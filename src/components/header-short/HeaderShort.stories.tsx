import type { Meta, StoryObj } from '@storybook/react';
import { GlobalVariantExtended } from '../../interfaces/global-variants';
import { HeaderShort } from './HeaderShort';
import { HeaderShortProps } from './headershort.interface';

const meta = {
  title: 'Patterns/HeaderShort',
  component: HeaderShort,
  tags: ['autodocs'],
  argTypes: {},
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

export const ComponentWithBackgroundZPS: Story = {
  args: {
    variant: GlobalVariantExtended.ZpsBg,
    tagline: 'Tagline',
    headline: 'Component with background ZPS',
  } as HeaderShortProps,
};

export const ComponentWithBackgroundCat: Story = {
  args: {
    variant: GlobalVariantExtended.CatBg,
    tagline: 'Tagline',
    headline: 'Component with background CAT',
  } as HeaderShortProps,
};
