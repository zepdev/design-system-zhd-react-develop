'use client';

import clsx from 'clsx';
import { forwardRef } from 'react';
import { RadioProps } from './radio.interface';

export const Radio: React.FC<RadioProps> = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      id,
      name,
      required = false,
      disabled = false,
      error = false,
      label,
      value = label,
      tabIndex = 0,
      onChange,
      ...props
    },
    ref,
  ) => {
    return (
      <span
        className={clsx(
          'zep-inline-flex',
          'zep-flex-row',
          'zep-flex-wrap',
          'zep-items-center',
          'zep-justify-start',
          'zep-relative',
          {
            '[&>input]:hover:zep-border-typography-dark-100 [&>span]:hover:zep-bg-background-dark [&>input]:hover:zep-border-2 [&>span]:hover:zep-b-2':
              !disabled && !error,
          },
          { 'zep-cursor-not-allowed zep-opacity-disabled': disabled },
        )}
        data-testid="zep-radio"
      >
        <input
          id={id}
          ref={ref}
          value={value}
          name={name}
          type="radio"
          tabIndex={tabIndex}
          required={required}
          onChange={!disabled ? onChange : undefined}
          className={clsx(
            'sr-only',
            'zep-peer',
            'zep-transition-all',
            'zep-absolute',
            'zep-border-1',
            'zep-appearance-none',
            'focus-visible:zep-ring-offset-1',
            'zep-w-1.5',
            'zep-h-1.5',
            'zep-rounded-full',
            { 'zep-border-typography-dark-100': !error },
            { 'zep-border-2': error },
            { 'checked:zep-error zep-border-error': error },
            { 'zep-border-error': error },
          )}
          disabled={disabled}
          data-testid="zep-radio-input"
          {...props}
        />
        <label
          htmlFor={id}
          className={clsx('zep-relative zep-z-20 zep-pl-[36px] zep-text-typography-dark-100', [
            { 'zep-cursor-pointer': !disabled },
          ])}
        >
          {label}
        </label>
        <span
          className={clsx(
            'zep-hidden peer-checked:zep-block',
            'zep-absolute',
            'zep-z-10',
            'zep-rounded-full',
            'zep-border-greyscale-0',
            { 'zep-left-[1px] zep-top-[1px] zep-h-[22px] zep-w-[22px] zep-border-[6px]': !error },
            { 'zep-left-0.125 zep-top-0.125 zep-h-[20px] zep-w-[20px] zep-border-[5px]': error },
            [error ? 'zep-bg-error' : 'zep-bg-background-dark'],
          )}
          data-testid="zep-radio-checked"
        ></span>
      </span>
    );
  },
);
