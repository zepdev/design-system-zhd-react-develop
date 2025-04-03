import clsx from 'clsx';
import PhoneNumberInput from 'react-phone-number-input';
import { CountrySelect } from './CountrySelect';

import { PhoneInputProps } from './phone-input.interface';

import 'react-phone-number-input/style.css';
import './PhoneInput.css';

export const PhoneInput = ({
  id,
  onChange,
  name,
  disabled,
  className,
  label,
  error,
  readOnly,
  notRequiredHint = '(optional)',
  required = false,
  defaultCountry = 'DE',
  ...props
}: PhoneInputProps) => {
  const changeHandler = (value?: string) => {
    if (onChange) onChange({ target: { value: value as string, name: name } });
  };

  return (
    <div
      className={clsx(
        'zep-inline-flex zep-flex-col zep-flex-wrap zep-items-stretch zep-justify-start zep-relative zep-group zep-w-full zep-mb-1',
        [disabled ? 'zep-cursor-not-allowed zep-opacity-disabled' : 'zep-cursor-pointer'],
        className,
      )}
      data-testid="zep-phone-input"
    >
      {label && (
        <label htmlFor={id} className="zep-typography-bodyText zep-mb-0.5 zep-text-primary-default">
          {label}
          {!required && <span className="zep-ml-0.25">{notRequiredHint}</span>}
        </label>
      )}
      <PhoneNumberInput
        {...props}
        id={id}
        onChange={changeHandler}
        disabled={disabled}
        error={error}
        readOnly={readOnly}
        required={required}
        defaultCountry={defaultCountry}
        international
        countrySelectComponent={CountrySelect}
        data-testid="zep-phone-input-field"
        className={clsx(
          'zep-relative zep-w-full zep-box-border zep-h-3 zep-border-1 zep-border-solid zep-bg-greyscale-0 zep-border-primary-default',
          {
            'zep-border-2 !zep-border-error': error,
            '!zep-bg-greyscale-200': readOnly,
          },
        )}
      />
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
};
