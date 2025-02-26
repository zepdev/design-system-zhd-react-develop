import type { Meta, StoryObj } from '@storybook/react';
import { TeaserSimple } from './Teaser-simple';
import { TeaserSimpleProps } from './teaser-simple.interface';

const meta = {
  title: 'Components/TeaserSimple',
  component: TeaserSimple,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TeaserSimple>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    teaserText: 'Dürfen wir Sie bei der Lösungsfindung unterstützen?',
    buttonText: 'Kontaktanfrage stellen',
    buttonTitle: 'button title',
  } as TeaserSimpleProps,
};
