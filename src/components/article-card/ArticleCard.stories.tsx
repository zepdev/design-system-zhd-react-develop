import type { Meta, StoryObj } from '@storybook/react';
import zeptemp from '../../assets/zeptemp.jpeg';
import { ArticleCard } from './ArticleCard';
import { ArticleCardProps } from './article-card.interface';

const meta = {
  title: 'Components/ArticleCard',
  component: ArticleCard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ArticleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    article: {
      title: 'Technische Kompetenz im Food Bereich',
      image: zeptemp,
      chipText: 'CHEMIE | 18.01.2024',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      linkUrl: 'https://www.google.com/',
      linkText: 'Zur Publikation',
    },
  } as ArticleCardProps,
};
