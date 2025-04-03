import { GlobalVariantExtended, GlobalVariants } from '../interfaces/global-variants';

export const backgroundColor = {
  [GlobalVariantExtended.ZpsBg]: 'zep-bg-gradient-to-r zep-from-[rgb(32,27,52)] zep-to-[rgb(32,23,94)]',
  [GlobalVariantExtended.CatBg]: 'zep-bg-background-dark',
};

export const textColor = {
  [GlobalVariants.Zps]: 'zep-text-primary-default',
  [GlobalVariants.Cat]: 'zep-text-typography-dark-100',
  [GlobalVariantExtended.CatBg]: 'zep-text-typography-light-100',
  [GlobalVariantExtended.ZpsBg]: 'zep-text-typography-light-100',
};
