import type { Meta, StoryObj } from '@storybook/react';
import { UsedMachineInfo } from './UsedMachineInfo';
import { UsedMachineInfoProps } from './UsedMachineInfo.interface';
import { GalleryImage } from '../gallery';
import { MachineCategory, MachineRating } from '@/components/used-machine-pattern/used-machine-card';
import { LocaleVariants } from '../../interfaces/global-variants';

const meta = {
  title: 'Patterns/UsedMachineInfo',
  component: UsedMachineInfo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof UsedMachineInfo>;

const galleryImages: GalleryImage[] = [
  {
    src: `https://images.unsplash.com/photo-1458571037713-913d8b481dc6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1920`,
    sizes: '(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px',
    alt: `Alt 1`,
    thumbnail: `https://images.unsplash.com/photo-1458571037713-913d8b481dc6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1920`,
  },
  {
    src: `https://global.discourse-cdn.com/flex020/uploads/glideapps/original/2X/4/4936e0f28f79c8a2aa95582741091356d0ed61d8.jpeg`,
    sizes: '(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px',
    alt: `Alt 2`,
    thumbnail: `https://global.discourse-cdn.com/flex020/uploads/glideapps/original/2X/4/4936e0f28f79c8a2aa95582741091356d0ed61d8.jpeg`,
  },
  {
    src: `https://img.freepik.com/premium-photo/photo-random-nature-hd-wallpaper-8k4k_915071-67156.jpg`,
    sizes: '(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px',
    alt: `Alt 3`,
    thumbnail: `https://img.freepik.com/premium-photo/photo-random-nature-hd-wallpaper-8k4k_915071-67156.jpg`,
  },
  {
    src: `https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/800px-Altja_j%C3%B5gi_Lahemaal.jpg`,
    sizes: '(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px',
    alt: `Alt 4`,
    thumbnail: `https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/800px-Altja_j%C3%B5gi_Lahemaal.jpg`,
  },
  {
    src: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zWifWgK-Dbh0IuyJT-LHUnBlgz1j4LQ4Jg&s`,
    sizes: '(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px',
    alt: `Alt 5`,
    thumbnail: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zWifWgK-Dbh0IuyJT-LHUnBlgz1j4LQ4Jg&s`,
  },
  {
    src: `https://w0.peakpx.com/wallpaper/935/576/HD-wallpaper-moorglade-world-space-liquitech-random-nature-abstract.jpg`,
    sizes: '(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px',
    alt: `Alt 6`,
    thumbnail: `https://w0.peakpx.com/wallpaper/935/576/HD-wallpaper-moorglade-world-space-liquitech-random-nature-abstract.jpg`,
  },
  {
    src: `https://img.freepik.com/premium-photo/random-nature-hd-wallpaper-8k4k_1272857-172676.jpg`,
    sizes: '(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px',
    alt: `Alt 7`,
    thumbnail: `https://img.freepik.com/premium-photo/random-nature-hd-wallpaper-8k4k_1272857-172676.jpg`,
  }
]

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: galleryImages,
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
    brand: 'cat',
    isMarine: true,
    description: 'G005893;CAT C7.1;SN: G9R08502;Arrg: 526-7.210;2018;0 V;0 kVA ;0;2.200 rpm;0 Hz;10 hours;condition: pre-owned'
  } as UsedMachineInfoProps
}
