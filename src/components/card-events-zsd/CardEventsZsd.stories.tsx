import { Meta, StoryObj } from '@storybook/react';
import { CardEventsZsd } from './CardEventsZsd';
import { CardEventsZsdProps } from './CardEventsZsd.interface';
import { CardEventZsdProps } from '@/components/card-events-zsd/card-event/CardEventZsd.interface';

const card: CardEventZsdProps = {
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
};

const meta = {
  title: 'Patterns/CardEventsZsd',
  component: CardEventsZsd,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CardEventsZsd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cards: Array.from({ length: 32 }).map(() => card),
    headline: 'Headline',
    tagline: 'Tagline',
    linkText: 'Standalone Link',
    type: 'link',
  } as CardEventsZsdProps,
};
