'use client';

import clsx from 'clsx';
import { FC } from 'react';
import { getFirst150Characters } from '../../hooks/useMaxChar150';
import { Button, ZsdButtonVariant } from '../zsd-button';
import { ShCorpProps } from './sh-corp-interface';

export const SHCorp: FC<ShCorpProps> = ({
  headline,
  subline,
  imageSrc,
  imageAlt,
  primaryButtonText,
  secondaryButtonText,
  description,
}) => {
  return (
    <div data-testid="zep-SHCorporate">
      <div className="zep-block md:zep-hidden">
        <img src={imageSrc} alt={imageAlt} className="zep-h-[202px] sm:zep-h-[432px] zep-object-cover" />
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
          {description && <p className="zep-mb-1.5">{getFirst150Characters(description)}</p>}
          {primaryButtonText && (
            <div className="zep-flex zep-flex-col sm:zep-flex-row zep-gap-1">
              <Button
                label={primaryButtonText}
                title={primaryButtonText}
                variant={ZsdButtonVariant.PrimaryDark}
                className="zep-w-full sm:zep-max-w-max"
              />
              {secondaryButtonText && (
                <Button
                  label={secondaryButtonText}
                  title={secondaryButtonText}
                  variant={ZsdButtonVariant.SecondaryDark}
                  className="zep-w-full sm:zep-max-w-max"
                />
              )}
            </div>
          )}
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        className={clsx('zep-w-full', 'zep-relative', 'zep-hidden', 'md:zep-block')}
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
            <h1 className="zep-typography-headlineXL-fluid-cqi lg:zep-typography-headline2XL-fluid-cqi zep-text-typography-light-100 zep-mb-1">
              {headline}
            </h1>
            {description && (
              <p className="zep-typography-bodyText zep-text-typography-light-100 md:zep-max-w-[374px] lg:zep-max-w-[710px] zep-mb-1.5">
                {getFirst150Characters(description)}
              </p>
            )}
            {primaryButtonText && (
              <div className="zep-flex zep-gap-1">
                <Button
                  label={primaryButtonText}
                  title={primaryButtonText}
                  variant={ZsdButtonVariant.PrimaryLight}
                  className="sm:zep-max-w-max"
                />
                {secondaryButtonText && (
                  <Button
                    label={secondaryButtonText}
                    title={secondaryButtonText}
                    variant={ZsdButtonVariant.SecondaryLight}
                    className="sm:zep-max-w-max"
                  />
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
