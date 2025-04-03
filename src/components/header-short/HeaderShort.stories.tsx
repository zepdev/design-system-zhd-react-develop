import type { Meta, StoryObj } from '@storybook/react';
import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';
import { HeaderShort } from './HeaderShort';
import { HeaderShortProps } from './headershort.interface';

const meta = {
  title: 'Patterns/HeaderShort',
  component: HeaderShort,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: [...Object.keys(GlobalVariants), 'default'],
      },
    },
  },
} satisfies Meta<typeof HeaderShort>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: GlobalVariants.Zps,
    headline: 'Headline',
    tagline: 'Tagline',
    showArrow: true,
  } as HeaderShortProps,
};

export const LongHeadline: Story = {
  args: {
    variant: GlobalVariants.Zps,
    headline: 'Headline is longer than expected, This is just a long sample.',
    tagline: 'Tagline',
    showArrow: true,
  } as HeaderShortProps,
};

export const ComponentWithoutTagline: Story = {
  args: {
    variant: GlobalVariants.Zps,
    headline: 'Component without Tagline',
    showArrow: true,
  } as HeaderShortProps,
};

export const ComponentWithoutArrow: Story = {
  args: {
    variant: GlobalVariants.Zps,
    tagline: 'Tagline',
    headline: 'Component without Arrow',
    showArrow: false,
  } as HeaderShortProps,
};

export const ComponentWithBackgroundZPS: Story = {
  args: {
    variant: GlobalVariantExtended.ZpsBg,
    tagline: 'Tagline',
    headline: 'Component with background ZPS',
    showArrow: false,
  } as HeaderShortProps,
};

export const ComponentWithBackgroundCat: Story = {
  args: {
    variant: GlobalVariantExtended.CatBg,
    tagline: 'Tagline',
    headline: 'Component with background CAT',
    showArrow: false,
  } as HeaderShortProps,
};
