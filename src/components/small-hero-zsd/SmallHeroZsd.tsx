import clsx from 'clsx';
import { getFirst150Characters } from '../../hooks/useMaxChar150';
import { Button } from '../zsd-button';
import { ZsdButtonVariant } from '../zsd-button/zsd-button.interface';
import { SmallHeroZsdProps } from './small-hero-zsd.interface';

export const SmallHeroZsd = ({
  headline,
  subline,
  description,
  imageSrc,
  imageAlt,
  buttonPrimary,
  buttonSecondary,
  buttonPrimaryUrl,
  buttonSecondaryUrl,
  buttonPrimaryIcon,
  buttonSecondaryIcon,
  buttonPrimaryIconPosition,
  buttonSecondaryIconPosition,
  buttonPrimaryAction,
  buttonSecondaryAction,
  buttonPrimaryOnClick,
  backgroundVariant = 'gradient',
}: SmallHeroZsdProps) => {
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
          'zep-py-1.5',
          'zep-px-1',
          'sm:zep-px-1.5',
          'md:zep-px-[66px]',
          'lg:zep-px-[122px]',
          'sm:zep-py-2',
          'xl:zep-py-6',
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
        {buttonPrimary && (
          <div className="zep-flex zep-flex-col sm:zep-flex-row zep-gap-1">
            {buttonPrimaryUrl ? (
              <a
                href={buttonPrimaryUrl}
                target={buttonPrimaryAction === 'open-external-link' ? '_blank' : '_self'}
                download={buttonPrimaryAction === 'download-file'}
                rel="noreferrer"
              >
                <Button
                  label={buttonPrimary}
                  title={buttonPrimary}
                  variant={primaryButtonVariant}
                  className="sm:zep-max-w-max"
                  icon={buttonPrimaryIcon}
                  iconPosition={buttonPrimaryIconPosition}
                />
              </a>
            ) : (
              <Button
                label={buttonPrimary}
                title={buttonPrimary}
                variant={primaryButtonVariant}
                className="sm:zep-max-w-max"
                icon={buttonPrimaryIcon}
                iconPosition={buttonPrimaryIconPosition}
                onClick={buttonPrimaryOnClick}
              />
            )}

            {buttonSecondary && (
              <a
                href={buttonSecondaryUrl}
                target={buttonSecondaryAction === 'open-external-link' ? '_blank' : '_self'}
                download={buttonSecondaryAction === 'download-file'}
                rel="noreferrer"
              >
                <Button
                  label={buttonSecondary}
                  title={buttonSecondary}
                  icon={buttonSecondaryIcon}
                  iconPosition={buttonSecondaryIconPosition}
                  variant={secondaryButtonVariant}
                  className="sm:zep-max-w-max"
                />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
