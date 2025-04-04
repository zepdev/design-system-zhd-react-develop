import { Link, LinkMode, LinkTarget } from '@zepdev/design-system-component-library-react';
import clsx from 'clsx';
import React from 'react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { getUrlWithTrailingSlash } from '../../utils/getUrlWithTrailingSlash';
import { HeaderLongComponent } from '../header-long-component';
import { Layout } from '../layout';
import { RichText } from '../rich-text';
import { Button } from '../zsd-button';
import { ProductHighLightProps } from './product-highlight.interface';

export const ProductHighLight: React.FC<ProductHighLightProps> = ({
  productDetails,
  imageAlt,
  imageSrc,
  buttonText,
  imageAlignment,
  buttonVariant,
  onClick,
  buttonIcon,
  buttonIconPosition = 'left',
  buttonType = 'default',
  variant = GlobalVariants.Zps,
  headline,
  buttonUrl,
  id,
  ...headerProps
}) => {
  const directionClass = imageAlignment === 'right' ? 'md:zep-flex-row-reverse' : 'md:zep-flex-row';
  const marginLeft =
    imageAlignment === 'right' ? 'md:-zep-mr-[114px] xl:-zep-mr-[244px]' : 'md:-zep-ml-[114px] xl:-zep-ml-[244px]';

  return (
    <div className="zep-overflow-hidden">
      <Layout
        id={id}
        className="zep-flex zep-flex-col zep-gap-2.5 sm:zep-gap-3 md:zep-gap-4 xl:zep-overflow-x-visible zep-overflow-x-hidden"
      >
        {headline && <HeaderLongComponent headline={headline} {...headerProps} variant={variant} />}
        <div
          className={clsx(
            marginLeft,
            'zep-flex',
            directionClass,
            'zep-flex-col',
            'xl:zep-gap-2',
            'sm:zep-gap-1.5',
            'zep-gap-1',
          )}
        >
          <div className={clsx('zep-w-full zep-relative')}>
            <img className={clsx('zep-aspect-[4/3]', 'zep-w-full', 'zep-object-cover')} src={imageSrc} alt={imageAlt} />
          </div>
          <div className="zep-px-1 sm:zep-px-1.5 lg:zep-px-2 zep-flex zep-flex-col xl:zep-gap-3 sm:zep-gap-2 zep-gap-1 md:zep-min-w-[35%]">
            <div className="zep-flex zep-flex-col zep-gap-1 sm:zep-gap-1.5 md:zep-gap-1 xl:zep-gap-1.5">
              {productDetails.map((content, index) => {
                return (
                  <div
                    key={index}
                    className="zep-border-b-1 zep-border-b-greyscale-400 last:zep-border-b-[0] first:zep-pt-[0] last:zep-pb-[0] zep-py-1 sm:zep-py-1.5 md:zep-py-1 xl:zep-py-1.5"
                  >
                    <RichText content={content} />
                  </div>
                );
              })}
            </div>
            {buttonText && buttonVariant === 'link' && (
              <Link
                target={buttonUrl?.startsWith('http') ? LinkTarget.Blank : LinkTarget.Self}
                className={variant === GlobalVariants.Zps ? 'zep-text-indigo-500' : 'zep-text-typography-dark-100'}
                label={buttonText}
                mode={LinkMode.Inline}
                icon={buttonIcon}
                iconPlacement={buttonIconPosition === 'left' ? 'before' : 'after'}
                download={buttonType === 'download'}
                href={getUrlWithTrailingSlash(buttonUrl)}
              />
            )}
            {buttonText && buttonVariant !== 'link' && (
              <Button
                icon={buttonIcon}
                iconPosition={buttonIconPosition}
                label={buttonText}
                buttonType={buttonType}
                onClick={onClick}
                variant={buttonVariant}
                href={buttonUrl}
              />
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
};
