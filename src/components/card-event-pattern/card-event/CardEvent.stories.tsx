import type { Meta, StoryObj } from '@storybook/react';
import { CardEvent } from './CardEvent';
import { CardEventProps } from './card-event.interface';

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
    imageSrc:
      'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    imageAlt: 'construction site',
    headline: 'Headline',
    description:
      'Lorem Ipsum is simpdly dummy text of the printing and Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of the printing andLorem Ipsum is simply dummy text of the printing andLorem Ipsum is simply dummy text of the printing andLorem Ipsum is simply dummy text of the printing andLorem Ipsum is simply dummy text of the printing andLorem Ipsum is simply dummy text of the prinhtin  andLorem Ipsum is simply dummy text of the printing and the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer',
    location: 'Berlin',
    date: '19.09.2024',
    linkSrc: 'https://www.zeppelin.com',
    linkLabel: 'Click me',
  } as CardEventProps,
};
