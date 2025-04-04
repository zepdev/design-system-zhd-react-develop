import { GlobalVariants } from 'src/interfaces/global-variants';

export interface PartnerCommunicationProps {
  headline: string;
  partners?: { image: string; imageAlt: string }[];
  variant?: GlobalVariants;
  id?: string;
}
