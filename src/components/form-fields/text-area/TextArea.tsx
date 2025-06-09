'use client';

import { FunctionalIcon } from '@zepdev/design-system-component-library-react';
import clsx from 'clsx';
import React, { forwardRef, useState } from 'react';
import { TextAreaProps } from './TextArea.interface';

export const TextArea: React.FC<TextAreaProps> = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      disabled = false,
      label,
      message,
      placeholder,
      readOnly = false,
      state = 'default',
      totalCharacters = 500,
      ...props
    },
    ref,
  ) => {
    const hasError = state === 'error';
    const [query, setQuery] = useState('');

    const onChange = (event) => {
      props.onChange?.(event);
      setQuery(event.target.value);
    };

    const disabledOrReadonly = disabled || readOnly;
    const iconColor = hasError ? 'zep-text-error' : state === 'info' ? 'zep-text-info' : '';

    const color = disabled ? 'zep-text-opacity-disabled' : 'zep-text-typography-dark-100';

    const inputClasses = clsx(
      'zep-block',
      'zep-justify-between',
      'zep-border-solid',
      'zep-pl-1',
      'zep-py-0.75',
      'zep-font-roboto',
      'zep-w-full',
      'zep-outline-none',
      'placeholder:zep-text-typography-dark-100/70',
      'zep-text-typography-dark-100',
      hasError ? 'zep-border-2' : 'zep-border-1',
      'zep-pr-0.75',
      color,
      { 'zep-bg-background-medium': readOnly },
      { 'zep-border-typography-dark-100': !disabled && !hasError },
      { 'zep-border-opacity-disabled': disabled },
      { 'zep-border-error': hasError },
      { 'zep-active:ring': !disabledOrReadonly },
      { 'zep-ring-offset-1': !disabledOrReadonly },
      { 'focus-visible:zep-ring': !disabledOrReadonly },
      { 'zep-ring-focus': !disabledOrReadonly },
      { 'zep-cursor-not-allowed': disabledOrReadonly },
      props?.className,
    );
    return (
      <div
        className={clsx('zep-relative zep-inline-block zep-text-left zep-w-full', {
          'zep-cursor-not-allowed zep-opacity-disabled': disabled,
        })}
        data-testid="zep-text-area"
      >
        {label && (
          <div className="zep-block zep-mb-0.5 zep-text-typography-dark-100">
            {label}
            {!props.required && <span className="zep-ml-0.25">(optional)</span>}
          </div>
        )}
        <textarea
          id={props.id}
          ref={ref}
          maxLength={500}
          autoComplete="off"
          placeholder={readOnly ? undefined : placeholder}
          readOnly={readOnly}
          disabled={disabled || readOnly}
          data-testid="zep-text-area-input"
          {...props}
          onChange={onChange}
          className={inputClasses}
        />
        <div
          className={clsx(
            'zep-mt-0.25',
            'zep-text-typography-dark-100',
            'zep-text-0.875',
            'zep-flex zep-h-[40px]',
            iconColor,
          )}
        >
          {message && (
            <div className={clsx('zep-flex', { 'zep-text-error': hasError })}>
              {state !== 'default' && (
                <FunctionalIcon
                  name={hasError ? 'warning-triangle-filled' : 'info-circle-filled'}
                  role="img"
                  size={24}
                  className="zep-mr-0.5 zep-shrink-0"
                />
              )}
              <span className="zep-mt-0.125">{message}</span>
            </div>
          )}
          <div
            className="zep-ml-auto zep-mt-0.125 zep-pl-0.5 zep-flex-shrink-0 zep-text-typography-dark-100 zep-mb-4"
            data-testid="zep-text-area-length-indicator"
          >
            {query.length} / {totalCharacters}
          </div>
        </div>
      </div>
    );
  },
);
