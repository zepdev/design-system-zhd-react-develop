import { Meta, StoryObj } from '@storybook/react';
import { Scrollbar } from './Scrollbar';
import { ScrollbarProps } from './Scrollbar.interface';

const meta = {
  title: 'Components/Scrollbar',
  component: Scrollbar,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Scrollbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HorizontalScroll: Story = {
  args: {
    controlId: 'story-scrollbar',
    scrollOrientation: 'horizontal',
    className: 'zep-flex zep-gap-2',
    children: (
      <>
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="zep-bg-background-dark zep-shrink-0 zep-h-[300px] zep-w-[300px] zep-p-2 zep-text-greyscale-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at orci facilisis, varius velit a, gravida metus. Cras fringilla, augue vitae mattis hendrerit, leo sem aliquet sapien, vel rhoncus orci sem in dui. Morbi congue accumsan gravida
          </div>
        ))}
      </>
    )
  } as ScrollbarProps,
};

export const VerticalScroll: Story = {
  args: {
    controlId: 'story-scrollbar',
    scrollOrientation: 'vertical',
    className: 'zep-flex zep-flex-col zep-gap-2 zep-h-[500px]',
    children: (
      <>
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="zep-bg-background-dark zep-min-h-[128px] zep-shrink-0 zep-h-[300px] zep-w-[300px] zep-p-2 zep-text-greyscale-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at orci facilisis, varius velit a, gravida metus. Cras fringilla, augue vitae mattis hendrerit, leo sem aliquet sapien, vel rhoncus orci sem in dui. Morbi congue accumsan gravida
          </div>
        ))}
      </>
    )
  } as ScrollbarProps,
};

export const BothScrolls: Story = {
  args: {
    controlId: 'story-scrollbar',
    scrollOrientation: 'both',
    className: 'zep-flex zep-gap-2 zep-h-[300px] zep-flex-row zep-py-2',
    children: (
      <>
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="zep-bg-background-dark zep-shrink-0 zep-h-[300px] zep-w-[300px] zep-p-2 zep-text-greyscale-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at orci facilisis, varius velit a, gravida metus. Cras fringilla, augue vitae mattis hendrerit, leo sem aliquet sapien, vel rhoncus orci sem in dui. Morbi congue accumsan gravida
          </div>
        ))}
      </>
    )
  } as ScrollbarProps,
};
