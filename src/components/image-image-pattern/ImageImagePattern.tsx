import React from 'react';
import clsx from 'clsx';
import { GlobalVariants } from '../../interfaces/global-variants';
import { HeaderLongComponent } from '../header-long-component';
import { ImageImageComponent } from '../image-image/ImageImage';
import { ImageImagePatternProps } from './image-image-pattern.interface';
import { Layout } from '@/components/layout';

export const ImageImagePattern: React.FC<ImageImagePatternProps> = ({
  items,
  headline,
  variant = GlobalVariants.Zps,
  id,
  ...headerProps
}: ImageImagePatternProps) => {
  return (
    <Layout
      id={id}
      testId="zep-imageImage-pattern"
      className={clsx(
        'zep-flex',
        'zep-flex-col',
        'zep-gap-2',
        'sm:zep-gap-2.5',
        'xl:zep-gap-4',
        'zep-py-[0px]',
      )}
    >
      {headline && <HeaderLongComponent data-testid="zep-imageImage-pattern-header" headline={headline} {...headerProps} variant={variant} />}
      { items.largeImageSrc  &&
        <ImageImageComponent
        data-testid="zep-imageImage-pattern-image"
        largeImageSrc={items.largeImageSrc}
        largeImageAlt={items.largeImageAlt}
        smallImageSrc={items.smallImageSrc}
        smallImageAlt={items.smallImageAlt}
      />
    }

    </Layout>
  );
};
