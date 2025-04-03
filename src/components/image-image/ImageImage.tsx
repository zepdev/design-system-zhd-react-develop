import clsx from 'clsx';
import { ImageImageProps } from './image-image.interface';

export const ImageImageComponent: React.FC<ImageImageProps> = ({
  smallImageSrc,
  smallImageAlt,
  largeImageSrc,
  largeImageAlt,
}: ImageImageProps) => {
  return (
    <div data-testid="zep-image-image-component" className="md:zep-flex zep-w-full zep-gap-0.5">
      {/* Small Image */}
      {smallImageSrc && (
        <div
          data-testid="zep-small-image"
          className="zep-hidden md:zep-block md:zep-w-1/5 md:zep-mt-1 xl:zep-mt-2"
        >
          <img
            src={smallImageSrc}
            alt={smallImageAlt}
            className="zep-h-auto zep-aspect-[4/3] zep-w-full zep-object-cover"
          />
        </div>
      )}

      {/* large Image */}
      <div
        className={clsx(
          'zep-overflow-x-auto',
          'md:zep-overflow-x-hidden',
          smallImageSrc ? 'md:zep-w-4/5' : 'md:zep-w-full',
        )}
      >
        <div className="md:zep-max-w-full">
          <img
            src={largeImageSrc}
            alt={largeImageAlt}
            className="zep-h-auto zep-w-full zep-min-w-[768px]"
          />
        </div>
      </div>
    </div>
  );
};
