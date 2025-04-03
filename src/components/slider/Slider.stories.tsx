import { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';
import { SliderProps } from './Slider.interface';

const meta = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    value: {
      min: 0,
      max: 100,
    },
    label: 'Label',
  } as SliderProps,
}
