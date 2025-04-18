import { FunctionalIcon } from '@zepdev/design-system-component-library-react';
import clsx from 'clsx';
import { forwardRef } from 'react';
import { focusRing } from '../../../tailwind/styles/focus';
import { CheckboxProps } from './checkbox.interface';

export const Checkbox = forwardRef(({ className, ...props }: CheckboxProps, ref: React.LegacyRef<HTMLInputElement>) => {
  const { disabled, error, checked, labelhtml } = props;
  return (
    <div
      className={clsx(
        'zep-group',
        'zep-relative',
        'zep-inline-flex',
        'zep-flex-row',
        'zep-flex-wrap',
        'zep-items-center',
        'zep-justify-start',
        'zep-mb-2',
        {
          '[&>svg]:hover:zep-bg-primary-hover': !disabled && !error,
        },
        { 'zep-cursor-not-allowed': disabled },
        className,
      )}
    >
      <input
        ref={ref}
        checked={checked}
        disabled={disabled}
        id={props.name}
        type="checkbox"
        className={clsx(
          focusRing,
          'sr-only',
          'zep-peer',
          'zep-absolute',
          'zep-top-[0]',
          'zep-appearance-none',
          'focus-visible:zep-ring-offset-1',
          'zep-w-1.5',
          'zep-h-1.5',
          'zep-border-1',
          'checked:zep-border-none checked:zep-bg-primary-default',
          { 'checked:zep-bg-opacity-disabled': disabled },
          { 'zep-border-2 zep-border-error': error },
          {
            'zep-border-neutral-dark-default group-hover:zep-border-primary-hover group-hover:zep-border-2 zep-transition-all':
              !error && !disabled,
          },
          { 'zep-border-neutral-dark-default zep-border-opacity-disabled': disabled },
        )}
        {...props}
      />
      <label
        dangerouslySetInnerHTML={{ __html: labelhtml ? `${labelhtml}` : '' }}
        htmlFor={props.name}
        className={clsx('zep-text-typography-dark-100 zep-relative zep-pl-[36px]', [
          disabled ? 'zep-cursor-not-allowed zep-text-opacity-disabled' : 'zep-cursor-pointer',
        ])}
      />
      <FunctionalIcon
        name="check"
        className={clsx(
          'zep-hidden peer-checked:zep-block',
          'zep-text-neutral-dark-contrast',
          'zep-pointer-events-none',
          'zep-w-1.5',
          'zep-h-1.5',
          'zep-z-10',
          'zep-absolute',
          'zep-top-[-0.1px]',
          'zep-left-[-0.1px]',
          { 'zep-bg-transparent': !error && !disabled },
          { 'zep-border-opacity-disabled zep-bg-opacity-disabled': disabled },
          { 'zep-bg-error': error },
        )}
      />
    </div>
    // {error && <h4 className="absolute bottom-[-10px] lg:bottom-0 text-xs leading-5 text-red-600 mt-1">{error}</h4>}
  );
});
