import { Meta, StoryObj } from '@storybook/react';
import { CardEvent } from './CardEvent';
import { CardEventProps } from './CardEvent.interface';

const meta = {
  title: 'Components/CardEvent',
  component: CardEvent,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CardEvent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    dates: {
      startDay: 5,
      endDay: 8,
      month: 'März',
      year: 2024,
    },
    location: { city: 'Rom', country: 'Italien' },
    headline: 'RMI Analytics’ World Malt & Beer Conference',
    description: 'Internationale Konferenz für Gerste, Malz und Bier mit Zeppelin Systems als Silber...',
    imageSrc: 'https://www.brewer-world.com/wp-content/uploads/2019/08/RMI.jpg',
    imageAlt: '',
    linkUrl: '',
    linkLabel: 'Weitere Informationen',
    externalLinkUrl: '',
    externalLinkLabel: 'Zur Messe Website',
  } as CardEventProps,
}
