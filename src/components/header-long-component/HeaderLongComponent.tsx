import { RichText } from '@/components/rich-text';
import { Link, LinkMode, LinkTarget } from '@zepdev/design-system-component-library-react';
import { clsx } from 'clsx';
import React from 'react';
import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';
import { getUrlWithTrailingSlash } from '../../utils/getUrlWithTrailingSlash';
import { Button, ZsdButtonVariant } from '../zsd-button';
import { HeaderLongComponentProps, LinkComponentProps } from './HeaderLongComponent.interface';

const LinkComponent = ({
  type,
  linkHref,
  linkText,
  onClick,
  headerButtonIconPosition,
  headerButtonIcon,
  variant = GlobalVariants.Zps,
}: LinkComponentProps) => {
  const linkClass = {
    'zep-text-yellow-500': variant === GlobalVariantExtended.ZpsBg || variant === GlobalVariantExtended.CatBg,
    'zep-text-typography-dark-100': variant === GlobalVariants.Cat,
    'zep-text-indigo-500': GlobalVariants.Zps,
  };
  const buttonVariant = {
    [GlobalVariants.Cat]: ZsdButtonVariant.SecondaryDark,
    [GlobalVariants.Zps]: ZsdButtonVariant.SecondaryLight,
    [GlobalVariantExtended.ZpsBg]: ZsdButtonVariant.SecondaryLight,
    [GlobalVariantExtended.CatBg]: ZsdButtonVariant.SecondaryLight,
  };

  switch (type) {
    case 'link':
      return (
        <Link
          label={linkText || ''}
          href={linkHref}
          iconPlacement="after"
          mode={LinkMode.Standalone}
          icon="arrow-long-right"
        />
      );
    case 'primary-button':
      return (
        <Link
          target={linkHref?.startsWith('http') ? LinkTarget.Blank : LinkTarget.Self}
          className={clsx(
            linkClass,
            'zep-h-fit',
            'zep-w-fit',
            'zep-font-400',
            'zep-whitespace-nowrap',
            'hover:zep-underline',
            'hover:zep-font-500',
            'zep-cursor-pointer',
          )}
          label={linkText || ''}
          href={getUrlWithTrailingSlash(linkHref)}
          iconPlacement="after"
          mode={LinkMode.Standalone}
          icon="arrow-long-right"
        />
      );
    // eslint-disable-next-line no-duplicate-case
    case 'primary-button':
    case 'secondary-button':
      return (
        <Button
          href={linkHref}
          className="zep-whitespace-nowrap sm:zep-w-fit zep-h-fit"
          label={linkText}
          variant={type === 'primary-button' ? ZsdButtonVariant.PrimaryDark : buttonVariant[variant]}
          icon={headerButtonIcon}
          onClick={onClick}
          iconPosition={headerButtonIconPosition}
        />
      );
    default:
      return null;
  }
};

export const HeaderLongComponent: React.FC<HeaderLongComponentProps> = ({
  tagline,
  headline,
  description,
  variant = GlobalVariants.Zps,
  ...linkProps
}) => {
  const containerClass = {
    'zep-text-typography-light-100': variant === GlobalVariantExtended.ZpsBg || variant === GlobalVariantExtended.CatBg,
    'zep-text-typography-dark-100': variant === GlobalVariants.Cat,
    'zep-text-indigo-500': variant === GlobalVariants.Zps,
  };

  const taglineClass = {
    'zep-text-steel-500': variant === GlobalVariants.Zps || variant === GlobalVariantExtended.ZpsBg,
    'zep-text-typography-dark-70 zep-opacity-70': variant === GlobalVariants.Cat,
    'zep-text-typography-light-70 zep-opacity-70': variant === GlobalVariantExtended.CatBg,
  };

  return (
    <div
      className={clsx('zep-w-full', 'zep-flex', 'zep-flex-col', 'zep-gap-1.5', 'md:zep-gap-2.5', 'zep-items-start')}
      data-testid="header-long-component"
    >
      <div className={clsx('zep-w-full', 'zep-flex', 'zep-flex-col', 'zep-gap-0.5', 'zep-items-start')}>
        {tagline && (
          <p className={clsx(taglineClass, 'zep-typography-tagline', 'zep-hyphens-auto', 'zep-break-normal')}>
            {tagline}
          </p>
        )}
        {/* headline and Button/Link wrapper */}
        <div
          className={clsx(
            'zep-w-full',
            'zep-flex',
            'zep-flex-col',
            'xl:zep-flex-row',
            'xl:zep-justify-between',
            'xl:zep-gap-2',
            'zep-gap-1.5',
          )}
        >
          <h2
            className={clsx(
              containerClass,
              'zep-max-w-[944px]',
              'zep-hyphens-auto',
              'zep-break-normal',
              'zep-typography-headlineLG-fluid-cqi',
              'zep-text-start',
            )}
          >
            {headline}
          </h2>
          {/* Button or Link or None */}
          <LinkComponent {...linkProps} variant={variant} />
        </div>
      </div>
      {description && description.length > 0 && <RichText content={description} />}
    </div>
  );
};
