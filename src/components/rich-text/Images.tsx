import { FC } from 'react';
import { ImagesProps } from './RichText.interface';

export const Images: FC<ImagesProps> = ({ images }) => {
  return (
    <div className="zep-inline-flex sm:zep-flex-row sm:zep-flex zep-flex-col sm:zep-flex-wrap sm:zep-gap-y-3 sm:zep-gap-x-2 zep-gap-1">
      {images.map(({ src, alt }) => (
        <div className="zep-inline-block zep-grow zep-shrink first-of-type:zep-basis-full sm:zep-basis-[calc(50%-16px)] zep-w-full zep-basis-full zep-aspect-[16/9] zep-object-cover">
          <img className="zep-max-w-full zep-h-auto" src={src} alt={alt} />
        </div>
      ))}
    </div>
  );
};
