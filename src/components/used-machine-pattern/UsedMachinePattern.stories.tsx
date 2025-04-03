import { useMemo, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { UsedMachinePattern } from './UsedMachinePattern';
import { UsedMachinePatternProps } from './UsedMachinePattern.interface';
import { LocaleVariants } from '../../interfaces/global-variants';
import { MachineCategory, MachineFuel, MachineGenSetType, MachineRating, UsedMachineCardProps } from './used-machine-card';
import { MachineSort, UsedMachineFiltersType } from './used-machine-filters';

const cardsList: UsedMachineCardProps[] = [
  {
    isMarine: true,
    category: MachineCategory.GEN_SET,
    locale: LocaleVariants.DE,
    year: 2020,
    city: 'Berlin',
    country: 'Deutschland',
    postalCode: 28217,
    operatingHours: 10000,
    rating: MachineRating.STAND_BY,
    fuel: MachineFuel.GAS,
    power: 5000,
    name: 'Gen Set Machine 1',
    imageSrc: 'https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61',
    type: MachineGenSetType.MOBILE,
    url: '',
    brand: 'CAT',
  },
  {
    isMarine: true,
    category: MachineCategory.GEN_SET,
    locale: LocaleVariants.DE,
    year: 2020,
    city: 'Berlin',
    country: 'Deutschland',
    postalCode: 28217,
    operatingHours: 10000,
    rating: MachineRating.CONTINUOUS,
    fuel: MachineFuel.GAS,
    power: 2000,
    name: 'Gen Set Machine 2',
    imageSrc: 'https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61',
    type: MachineGenSetType.STATIONARY,
    url: '',
    brand: 'CAT',
  },
  {
    isMarine: true,
    category: MachineCategory.ENGINE,
    locale: LocaleVariants.DE,
    year: 2020,
    city: 'Berlin',
    country: 'Deutschland',
    postalCode: 28217,
    operatingHours: 10000,
    fuel: MachineFuel.DIESEL,
    power: 2000,
    name: 'Engine Machine 1',
    imageSrc: 'https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61',
    url: '',
    brand: 'CAT',
  },
  {
    category: MachineCategory.GEN_SET,
    locale: LocaleVariants.DE,
    year: 2020,
    city: 'Berlin',
    country: 'Deutschland',
    postalCode: 28217,
    operatingHours: 10000,
    rating: MachineRating.PRIME,
    fuel: MachineFuel.DUAL_FUEL,
    power: 3000,
    name: 'Gen Set Machine 3',
    imageSrc: 'https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61',
    type: MachineGenSetType.MOBILE,
    url: '',
    brand: 'CAT',
  },
  {
    isMarine: true,
    category: MachineCategory.GEN_SET,
    locale: LocaleVariants.DE,
    year: 2020,
    city: 'Berlin',
    country: 'Deutschland',
    postalCode: 28217,
    operatingHours: 10000,
    fuel: MachineFuel.DIESEL,
    power: 4000,
    rating: MachineRating.CONTINUOUS,
    name: 'Gen Set Machine 4',
    imageSrc: 'https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61',
    type: MachineGenSetType.STATIONARY,
    url: '',
    brand: 'CAT',
  },
  {
    category: MachineCategory.ACCESSORY,
    locale: LocaleVariants.DE,
    year: 2020,
    city: 'Berlin',
    country: 'Deutschland',
    postalCode: 28217,
    name: 'Accessory',
    imageSrc: 'https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61',
    url: '',
    brand: 'CAT',
  },
  {
    isMarine: true,
    category: MachineCategory.GEN_SET,
    locale: LocaleVariants.DE,
    year: 2020,
    city: 'Berlin',
    country: 'Deutschland',
    postalCode: 28217,
    operatingHours: 10000,
    rating: MachineRating.STAND_BY,
    fuel: MachineFuel.GAS,
    power: 5000,
    name: 'Gen Set Machine 1',
    imageSrc: 'https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61',
    type: MachineGenSetType.MOBILE,
    url: '',
    brand: 'CAT',
  },
  {
    isMarine: true,
    category: MachineCategory.GEN_SET,
    locale: LocaleVariants.DE,
    year: 2020,
    city: 'Berlin',
    country: 'Deutschland',
    postalCode: 28217,
    operatingHours: 10000,
    rating: MachineRating.STAND_BY,
    fuel: MachineFuel.GAS,
    power: 5000,
    name: 'Gen Set Machine 1',
    imageSrc: 'https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61',
    type: MachineGenSetType.MOBILE,
    url: '',
    brand: 'CAT',
  },
  {
    isMarine: true,
    category: MachineCategory.GEN_SET,
    locale: LocaleVariants.DE,
    year: 2020,
    city: 'Berlin',
    country: 'Deutschland',
    postalCode: 28217,
    operatingHours: 10000,
    rating: MachineRating.STAND_BY,
    fuel: MachineFuel.GAS,
    power: 5000,
    name: 'Gen Set Machine 1',
    imageSrc: 'https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61',
    type: MachineGenSetType.MOBILE,
    url: '',
    brand: 'CAT',
  },
  {
    isMarine: true,
    category: MachineCategory.GEN_SET,
    locale: LocaleVariants.DE,
    year: 2020,
    city: 'Berlin',
    country: 'Deutschland',
    postalCode: 28217,
    operatingHours: 10000,
    rating: MachineRating.STAND_BY,
    fuel: MachineFuel.GAS,
    power: 5000,
    name: 'Gen Set Machine 1',
    imageSrc: 'https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61',
    type: MachineGenSetType.MOBILE,
    url: '',
    brand: 'CAT',
  },
  {
    isMarine: true,
    category: MachineCategory.GEN_SET,
    locale: LocaleVariants.DE,
    year: 2020,
    city: 'Berlin',
    country: 'Deutschland',
    postalCode: 28217,
    operatingHours: 10000,
    rating: MachineRating.STAND_BY,
    fuel: MachineFuel.GAS,
    power: 5000,
    name: 'Gen Set Machine 1',
    imageSrc: 'https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61',
    type: MachineGenSetType.MOBILE,
    url: '',
    brand: 'CAT',
  },
  {
    isMarine: true,
    category: MachineCategory.GEN_SET,
    locale: LocaleVariants.DE,
    year: 2020,
    city: 'Berlin',
    country: 'Deutschland',
    postalCode: 28217,
    operatingHours: 10000,
    rating: MachineRating.STAND_BY,
    fuel: MachineFuel.GAS,
    power: 5000,
    name: 'Gen Set Machine 1',
    imageSrc: 'https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61',
    type: MachineGenSetType.MOBILE,
    url: '',
    brand: 'CAT',
  },
  {
    isMarine: true,
    category: MachineCategory.GEN_SET,
    locale: LocaleVariants.DE,
    year: 2020,
    city: 'Berlin',
    country: 'Deutschland',
    postalCode: 28217,
    operatingHours: 10000,
    rating: MachineRating.STAND_BY,
    fuel: MachineFuel.GAS,
    power: 5000,
    name: 'Gen Set Machine 1',
    imageSrc: 'https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61',
    type: MachineGenSetType.MOBILE,
    url: '',
    brand: 'CAT',
  },
];

const mockCardsApi = (filters: UsedMachineFiltersType, currentTotal: number) => {
  let newList = cardsList.filter(({ category }) => category === filters.category);
  if (filters.category !== MachineCategory.ACCESSORY) {
    if (filters.rating && filters.rating.length > 0) {
      newList = newList.filter(({ rating }) => rating && filters.rating?.includes(rating));
    }
    if (filters.fuel && filters.fuel.length > 0) {
      newList = newList.filter(({ fuel }) => fuel && filters.fuel?.includes(fuel));
    }
    if (filters.type && filters.category === MachineCategory.GEN_SET && filters.type.length > 0) {
      newList = newList.filter(({ type }) => type && filters.type?.includes(type));
    }
    if (filters.power) {
      newList = newList.filter(({ power }) => power && power >= filters.power!.min && power <= filters.power!.max)
    }
  }
  if (filters.sort) {
    if (filters.sort === MachineSort.POWER_ASCENDING) {
      newList = newList.sort(({ power: powerA = 0 }, { power: powerB = 0 }) => powerA - powerB)
    } else {
      newList = newList.sort(({ power: powerA = 0 }, { power: powerB = 0 }) => powerB - powerA)
    }
  }
  const total = newList.length;
  newList = newList.slice(0, currentTotal);
  return { cards: newList, total };
}

const meta = {
  title: 'Patterns/UsedMachinePattern',
  component: UsedMachinePattern,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => {
      const [filters, setFilters] = useState<UsedMachineFiltersType>({
        category: MachineCategory.GEN_SET,
        power: { min: 100, max: 10000 },
        type: [],
        sort: undefined,
        rating: [],
        fuel: [],
      });
      const [currentTotal, setCurrentTotal] = useState(10);
      const { cards, total } = useMemo(() => mockCardsApi(filters, currentTotal), [filters, currentTotal]);

      return (
        <Story
          cards={cards}
          total={total}
          filters={filters}
          setFilters={setFilters}
          setCurrentTotal={setCurrentTotal}
          currentTotal={currentTotal}
        />
      );
    }
  ]
} satisfies Meta<typeof UsedMachinePattern>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    locale: LocaleVariants.DE,
    powerOptions: {
      min: 100,
      max: 10000,
      step: 1,
    },
  } as unknown as UsedMachinePatternProps,
  render: (args, { filters, currentTotal, setFilters, cards, total, setCurrentTotal }) => (
    <UsedMachinePattern
      setCurrentTotal={setCurrentTotal}
      currentTotal={currentTotal}
      total={total}
      cards={cards}
      powerOptions={args.powerOptions}
      setFilters={setFilters}
      locale={args.locale}
      filters={filters}
      onContactExpertsClick={() => console.log('click')}
    />
  ),
}
