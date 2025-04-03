'use client';

import clsx from 'clsx';
import { FC } from 'react';
import { Button, ZsdButtonVariant } from '../zsd-button';
import { HeroProps } from './hero.interface';

export const Hero: FC<HeroProps> = ({
  headline,
  image,
  imageAlt,
  buttonPrimary,
  buttonPrimaryIcon,
  buttonPrimaryIconPosition,
  buttonPrimaryUrl,
  buttonSecondary,
  buttonSecondaryIcon,
  buttonSecondaryIconPosition,
  description,
  buttonSecondaryUrl,
}) => {
  return (
    <div data-testid="zep-newhero">
      <div className="zep-block md:zep-hidden">
        <img src={image} alt={imageAlt || headline} className="zep-h-[202px] sm:zep-h-[432px] zep-object-cover" />
        <div className="zep-px-1 sm:zep-px-1.5 zep-py-1.5 sm:zep-py-3">
          <h1 className="zep-typography-headlineXL-fluid-cqi zep-text-typography-dark-100 zep-mb-1">{headline}</h1>
          <p className="zep-typography-bodyText zep-text-typography-dark-100 zep-mb-1.5">{description}</p>
          {buttonPrimary && (
            <div className="zep-flex zep-flex-col sm:zep-flex-row zep-gap-1">
              <a href={buttonPrimaryUrl}>
                <Button
                  label={buttonPrimary}
                  title={buttonPrimary}
                  variant={ZsdButtonVariant.PrimaryDark}
                  className="zep-w-full sm:zep-max-w-max"
                  icon={buttonPrimaryIcon}
                  iconPosition={buttonPrimaryIconPosition}
                />
              </a>

              {buttonSecondary && (
                <a href={buttonSecondaryUrl}>
                  <Button
                    label={buttonSecondary}
                    title={buttonSecondary}
                    icon={buttonSecondaryIcon}
                    iconPosition={buttonSecondaryIconPosition}
                    variant={ZsdButtonVariant.SecondaryDark}
                    className="zep-w-full sm:zep-max-w-max"
                  />
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        className="zep-w-full zep-relative zep-h-[600px] lg:zep-h-[864px] zep-hidden md:zep-block "
      >
        <div
          className={clsx(
            'zep-max-w-[1920px]',
            'zep-w-full',
            'zep-px-4',
            'lg:zep-px-7.5',
            'zep-py-5',
            'zep-hidden md:zep-flex md:zep-items-center zep-h-full',
          )}
        >
          <div className="zep-z-10">
            <h1
              data-testid="new-hero-headline"
              className="zep-typography-headlineXL-fluid-cqi lg:zep-typography-headline2XL-fluid-cqi zep-text-typography-light-100 zep-mb-1"
            >
              {headline}
            </h1>
            <p className="zep-typography-bodyText zep-text-typography-light-100 md:zep-max-w-[374px] lg:zep-max-w-[710px] zep-mb-1.5">
              {description}
            </p>
            {buttonPrimary && (
              <div className="zep-flex zep-gap-1">
                <a href={buttonPrimaryUrl} data-testid="zep-hero-primary-button">
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
                  <a href={buttonSecondaryUrl} data-testid="zep-hero-secondary-button">
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
