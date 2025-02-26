import { Meta, StoryObj } from '@storybook/react';
import { CardEvents } from './CardEvents';
import { CardEventsProps } from './CardEvents.interface';

const card = {
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
  title: 'Patterns/CardEvents',
  component: CardEvents,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CardEvents>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cards: Array.from({ length: 32 }).map(() => card),
    total: 32,
    headline: 'Headline',
    tagline: 'Tagline',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.',
    linkText: 'Standalone Link',
    type: 'link',
    currentPage: 1,
    setCurrentPage: (page: number) => console.log(page),
  } as CardEventsProps,
};
