import type { Meta, StoryObj } from '@storybook/react';
import zeptemp from '../../assets/zeptemp.jpeg';
import { Articles } from './Articles';
import { ArticlesProps } from './articles.interface';

const meta = {
  title: 'Patterns/Articles',
  component: Articles,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Articles>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: 'Headline',
    tagline: 'Tagline',
    linkText: 'standalone link',
    linkHref: 'https://www.google.com/',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.',
    articles: [
      {
        title: 'Technische Kompetenz im Food Bereich',
        image: zeptemp,
        chipText: 'CHEMIE | 18.01.2024',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        linkUrl: 'https://www.google.com/',
        linkText: 'Zur Publikation',
      },
    ],
  } as ArticlesProps,
};

export const Items11: Story = {
  args: {
    headline: 'Headline',
    tagline: 'Tagline',
    linkText: 'standalone link',
    linkHref: 'https://www.google.com/',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.',

    articles: Array.from({ length: 11 }, (_, index) => ({
      title: 'Technische Kompetenz im Food Bereich',
      image: zeptemp,
      chipText: (index + 1).toString(), // chipText values: "1", "2", ..., "40"
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      linkUrl: 'https://www.google.com/',
      linkText: 'Zur Publikation',
    })),
  } as ArticlesProps,
};

export const MultipleItems: Story = {
  args: {
    headline: 'Headline',
    tagline: 'Tagline',
    linkText: 'standalone link',
    linkHref: 'https://www.google.com/',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.',

    articles: Array.from({ length: 40 }, (_, index) => ({
      title: 'Technische Kompetenz im Food Bereich',
      image: zeptemp,
      chipText: (index + 1).toString(), // chipText values: "1", "2", ..., "40"
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      linkUrl: 'https://www.google.com/',
      linkText: 'Zur Publikation',
    })),
  } as ArticlesProps,
};
