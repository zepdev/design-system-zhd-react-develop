import type { Meta, StoryObj } from '@storybook/react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { InfographicImagePattern } from './InfographicImagePattern';
import { InfographicImagePatternProps } from './infographic-image-pattern.interface';

const meta = {
  title: 'Patterns/InfographicImagePattern',
  component: InfographicImagePattern,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: Object.keys(GlobalVariants),
      },
    },
  },
} satisfies Meta<typeof InfographicImagePattern>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: GlobalVariants.Zps,
    header: {
      headline: 'Die Funktionsweise der Unterbrechungsfreien Stromversorgung (USV) einfach erklärt',
      tagline: 'Zeppelin Power Systems Lösungen für STrom & Wärme',
      type: 'primary-button',
      linkHref: '',
      linkText: 'Kontaktieren Sie unsere Experten',
    },
    infographic: {
      imageUrl:
        'https://img.buzzfeed.com/buzzfeed-static/static/2017-12/22/11/asset/buzzfeed-prod-fastlane-01/sub-buzz-13082-1513961489-5.jpg?output-format=auto&output-quality=auto',
      imageAlt: 'Image alt',
      points: [
        { x: 20, y: 20, description: 'Tooltip content', label: 'Label' },
        { x: 40, y: 30, description: 'Tooltip content', label: 'Label' },
        { x: 15, y: 80, description: 'Tooltip content', label: 'Label' },
        { x: 85, y: 70, description: 'Tooltip content', label: 'Label' },
      ],
    },
  } as unknown as InfographicImagePatternProps,
};
