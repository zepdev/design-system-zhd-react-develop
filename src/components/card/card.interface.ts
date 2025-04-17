export interface CardProps {
  imageSrc: string;
  imageAlt?: string;
  tagline?: string;
  title: string;
  description?: string;
  linkLabel?: string;
  linkSrc?: string;
  linkType?: 'internal-link' | 'external-link' | 'download' | 'none';
  gtmHeadline?: string;
  gtmid?: string;
  url: string;
}
