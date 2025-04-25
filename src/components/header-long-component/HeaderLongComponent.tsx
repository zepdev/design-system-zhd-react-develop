import { RichText } from '@/components/rich-text';
import { Link, LinkMode } from '@zepdev/design-system-component-library-react';
import { clsx } from 'clsx';
import React from 'react';
import { Button, ZsdButtonVariant } from '../zsd-button';
import { HeaderLongComponentProps, LinkComponentProps } from './HeaderLongComponent.interface';

const LinkComponent = ({
  type,
  linkHref,
  linkText,
  onClick,
  headerButtonIconPosition,
  headerButtonIcon,
  target,
}: LinkComponentProps) => {
  switch (type) {
    // case 'link':
    //   return (
    //     <Link
    //     label={linkText || ''}
    //    href={linkHref}
    //  iconPlacement="after"
    //  mode={LinkMode.Standalone}
    // icon="arrow-long-right"
    //  target={target}
    //     />
    //   );
    case 'link':
      return (
        <Link
          label={linkText || ''}
          href={linkHref}
          mode={LinkMode.Standalone}
          icon={headerButtonIcon || 'arrow-long-right'}
          target={target}
          className={clsx(
            'zep-text-indigo-500',
            'zep-h-fit',
            'zep-w-fit',
            'zep-font-400',
            'zep-whitespace-nowrap',
            'hover:zep-underline',
            'hover:zep-font-500',
            'zep-cursor-pointer',
          )}
          iconPlacement={headerButtonIconPosition === 'left' ? 'before' : 'after'}
        />
      );
    // eslint-disable-next-line no-duplicate-case
    case 'primary-dark':
      return (
        <Button
          href={linkHref}
          className="zep-whitespace-nowrap sm:zep-w-fit zep-h-fit"
          label={linkText}
          variant={ZsdButtonVariant.PrimaryDark}
          icon={headerButtonIcon}
          onClick={onClick}
          iconPosition={headerButtonIconPosition}
        />
      );

    case 'secondary-dark':
      return (
        <Button
          href={linkHref}
          className="zep-whitespace-nowrap sm:zep-w-fit zep-h-fit"
          label={linkText}
          variant={ZsdButtonVariant.SecondaryDark}
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
  target,
  ...linkProps
}) => {
  return (
    <div
      className={clsx('zep-w-full', 'zep-flex', 'zep-flex-col', 'zep-gap-1.5', 'md:zep-gap-2.5', 'zep-items-start')}
      data-testid="header-long-component"
    >
      <div className={clsx('zep-w-full', 'zep-flex', 'zep-flex-col', 'zep-gap-0.5', 'zep-items-start')}>
        {tagline && (
          <p
            className={clsx(
              'zep-text-typography-dark-100',
              'zep-typography-tagline',
              'zep-hyphens-auto',
              'zep-break-normal',
            )}
          >
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
              'zep-text-typography-dark-100',
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
          <LinkComponent target={target} {...linkProps} />
        </div>
      </div>
      {description && description.length > 0 && <RichText content={description} />}
    </div>
  );
};
