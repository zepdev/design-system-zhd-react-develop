import { LinkMode } from '@zepdev/design-system-component-library-react';
import { clsx } from 'clsx';
import React from 'react';
import { Button, ZsdButtonVariant } from '../zsd-button';
import { Link } from '../zsd-link';
import { HeaderLongComponentProps, LinkComponentProps } from './HeaderLongComponent.interface';

const LinkComponent = ({ type, linkHref, linkText, onClick }: LinkComponentProps) => {
  switch (type) {
    case 'link':
      return <Link 
      label={linkText || ''} 
      href={linkHref} 
      iconPlacement='after'
      mode={LinkMode.Standalone}
      icon="arrow-long-right" />;
    case 'primary-button':
      return (
        <Button
          className="zep-whitespace-nowrap sm:zep-w-fit zep-h-fit"
          label={linkText}
          onClick={onClick}
          variant={ZsdButtonVariant.PrimaryDark}
        />
      );
    case 'secondary-button':
      return (
        <Button
          className="zep-whitespace-nowrap sm:zep-w-fit zep-h-fit"
          label={linkText}
          icon="download"
          iconPosition="right"
          onClick={onClick}
          variant={ZsdButtonVariant.SecondaryDark}
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
  ...linkProps
}) => {
  return (
    <div
      className={clsx('zep-w-full', 'zep-flex', 'zep-flex-col', 'zep-gap-2', 'md:zep-gap-2.5', 'zep-items-start')}
      data-testid="header-long"
    >
      <div className={clsx('zep-w-full', 'zep-flex', 'zep-flex-col', 'zep-gap-0.5', 'zep-items-start')}>
        <h3 className={clsx('zep-text-typography-dark-100', 'zep-typography-taglineMD', 'zep-break-all')}>{tagline}</h3>
        {/* headline and Button/Link wrapper */}
        <div
          className={clsx(
            'zep-w-full',
            'zep-flex',
            'zep-flex-col',
            'xl:zep-flex-row',
            'xl:zep-justify-between',
            'xl:zep-gap-2.5',
            'zep-gap-1.5',
          )}
        >
          <h2
            className={clsx(
              'zep-text-typography-dark-100',
              'zep-max-w-[944px]',
              'zep-break-all',
              'zep-typography-headlineLG-fluid-cqi',
              'zep-text-start',
            )}
          >
            {headline}
          </h2>
          {/* Button or Link or None */}
          <LinkComponent {...linkProps} />
        </div>
      </div>
      <p className={clsx('zep-text-typography-dark-100', 'zep-text-start', 'zep-max-w-[944px]', 'zep-break-all')}>
        {description}
      </p>
    </div>
  );
};
