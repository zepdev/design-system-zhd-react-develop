import { Accordion } from '@zepdev/design-system-component-library-react';
import clsx from 'clsx';
import React from 'react';
import { HeaderLongComponent } from '../header-long-component';
import { Layout } from '../layout';
import { RichText } from '../rich-text';
import { Button } from '../zsd-button/ZsdButton';
import { MediaTextProductProps } from './mediatext-product.interface';

export const MediaTextProduct: React.FC<MediaTextProductProps> = ({
  description,
  productDescription = [],
  headline,
  imageSrc,
  imageAlt,
  labelPrimary,
  buttonAction,
  buttonUrl,
  iconPrimary,
  iconPrimaryPosition,
  accordionContent = [],
  ...headerLongProps
}) => {
  return (
    <Layout className={clsx('zep-flex', 'zep-flex-col', 'md:zep-gap-4', 'sm:zep-gap-3', 'zep-gap-2.5')}>
      {headline && <HeaderLongComponent headline={headline} description={description} {...headerLongProps} />}
      <div className="zep-grid zep-w-full md:zep-flex zep-gap-1.5 sm:zep-gap-2.5 xl:zep-gap-5">
        <div style={{ height: 'fit-content' }} className="md:zep-w-5/12 zep-inline-grid md:zep-flex zep-aspect-16.9">
          <img className=" zep-w-full" src={imageSrc} alt={imageAlt} />
        </div>
        <div className="md:zep-w-7/12 md:zep-flex-1 zep-w-full md:zep-flex-col">
          {productDescription.length > 0 && (
            <div data-testid="media-text-small-description" className="zep-mb-1">
              <RichText content={productDescription} />
            </div>
          )}
          {/* Accordion */}
          {accordionContent.length > 0 && (
            <Accordion
              className={'zep-text-typography-dark-100'}
              items={accordionContent.map((item) => ({
                title: item.title,
                content: (
                  <div className="zep-relative">
                    <RichText className="lg:zep-mx-[0]" content={item.accordionContent} />
                  </div>
                ),
              }))}
            />
          )}

          {/* Button */}
          {labelPrimary && buttonUrl && (
            <a
              className="zep-max-w-max"
              href={buttonUrl}
              target={buttonAction === 'open-internal-link' ? '_self' : '_blank'}
              download={buttonAction === 'download-file'}
              rel="noreferrer"
            >
              <Button icon={iconPrimary} iconPosition={iconPrimaryPosition} label={labelPrimary} />
            </a>
          )}
        </div>
      </div>
    </Layout>
  );
};
