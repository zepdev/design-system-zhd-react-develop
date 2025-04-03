import { Spacing } from '@zepdev/design-system-component-library-react';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import { createContext, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';
import { backgroundColor } from '../../utils/commonCSS';
import { RichText } from '../rich-text';
import { Button, ZpsButtonVariant } from '../zps-button';
import { MediaTextBodyProps, MediaTextContentProps, MediaTextImageProps } from './MediaText.interface';

const MediaTextContext = createContext({
  imageAlignment: 'left',
  variant: GlobalVariants.Zps,
});
export const useMediaTextContext = () => useContext(MediaTextContext);

const mediaTextTaglineVariants = {
  [GlobalVariants.Zps]: ['zep-text-typography-brand-steel'],
  [GlobalVariants.Cat]: ['zep-text-typography-light-70 zep-opacity-70'],
};

const mediaTextTaglines = cva([`zep-typography-tagline`], {
  variants: {
    variant: mediaTextTaglineVariants,
  },
  defaultVariants: {
    variant: GlobalVariants.Zps,
  },
});

const MediaText = ({
  imageAlignment = 'left',
  variant = GlobalVariants.Zps,
  headline = '',
  tagline = '',
  content,
  labelSecondary,
  labelPrimary,
  onClickSecondary,
  onClickPrimary,
  src,
  alt,
  urlPrimary,
  urlSecondary,
  iconPrimaryPosition,
  iconSecondaryPosition,
  iconPrimary,
  iconSecondary,
}: MediaTextContentProps) => {
  return (
    <MediaTextContext.Provider value={{ imageAlignment, variant }}>
      <div
        className={clsx(
          'zep-container',
          'md:zep-grid',
          'md:zep-grid-cols-14',
          'lg:zep-grid-cols-12',
          "md:[grid-template-area:'pile']",
          'zep-max-w-[1920px]',
          'zep-relative',
          'zep-flex',
          'zep-flex-col',
        )}
        data-testid="zep-mediaText-simple"
      >
        <MediaTextImage src={src} alt={alt} />
        <MediaTextBody>
          <div className={clsx('zep-flex zep-flex-col zep-gap-0.5', { 'zep-hidden': !tagline && !headline })}>
            <p
              data-testid="zep-MediaText-tagline"
              className={twMerge(
                mediaTextTaglines({ variant }),
                `zep-hyphens-auto zep-break-normal ${!tagline && 'zep-hidden'}`,
              )}
            >
              {tagline}
            </p>
            <h3
              data-testid="zep-MediaText-headline"
              className={clsx(
                'zep-text-typography-light-100',
                'zep-typography-headlineMD-fluid-cqi',
                'zep-text-left',
                'zep-hyphens-auto',
                'zep-break-normal',
                { 'zep-hidden': !headline },
              )}
            >
              {headline}
            </h3>
          </div>
          <RichText content={content} />
          <div
            className={clsx('zep-block', { 'zep-hidden': !labelSecondary && !labelPrimary })}
            data-testid="zep-mediatext-buttons"
          >
            <Spacing
              gap="1.5"
              className={clsx('max-md:zep-flex', 'md:zep-flex-row zep-gap-1.5 md:zep-gap-2')}
              direction="column"
            >
              {labelSecondary && (
                <Button
                  icon={iconSecondary}
                  iconPosition={iconSecondaryPosition}
                  href={urlSecondary}
                  onClick={onClickSecondary}
                  label={labelSecondary}
                  variant={ZpsButtonVariant.Secondary}
                />
              )}
              {labelPrimary && (
                <Button
                  icon={iconPrimary}
                  iconPosition={iconPrimaryPosition}
                  href={urlPrimary}
                  onClick={onClickPrimary}
                  label={labelPrimary}
                  variant={ZpsButtonVariant.Primary}
                />
              )}
            </Spacing>
          </div>
        </MediaTextBody>
      </div>
    </MediaTextContext.Provider>
  );
};

const MediaTextImage = ({ src, alt }: MediaTextImageProps) => {
  const { imageAlignment } = useMediaTextContext();
  const alignmentClass =
    imageAlignment === 'left' ? 'md:[grid-column:1/7]' : 'md:[grid-column:9/15] lg:[grid-column:7/13]';
  return (
    <div
      data-testid="zep-mediaText-image"
      className={clsx(
        'md:zep-w-full',
        // 'lg:zep-w-[58%]',
        'md:[grid-area:pile]',
        'md:zep-grid-rows-1',
        'zep-justify-center',
        alignmentClass,
      )}
    >
      <div className={clsx('zep-aspect-[4/3]')}>
        <img alt={alt} src={src} className={clsx('zep-w-full zep-h-full zep-object-cover')} />
      </div>
    </div>
  );
};

const MediaTextBody = ({ children }: MediaTextBodyProps) => {
  const { imageAlignment, variant } = useMediaTextContext();
  const alignmentClass =
    imageAlignment === 'left'
      ? 'md:[grid-column:6/15] lg:[grid-column:6/13]'
      : 'md:[grid-column:1/10] lg:[grid-column:1/8]';

  const mediaTextVariants = {
    [GlobalVariants.Zps]: backgroundColor[GlobalVariantExtended.ZpsBg],
    [GlobalVariants.Cat]: backgroundColor[GlobalVariantExtended.CatBg],
  };

  const mediaTextCard = cva(
    [
      ` md:[grid-area:pile]
        md:zep-grid-rows-1
        md:zep-mt-[60px]
        lg:zep-mt-[80px]
        zep-relative
        zep-h-[max-content]
        zep-z-10
        zep-p-1
        sm:zep-p-2.5
        md:zep-p-2
        lg:zep-p-4
        md:zep-w-full
        md:zep-min-w-[499px]
        xl:zep-min-w-[700px]
        zep-flex
        zep-flex-col
        zep-gap-1.5`,
      alignmentClass,
    ],
    {
      variants: {
        variant: mediaTextVariants,
      },
      defaultVariants: {
        variant: GlobalVariants.Zps,
      },
    },
  );
  return (
    <div className={twMerge(mediaTextCard({ variant }))} data-testid="zep-mediaText-body">
      {children}
    </div>
  );
};

export { MediaText };
