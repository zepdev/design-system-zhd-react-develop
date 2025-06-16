import { Meta, StoryObj } from '@storybook/react';
import { CardEventZsd } from './CardEventZsd';
import { CardEventZsdProps } from './CardEventZsd.interface';

const meta = {
  title: 'Components/CardEventZsd',
  component: CardEventZsd,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CardEventZsd>;

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
  } as CardEventZsdProps,
}
