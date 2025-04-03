import type { Meta, StoryObj } from '@storybook/react';

import { GlobalVariants } from '../../interfaces/global-variants';
import { FeedbackComponent } from './FeedbackComponent';
import { FeedbackProps } from './feedback.interface';

const meta = {
  title: 'Components/FeedbackComponent',
  component: FeedbackComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: Object.keys(GlobalVariants),
      },
    },
  },
} satisfies Meta<typeof FeedbackComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: 'Wie gefallen Ihnen die iNhalte Dieser Seite?',
    likeText: 'Gut',
    dislikeText: 'Scheine',
    variant: GlobalVariants.Zps,
  } as FeedbackProps,
};
