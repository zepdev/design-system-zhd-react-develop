import type { Meta, StoryObj } from '@storybook/react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { HeaderShortComponent } from './HeaderShortComponent';
import { HeaderShortComponentProps } from '@/components/header-short-component/HeaderShortComponent.interface';

const meta = {
  title: 'Components/HeaderShortComponent',
  component: HeaderShortComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: [...Object.keys(GlobalVariants), 'default'],
      },
    },
  },
} satisfies Meta<typeof HeaderShortComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: GlobalVariants.Zps,
    headline: 'Headline',
    tagline: 'Tagline',
    showArrow: true,
  } as HeaderShortComponentProps,
};

export const LongHeadline: Story = {
  args: {
    variant: GlobalVariants.Zps,
    headline: 'Headline is longer than expected, This is just a long sample.',
    tagline: 'Tagline',
    showArrow: true,
  } as HeaderShortComponentProps,
};

export const ComponentWithoutTagline: Story = {
  args: {
    variant: GlobalVariants.Zps,
    headline: 'Component without Tagline',
    showArrow: true,
  } as HeaderShortComponentProps,
};

export const ComponentWithoutArrow: Story = {
  args: {
    variant: GlobalVariants.Zps,
    tagline: 'Tagline',
    headline: 'Component without Arrow',
    showArrow: false,
  } as HeaderShortComponentProps,
};
