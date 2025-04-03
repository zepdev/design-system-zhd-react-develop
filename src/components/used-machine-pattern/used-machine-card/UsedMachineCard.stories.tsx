import { Meta, StoryObj } from '@storybook/react';
import { UsedMachineCard } from './UsedMachineCard';
import { MachineCategory, MachineRating, UsedMachineCardProps } from './UsedMachineCard.interface';
import { LocaleVariants } from '../../../interfaces/global-variants';

const meta = {
  title: 'Components/UsedMachineCard',
  component: UsedMachineCard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof UsedMachineCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: (Story) => (
    <div className="xl:zep-p-[122px] md:zep-p-4 sm:zep-p-1.5 zep-p-1 zep-bg-greyscale-400">
      <Story />
    </div>
  ),
  args: {
    imageSrc: './assets/image-4_3.png',
    power: 260,
    rating: MachineRating.STAND_BY,
    operatingHours: 50,
    city: 'Bremen',
    country: 'Deutschland',
    postalCode: 28217,
    category: MachineCategory.GEN_SET,
    locale: LocaleVariants.DE,
    year: 2018,
    name: 'C7.1',
    isMarine: true,
    url: '',
    brand: 'CAT',
  } as UsedMachineCardProps,
}
