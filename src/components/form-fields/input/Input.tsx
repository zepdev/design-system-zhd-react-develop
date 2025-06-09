import React, { forwardRef } from 'react';

import { FunctionalIcon } from '@zepdev/design-system-component-library-react';
import clsx from 'clsx';
import { focusRing } from '../../../tailwind/styles/focus';
import { InputProps } from './input.interface';

export const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      value,
      error,
      label,
      placeholder,
      disabled = false,
      required,
      notRequiredHint = '(optional)',
      icon,
      readOnly = false,
      hasInfoIcon = false,
      messageAriaLive = 'polite',
      state = 'default',
      infoTitle,
      message,
      onIconToggle,
      onIconInfoClick,
      onChange,
      ...props
    },
    ref,
  ) => {
    const type = props.type ?? 'text';
    const searchCancel = clsx(
      'zep-search-cancel:zep-appearance-none',
      'zep-search-cancel:zep-w-1.5',
      'zep-search-cancel:zep-h-1.5',
      'zep-search-cancel:zep-border-[15px]',
      'zep-search-cancel:zep-border-solid',
      'zep-search-cancel:zep-border-transparent',
      'zep-search-cancel:zep-cursor-pointer',
      'zep-search-cancel:zep-bg-no-repeat',
      'zep-search-cancel:zep-mr-[-16px]',
      'zep-search-cancel:zep-bg-[url(/assets/search-cancel.svg)]',
    );

    const calendarPicker = clsx(
      'zep-calendar-picker:zep-appearance-none',
      'zep-calendar-picker:zep-w-1.5',
      'zep-calendar-picker:zep-h-1.5',
      'zep-calendar-picker:zep-p-0',
      'zep-calendar-picker:zep-border-x-[16px]',
      'zep-calendar-picker:zep-border-solid',
      'zep-calendar-picker:zep-border-transparent',
      'zep-calendar-picker:zep-cursor-pointer',
      'zep-calendar-picker:zep-bg-no-repeat',
      'zep-calendar-picker:zep-mr-[-16px]',
      'zep-calendar-picker:zep-bg-[url(/assets/calendar.svg)]',
    );

    return (
      <div
        className={clsx(
          'zep-inline-flex zep-flex-col zep-flex-wrap zep-items-stretch zep-justify-start zep-relative zep-mb-2',
          disabled ? 'zep-cursor-not-allowed zep-opacity-disabled' : 'zep-cursor-pointer',
          props.className,
        )}
        data-testid="zep-input"
      >
        {label && (
          <label htmlFor={id} className="zep-mb-0.5 zep-text-typography-dark-100">
            {label}
            {!required && (
              <span data-testid="zep-input-label-hint" className="zep-ml-0.25">
                {notRequiredHint}
              </span>
            )}
          </label>
        )}
        <div className="zep-inline-flex zep-flex-row zep-flex-nowrap zep-items-center zep-gap-0.5">
          <div className="zep-relative zep-w-full">
            <input
              id={id}
              ref={ref}
              value={value}
              defaultValue={''}
              placeholder={readOnly ? undefined : placeholder}
              type={type}
              onChange={!disabled ? onChange : undefined}
              aria-describedby={props['aria-describedby']}
              disabled={disabled ?? readOnly}
              data-testid="zep-input-field"
              {...props}
              className={clsx(
                focusRing,
                'zep-border-solid',
                'zep-text-typography-dark-100',
                'zep-border-1',
                'zep-w-full',
                'zep-h-3',
                'zep-px-1',
                'zep-leading-3',
                'zep-leading-[22px]',
                'placeholder:zep-text-typography-dark-100',
                'focus-visible:zep-ring-offset-1',
                { 'zep-border-typography-dark-100': !error },
                { 'zep-border-2 zep-border-error': error },
                {
                  'zep-cursor-not-allowed zep-bg-background-medium': readOnly, // does not work at the moment
                },
                { [calendarPicker]: type === 'date' },
                { [searchCancel]: type === 'search' },
              )}
            />
            {icon && (
              <FunctionalIcon
                onClick={onIconToggle}
                className={clsx('zep-absolute', 'zep-top-[0px]', 'zep-bottom-0', 'zep-right-1', 'zep-h-full', {
                  'zep-cursor-pointer': onIconToggle,
                })}
                name={icon}
              />
            )}
          </div>
          {hasInfoIcon && (
            <button onClick={onIconInfoClick}>
              <FunctionalIcon name="info-circle-filled" title={infoTitle} />
            </button>
          )}
        </div>
        {message && (
          <span
            id={message}
            aria-live={messageAriaLive}
            className={clsx(
              {
                'zep-text-error': state === 'error',
                'zep-text-info': state === 'info',
                'zep-text-typography-dark-100': state === 'default',
              },
              'zep-mt-0.25 zep-flex zep-flex-row zep-gap-0.5 zep-text-0.875',
            )}
          >
            {state === 'error' && (
              <FunctionalIcon name="warning-triangle-filled" className="zep-flex-shrink-0 zep-text-error" />
            )}
            {state === 'info' && (
              <FunctionalIcon name="info-circle-filled" className="zep-flex-shrink-0 zep-text-info" />
            )}
            <span className="zep-mt-0.125">{message}</span>
          </span>
        )}
        {error && (
          <p
            className={clsx('zep-mt-0.25', {
              'zep-text-error': error,
            })}
          >
            {error}
          </p>
        )}
      </div>
    );
  },
);
