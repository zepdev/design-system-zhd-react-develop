import { clsx } from 'clsx';
import { getFirst150Characters } from '../../hooks/useMaxChar150';
import { Button, ZsdButtonVariant } from '../zsd-button';
import { SmallHeroProps } from './small-hero.interface';

export const SmallHero = ({
  imageSrc,
  imageAlt,
  headline,
  subline,
  description,
  primaryButtonLabel,
  secondaryButtonLabel,
  onClickPrimaryButton,
  onClickSecondaryButton,
  backgroundVariant = 'gradient',
}: SmallHeroProps) => {
  const divOption = (() => {
    switch (backgroundVariant) {
      case 'indigo':
        return 'zep-bg-primary-default zep-text-typography-light-100';
      case 'gradient':
        return 'zep-bg-zsd-gradient zep-text-typography-dark-100';
      default:
        return '';
    }
  })();

  const sublineColor = backgroundVariant === 'indigo' ? 'zep-text-typography-light-100' : '!zep-text-indigo-700';

  const buttonVariants = {
    indigo: {
      primary: ZsdButtonVariant.PrimaryLight,
      secondary: ZsdButtonVariant.SecondaryLight,
    },
    gradient: {
      primary: ZsdButtonVariant.PrimaryDark,
      secondary: ZsdButtonVariant.SecondaryDark,
    },
  };

  const primaryButtonVariant = buttonVariants[backgroundVariant]?.primary || ZsdButtonVariant.PrimaryDark;
  const secondaryButtonVariant = buttonVariants[backgroundVariant]?.secondary || ZsdButtonVariant.SecondaryDark;

  return (
    <div
      style={{ alignItems: 'stretch' }}
      data-testid="zep-small-hero"
      className={clsx(
        divOption,
        'md:zep-flex',
        'zep-relative',
        'zep-flex-col', // Default to column layout
        'md:zep-flex-row', // Change to row layout on medium screens
      )}
    >
      {imageSrc && (
        <div className="md:zep-w-[44%] zep-w-full zep-h-auto zep-flex zep-order-1 md:zep-order-2">
          <img src={imageSrc} alt={imageAlt} className="zep-aspect-[16/9] zep-h-auto zep-w-full zep-object-fill" />
        </div>
      )}

      <div
        className={clsx(
          'zep-p-1.5',
          'sm:zep-p-2',
          'xl:zep-p-6',
          'md:zep-w-[56%]',
          'zep-justify-center',
          'zep-flex',
          'zep-flex-col',
          'zep-order-2 md:zep-order-1',
        )}
      >
        <h2 className={clsx('zep-typography-headlineXL-fluid-cqi', sublineColor)}>{headline}</h2>
        <h3 className={clsx('zep-typography-headlineXL-fluid-cqi', 'zep-mb-0.25', 'xl:zep-mb-0.75')}>{subline}</h3>
        {description && <p className="zep-mb-1.5">{getFirst150Characters(description)}</p>}
        <div className="zep-block" data-testid="zep-mediatext-buttons">
          {primaryButtonLabel && (
            <div className="zep-flex zep-gap-1">
              <Button
                label={primaryButtonLabel}
                title={primaryButtonLabel}
                onClick={onClickPrimaryButton}
                variant={primaryButtonVariant}
                className="sm:zep-max-w-max"
              />
              {secondaryButtonLabel && (
                <Button
                  label={secondaryButtonLabel}
                  title={secondaryButtonLabel}
                  onClick={onClickSecondaryButton}
                  variant={secondaryButtonVariant}
                  className="sm:zep-max-w-max"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
