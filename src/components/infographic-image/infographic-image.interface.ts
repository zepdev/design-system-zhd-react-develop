export interface Point {
  x: number;
  y: number;
  description: string;
  label: string;
  step?: string;
}

export interface InfographicImageProps {
  imageUrl: string;
  imageAlt?: string;
  points: Point[];
  className?: string;
}
