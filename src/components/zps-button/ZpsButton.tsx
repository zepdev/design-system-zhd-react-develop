'use client';
import { FunctionalIcon, Spacing } from '@zepdev/design-system-component-library-react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { ZpsButtonProps, ZpsButtonVariant } from './zps-button.interface';
import React, { FC } from 'react';
import { getUrlWithTrailingSlash } from '../../utils/getUrlWithTrailingSlash';

export const zpsButtonVariants = {
  [ZpsButtonVariant.Primary]: [
    'zep-bg-secondary-default',
    'zep-text-secondary-contrast',
    'enabled:hover:zep-bg-secondary-hover',
    'enabled:hover:zep-text-secondary-contrast',
    'enabled:active:zep-bg-secondary-active',
    'enabled:active:zep-text-secondary-contrast',
    'disabled:zep-opacity-disabled',
  ],
  [ZpsButtonVariant.SecondaryZps]: [
    'zep-bg-transparent',
    'zep-text-typography-primary-default',
    'enabled:hover:zep-bg-primary-hover',
    'enabled:hover:zep-text-primary-contrast',
    'enabled:active:zep-bg-primary-active',
    'enabled:active:zep-text-primary-contrast',
    'disabled:zep-opacity-disabled',
    'zep-ring-2',
    'zep-ring-inset',
    'zep-ring-primary-default',
    'enabled:hover:zep-ring-0',
    'enabled:active:zep-ring-0',
    'disabled:zep-ring-opacity-disabled',
  ],
  [ZpsButtonVariant.Secondary]: [
    'zep-bg-transparent',
    'zep-ring-2',
    'zep-ring-inset',
    'zep-text-secondary-default',
    'zep-ring-secondary-default',
    'enabled:hover:zep-bg-secondary-hover',
    'enabled:hover:zep-ring-0',
    'enabled:hover:zep-text-secondary-contrast',
    'enabled:active:zep-bg-secondary-active',
    'enabled:active:zep-text-secondary-contrast',
    'enabled:active:zep-ring-0',
    'disabled:zep-opacity-disabled',
  ],
  [ZpsButtonVariant.SecondaryCat]: [
    'zep-bg-transparent',
    'zep-ring-2',
    'zep-ring-inset',
    'zep-ring-neutral-dark-default',
    'zep-text-neutral-dark-default',
    'enabled:hover:zep-text-primary-contrast',
    'enabled:hover:zep-ring-0',
    'enabled:active:zep-ring-0',
    'enabled:hover:zep-bg-neutral-dark-hover',
    'enabled:active:zep-bg-neutral-dark-active',
    'enabled:active:zep-text-primary-contrast',
    'disabled:zep-bg-opacity-disabled',
  ],
  [ZpsButtonVariant.Tertiary]: [
    'zep-bg-transparent',
    'zep-text-typography-primary-default',
    'enabled:hover:zep-underline',
    'enabled:active:zep-font-500',
  ],
};
export const zpsbutton = cva(
  [
    'zep-typography-button',
    'zep-rounded-button',
    'zep-px-1',
    'zep-py-0.75',
    'zep-flex',
    'zep-gap-0.5',
    'zep-justify-center',
    'focus-visible:zep-outline',
    'focus-visible:zep-outline-3',
    'focus-visible:zep-outline-offset-1',
    'focus-visible:zep-outline-focus',
    'zep-font-500',
  ],
  {
    variants: {
      variant: zpsButtonVariants,
    },
    defaultVariants: {
      variant: ZpsButtonVariant.Primary,
    },
  },
);

const Btn: FC<Omit<ZpsButtonProps, 'href' | 'buttonType'>> = ({
  className,
  variant,
  isLoading = false,
  label,
  children,
  icon,
  iconPosition = 'left',
  ...props
}) => {
  const isIconButton = (!label || label === '') && !children;
  const buttonClass = isIconButton ? zpsbutton({ variant }).replace('zep-px-1', 'zep-px-0.75') : zpsbutton({ variant });

  return (
    <button className={twMerge(buttonClass, 'zep-w-full sm:zep-w-auto', className)} {...props}>
      {isLoading && (
        <i className="mr-zep-0_5" data-testid="loading-icon">
          loading icon
        </i>
      )}
      <Spacing gap="0.5" className={iconPosition === 'left' ? 'zep-flex-row-reverse' : ''}>
        {label ?? children}
        {icon && <FunctionalIcon name={icon} />}
      </Spacing>
    </button>
  )
}

export const Button: FC<ZpsButtonProps> = ({
  variant,
  label,
  children,
  icon,
  iconPosition = 'left',
  href,
  buttonType = 'default',
  onClick,
  ...props
}: ZpsButtonProps) => {
  if (href) {
    return (
      <a
        download={buttonType === 'download'}
        className="zep-w-full sm:zep-w-fit"
        href={getUrlWithTrailingSlash(href)}
      >
        <Btn
          label={label}
          iconPosition={iconPosition}
          icon={icon}
          className="zep-w-full sm:zep-w-fit"
          variant={variant}
          {...props}
        >
          {children}
        </Btn>
      </a>
    )
  }
  return (
    <Btn
      label={label}
      iconPosition={iconPosition}
      icon={icon}
      className="zep-w-full sm:zep-w-fit"
      variant={variant}
      onClick={onClick}
      {...props}
    >
      {children}
    </Btn>
  )
};
