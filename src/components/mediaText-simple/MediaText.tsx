import { Button } from '@/components/zsd-button/ZsdButton';
import { ZsdButtonVariant } from '@/components/zsd-button/zsd-button.interface';
import { Spacing } from '@zepdev/design-system-component-library-react';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import { createContext, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import {
  BaseMediaProps,
  MediaTextBodyProps,
  MediaTextButtonProps,
  MediaTextContentProps,
  MediaTextImageProps,
  MediaTextVariant,
} from './mediaText.interface';

const MediaTextContext = createContext({
  imageAlignment: 'left',
  variant: MediaTextVariant.Zps,
  headline: '',
  tagline: '',
  description: '',
});
export const useMediaTextContext = () => useContext(MediaTextContext);

const MediaText = ({
  imageAlignment = 'left',
  children,
  variant = MediaTextVariant.Zps,
  headline = '',
  tagline = '',
  description = '',
}: MediaTextContentProps & BaseMediaProps) => {
  return (
    <MediaTextContext.Provider value={{ imageAlignment, variant, headline, tagline, description }}>
      <div className="zep-grid-items zep-items-center zep-justify-center zep-min-screen">
        <div
          className={clsx(
            'zep-container',
            'zep-mx-auto',
            'zep-relative',
            'zep-grid',
            'zep-grid-cols-1',
            'md:zep-gap-1.5',
            'lg:zep-gap-2',
            'md:zep-grid-cols-16',
          )}
          data-testid="zep-mediaText-simple"
        >
          {children}
        </div>
      </div>
    </MediaTextContext.Provider>
  );
};

const MediaTextImage = ({ src, alt, aspectRatio = '4:3' }: MediaTextImageProps) => {
  const { imageAlignment } = useMediaTextContext();
  const imageAspectRation = aspectRatio === '4:3' ? 'zep-pb-[calc(3_*_100%_/_4)]' : 'zep-pb-[calc(4_*_100%_/_3)]';
  const alignmentClass = imageAlignment === 'left' ? 'md:zep-order-1' : '';
  const columnClass =
    imageAlignment === 'left'
      ? 'md:zep-col-start-2 md:zep-col-end-9 xl:zep-col-start-3 xl:zep-col-end-10'
      : 'md:zep-col-start-9 md:zep-col-end-16 xl:zep-col-start-8 xl:zep-col-end-15';
  return (
    <div
      data-testid="zep-mediaText-image"
      className={clsx(
        'zep-col-start-5',
        'zep-col-end-13',
        'zep-justify-center',
        'zep-row-start-1',
        'zep-row-end-1',
        alignmentClass,
        columnClass,
      )}
    >
      <div className={clsx('zep-relative', imageAspectRation)}>
        <img
          alt={alt}
          src={src}
          className={clsx('zep-w-full zep-h-full zep-object-cover md:zep-w-full md:zep-h-full md:zep-max-w-full')}
        />
      </div>
    </div>
  );
};

const MediaTextBody = ({ children }: MediaTextBodyProps) => {
  const { imageAlignment, variant } = useMediaTextContext();

  const alignmentClass = imageAlignment === 'left' ? '' : 'md:zep-order-1';
  const columnClass =
    imageAlignment === 'left'
      ? 'zep-col-start-6 zep-col-end-12 md:zep-col-start-8 md:zep-col-end-16 xl:zep-col-start-9 xl:zep-col-end-15'
      : 'zep-col-start-5 zep-col-end-13  md:zep-col-start-2 md:zep-col-end-10 xl:zep-col-start-3 xl:zep-col-end-9';

  const mediaTextVariants = {
    [MediaTextVariant.Zps]: ['zep-bg-gradient-to-r zep-from-[rgb(32,27,52)] zep-to-[rgb(32,23,94)]'],
    [MediaTextVariant.Cat]: ['zep-bg-neutral-dark-default'],
  };
  const mediaTextCard = cva(
    [
      ` 
        zep-mt-[63%]
        md:zep-w-auto
        zep-mx-auto
        md:zep-mt-[60px]
        xl:zep-mt-[120px]
        zep-h-[max-content]
        zep-row-start-1
        zep-row-end-1
        zep-z-10
        zep-p-1
        sm:zep-p-2
        md:zep-p-2
        lg:zep-p-5
        xl:zep-p-5
        zep-max-w-fit
        md:zep-max-w-[499px]
        lg:zep-max-w-[700px]
        ${alignmentClass},
        ${columnClass}`,
    ],
    {
      variants: {
        variant: mediaTextVariants,
      },
      defaultVariants: {
        variant: MediaTextVariant.Zps,
      },
    },
  );
  return (
    <div className={twMerge(mediaTextCard({ variant }))} data-testid="zep-mediaText-body">
      <div>{children}</div>
    </div>
  );
};

const MediaTextTagline = () => {
  const { tagline, variant } = useMediaTextContext();

  const mediaTextTaglineVariants = {
    [MediaTextVariant.Zps]: ['zep-text-typography-brand-steel'],
    [MediaTextVariant.Cat]: ['zep-text-typography-light-70 zep-opacity-70'],
  };

  const mediaTextTaglines = cva(
    [
      `zep-typography-taglineMD
      zep-mb-0.5
      `,
    ],
    {
      variants: {
        variant: mediaTextTaglineVariants,
      },
      defaultVariants: {
        variant: MediaTextVariant.Zps,
      },
    },
  );

  return (
    <p data-testid="zep-MediaText-tagline" className={twMerge(mediaTextTaglines({ variant }), 'zep-break-words')}>
      {tagline}
    </p>
  );
};

const MediaTextHeadline = () => {
  const { headline } = useMediaTextContext();
  return (
    <h4
      data-testid="zep-MediaText-headline"
      className={clsx(
        'zep-text-typography-light-100',
        'zep-typography-headlineMD-fluid-cqi',
        'after:zep-text-[0.23em]',
        'zep-mb-1.5',
        'xl:zep-mb-2',
        'zep-text-left',
        'zep-break-words',
      )}
    >
      {headline}
    </h4>
  );
};

const MediaTextDescription = () => {
  const { description } = useMediaTextContext();
  return (
    <p
      data-testid="zep-MediaText-description"
      className="zep-text-typography-light-100 zep-typography-bodyText zep-mb-1.5 xl:zep-mb-2 zep-break-words"
    >
      {description}
    </p>
  );
};

const MediaTextButtons = ({ labelPrimary, labelSecondary, onClickPrimary, onClickSecondary }: MediaTextButtonProps) => {
  return (
    <div className="zep-block" data-testid="zep-mediatext-buttons">
      <Spacing
        gap="1.5"
        className={clsx('max-md:zep-flex', 'md:zep-flex-row zep-gap-1.5 md:zep-gap-2 lg:zep-gap-1.5')}
        direction="column"
      >
        <Button onClick={onClickPrimary} label={labelPrimary} variant={ZsdButtonVariant.PrimaryDark} />
        <Button label={labelSecondary} onClick={onClickSecondary} variant={ZsdButtonVariant.SecondaryDark} />
      </Spacing>
    </div>
  );
};

MediaText.Image = MediaTextImage;
MediaText.Body = MediaTextBody;
MediaText.Tagline = MediaTextTagline;
MediaText.Headline = MediaTextHeadline;
MediaText.Description = MediaTextDescription;
MediaText.Button = MediaTextButtons;

export { MediaText };
