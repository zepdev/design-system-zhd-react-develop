import { FunctionalIcon } from '@zepdev/design-system-component-library-react';
import clsx from 'clsx';
import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { GlobalVariants } from '../../interfaces/global-variants';
import { GalleryProps } from './gallery.interface';

export const Gallery: React.FC<GalleryProps> = ({ items, variant = GlobalVariants.Zps, className }) => {
  return (
    <div className={clsx('zep-w-full zep-h-[300px] sm:zep-h-[500px] md:zep-h-[600px]', className)}>
      <Carousel
        hasIndexBoard={false}
        playIcon={false}
        hasLeftButton={items.length > 1 && 'centerLeft'}
        hasRightButton={items.length > 1 && 'centerRight'}
        shouldLazyLoad
        objectFit="cover"
        images={items}
        thumbnailWidth="20%"
        thumbnailHeight="70px"
        className="zep-w-full"
        style={{ background: 'white', height: 'inherit' }}
        leftIcon={
          <div
            className={clsx(
              'zep-flex zep-justify-center zep-items-center zep-rounded-1 zep-shadow-md zep-p-0.5',
              variant === GlobalVariants.Zps ? 'zep-bg-primary-default' : 'zep-bg-secondary-default',
            )}
          >
            <FunctionalIcon
              size={32}
              name="chevron-mini-left"
              color={variant === GlobalVariants.Zps ? '#ffffff' : 'rgb(38,38,38)'}
            />
          </div>
        }
        rightIcon={
          <div
            className={clsx(
              'zep-flex zep-justify-center zep-items-center zep-rounded-1 zep-shadow-md zep-p-0.5',
              variant === GlobalVariants.Zps ? 'zep-bg-primary-default' : 'zep-bg-secondary-default',
            )}
          >
            <FunctionalIcon
              size={32}
              name="chevron-mini-right"
              color={variant === GlobalVariants.Zps ? '#ffffff' : 'rgb(38,38,38)'}
            />
          </div>
        }
      />
    </div>
  );
};
