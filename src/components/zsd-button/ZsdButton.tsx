'use client';
import { FunctionalIcon, Spacing } from '@zepdev/design-system-component-library-react';
import { cva } from 'class-variance-authority';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ClassGroup, ClassGroupId } from 'tailwind-merge/src/lib/types';
import { ZsdButtonProps, ZsdButtonVariant } from './zsd-button.interface';

export const zsdButtonVariants: Record<ClassGroupId, ClassGroup> = {
  [ZsdButtonVariant.PrimaryDark]: [
    'zep-bg-primary-default',
    'zep-text-typography-light-100',
    'enabled:hover:zep-bg-primary-hover',
    'enabled:hover:zep-text-typography-light-100',
    'enabled:active:zep-bg-primary-active',
    'enabled:active:zep-text-typography-light-100',
    'disabled:zep-opacity-disabled',
  ],
  [ZsdButtonVariant.SecondaryDark]: [
    'zep-bg-transparent',
    'zep-text-typography-primary-default',
    'enabled:hover:zep-bg-primary-hover',
    'enabled:hover:zep-text-typography-light-100',
    'enabled:active:zep-bg-primary-active',
    'enabled:active:zep-text-typography-light-100',
    'zep-ring-2',
    'zep-ring-inset',
    'zep-ring-primary-default',
    'enabled:hover:zep-ring-0',
    'enabled:active:zep-ring-0',
    'disabled:zep-ring-opacity-disabled',
  ],
  [ZsdButtonVariant.PrimaryLight]: [
    'zep-bg-typography-neutral-light-default',
    'zep-text-typography-dark-100',
    'enabled:hover:zep-bg-typography-neutral-light-hover',
    'enabled:hover:zep-text-typography-dark-100',
    'enabled:active:zep-bg-typography-neutral-light-active',
    'enabled:active:zep-text-typography-dark-100',
    'disabled:zep-opacity-disabled',
  ],
  [ZsdButtonVariant.SecondaryLight]: [
    'zep-bg-transparent',
    'zep-ring-2',
    'zep-ring-inset',
    'zep-ring-typography-neutral-light-default',
    'zep-text-typography-neutral-light-default',
    'enabled:hover:zep-text-typography-dark-100',
    'enabled:hover:zep-ring-0',
    'enabled:hover:zep-bg-neutral-light-default',
    'enabled:active:zep-ring-0',
    'enabled:active:zep-bg-typography-neutral-light-active',
    'enabled:active:zep-text-typography-dark-100',
    'disabled:zep-bg-opacity-disabled',
  ],
};
export const zsdButton = cva(
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
  ],
  {
    variants: {
      variant: zsdButtonVariants,
    },
    defaultVariants: {
      variant: ZsdButtonVariant.PrimaryDark,
    },
  },
);

export const Button: React.FC<ZsdButtonProps> = ({
  className,
  variant,
  isLoading = false,
  label,
  children,
  icon,
  iconPosition = 'left',
  ...props
}: ZsdButtonProps) => {
  const isIconButton = !label || label === '';
  const buttonClass = isIconButton ? zsdButton({ variant }).replace('zep-px-1', 'zep-px-0.75') : zsdButton({ variant });
  return (
    <button className={twMerge(buttonClass, className, 'zep-w-full sm:zep-w-inherit')} {...props}>
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
  );
};
