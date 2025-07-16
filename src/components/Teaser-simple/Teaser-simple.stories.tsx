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
    teaserText: 'Sie brauchen unterstützung? Wir helfen ihnen gerne!',
    buttonText: 'Kontakieren Sie unsere Experten',
    buttonTitle: 'button title',
  } as TeaserSimpleProps,
};

export const WithIcon: Story = {
  args: {
    teaserText: 'Sie brauchen unterstützung? Wir helfen ihnen gerne!',
    buttonText: 'Download',
    buttonTitle: 'button title',
    icon: 'download',
    iconPosition: 'right',
  } as TeaserSimpleProps,
};
