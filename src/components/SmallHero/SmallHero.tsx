'use client';
import clsx from 'clsx';
import { FC } from 'react';
import { Button, ZsdButtonVariant } from '../zsd-button';
import { SmallHeroProps } from './small-hero.interface';

export const SmallHero: FC<SmallHeroProps> = ({
  headline,
  subline,
  imageSrc,
  imageAlt,
  variant = 'default',
  buttonPrimary,
  buttonPrimaryIcon,
  buttonPrimaryIconPosition,
  buttonPrimaryUrl,
  buttonSecondary,
  buttonSecondaryIcon,
  buttonSecondaryIconPosition,
  buttonSecondaryUrl,
  description,
  buttonPrimaryAction,
  buttonSecondaryAction,
}) => {
  const backgroundStyle =
    variant === 'indigo'
      ? { backgroundColor: '#27166F' } // Set background color to indigo
      : {
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        };
  return (
    <div data-testid="zep-SHCorporate">
      {/* mobile view */}
      <div
        className={clsx('zep-block', 'md:zep-hidden', {
          'zep-bg-indigo-500 zep-text-typography-light-100': variant === 'indigo',
        })}
      >
        {variant === 'default' && (
          <img src={imageSrc} alt={imageAlt} className="zep-w-full zep-aspect-[16/9] zep-object-cover" />
        )}
        <div className="zep-px-1 sm:zep-px-1.5 zep-py-1.5 sm:zep-py-3">
          <h2 data-testid="SHCorporate-headline" className={clsx('zep-typography-headlineXL-fluid-cqi')}>
            {headline}
          </h2>
          <h3
            data-testid="SHCorporate-subline"
            className={clsx('zep-typography-headlineXL-fluid-cqi', 'zep-mb-0.25', 'xl:zep-mb-0.75')}
          >
            {subline}
          </h3>
          {description && <p className="zep-mb-1.5">{description}</p>}
          {buttonPrimary && (
            <div className="zep-flex zep-flex-col sm:zep-flex-row zep-gap-1">
              <a
                href={buttonPrimaryUrl}
                rel="noreferrer"
                target={buttonPrimaryAction === 'open-external-link' ? '_blank' : '_self'}
                download={buttonPrimaryAction === 'download-file'}
              >
                <Button
                  label={buttonPrimary}
                  title={buttonPrimary}
                  variant={variant === 'default' ? ZsdButtonVariant.PrimaryDark : ZsdButtonVariant.PrimaryLight}
                  className="zep-w-full sm:zep-max-w-max"
                  icon={buttonPrimaryIcon}
                  iconPosition={buttonPrimaryIconPosition}
                />
              </a>
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
                    variant={variant === 'default' ? ZsdButtonVariant.SecondaryDark : ZsdButtonVariant.SecondaryLight}
                    className="zep-w-full sm:zep-max-w-max"
                  />
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* desktop view */}
      <div
        style={backgroundStyle}
        className={clsx(
          'zep-w-full',
          'zep-relative',
          'zep-hidden',
          'md:zep-flex',
          'md:zep-items-center',
          'md:zep-min-h-[466px]',
        )}
      >
        <div
          className={clsx(
            'zep-max-w-[1728px]',
            'zep-w-full',
            'zep-px-4',
            'lg:zep-px-7.5',
            'zep-py-5',
            'zep-hidden md:zep-flex md:zep-items-center zep-h-full',
          )}
        >
          <div className="zep-z-10">
            <div className='zep-max-w-[900px]'>
              <h1 className="zep-typography-headlineXL-fluid-cqi lg:zep-typography-headline2XL-fluid-cqi zep-text-typography-light-100 zep-mb-1">
                {headline}{' '}
                {subline && (
                  <>
                    <br></br>
                    <span className="zep-typography-headlineXL-fluid-cqi lg:zep-typography-headline2XL-fluid-cqi zep-text-typography-light-100 zep-mb-1">
                      {subline}
                    </span>
                  </>
                )}
              </h1>

              {description && (
                <p className="zep-typography-bodyText zep-text-typography-light-100 md:zep-max-w-[374px] lg:zep-max-w-[710px] zep-mb-1.5">
                  {description}
                </p>
              )}
            </div>
            {buttonPrimary && (
              <div className="zep-flex zep-gap-1">
                <a
                  href={buttonPrimaryUrl}
                  target={buttonPrimaryAction === 'open-external-link' ? '_blank' : '_self'}
                  download={buttonPrimaryAction === 'download-file'}
                  rel="noreferrer"
                >
                  <Button
                    label={buttonPrimary}
                    title={buttonPrimary}
                    variant={ZsdButtonVariant.PrimaryLight}
                    className="sm:zep-max-w-max"
                    icon={buttonPrimaryIcon}
                    iconPosition={buttonPrimaryIconPosition}
                  />
                </a>
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
                      variant={ZsdButtonVariant.SecondaryLight}
                      className="sm:zep-max-w-max"
                    />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        <div
          className={clsx(
            'zep-absolute',
            //{'zep-bg-gradient-to-r zep-from-[rgba(0,0,0,0.85)]': variant === 'default'},
            'zep-bg-gradient-to-r zep-from-[rgba(0,0,0,0.85)]',
            'max-md:zep-hidden',
            'md:zep-block',
            'zep-absolute',
            'zep-top-[0]',
            'zep-left-[0]',
            'zep-h-full',
            'zep-w-full',
          )}
        ></div>
      </div>
    </div>
  );
};
