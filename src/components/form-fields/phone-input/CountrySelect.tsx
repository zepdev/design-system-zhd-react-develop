/* eslint-disable @typescript-eslint/no-explicit-any */
import { Listbox } from '@headlessui/react';
import cx from 'classnames';
import { Fragment, useMemo } from 'react';
import { getCountryCallingCode } from 'react-phone-number-input';
import { CountrySelectProps, Option } from './country-select.interface';

const getSelectedOption = (options: Array<Option>, value: string) => {
  for (const option of options) {
    if (!option.divider && option.value === value) {
      return option;
    }
  }
};

const ArrowIcon = () => (
  <svg width="12" height="8" viewBox="0 0 12 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.59 0.295013L6 4.87501L1.41 0.295013L0 1.70501L6 7.70501L12 1.70501L10.59 0.295013Z"
      fill="currentColor"
    />
  </svg>
);

const CheckmarkIcon = () => (
  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.79496 10.875L1.62496 6.705L0.204956 8.115L5.79496 13.705L17.795 1.705L16.385 0.294998L5.79496 10.875Z"
      fill="black"
    />
  </svg>
);

export const CountrySelect = ({
  value,
  options,
  iconComponent: Icon,
  arrowComponent: Arrow = ArrowIcon,
  unicodeFlags,
  onChange,
}: CountrySelectProps) => {
  const selectedOption = useMemo(() => {
    return getSelectedOption(options, value);
  }, [options, value]);

  return (
    <div
      className="zep-mr-0.25 zep-h-full zep-w-fit zep-cursor-pointer zep-rounded-l-4 zep-outline-none zep-ring-focus zep-ring-offset-1 focus-within:zep-ring zep-group"
      data-testid="zep-phone-input-country-select"
    >
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <>
            <Listbox.Button
              className={'zep-relative zep-flex zep-h-full zep-items-center zep-gap-0.5 zep-px-1 zep-outline-none'}
              data-testid="zep-phone-input-country-select-button"
            >
              <Icon
                aria-hidden
                country={value}
                label={selectedOption?.label}
                aspectRatio={unicodeFlags ? 1 : undefined}
              />

              {selectedOption?.value || 'ZZ'}

              <span
                className={cx({
                  'zep-rotate-180': open,
                })}
              >
                <Arrow />
              </span>

              <span className="zep-absolute -zep-right-0.125 zep-top-1/2 zep-flex zep-h-1.5 zep-w-[1px] -zep-translate-y-1/2 zep-bg-greyscale-400 group-focus-within:zep-hidden"></span>
            </Listbox.Button>

            <Listbox.Options
              className="zep-absolute zep-top-[calc(100%+8px)] zep-z-10 zep-flex zep-max-h-[calc(4.5*48px)] zep-min-w-full zep-flex-col zep-overflow-y-scroll zep-rounded-4 zep-bg-greyscale-0 zep-shadow-sm zep-outline-none"
              data-testid="zep-phone-input-country-select-list"
            >
              {options.map((option) => (
                <Listbox.Option key={option.value + option.label} value={option.value} as={Fragment}>
                  {({ active, selected }) => (
                    <li
                      className={cx(
                        'zep-typography-bodyText zep-flex zep-justify-between zep-py-0.75 zep-min-w-fit zep-items-center zep-whitespace-nowrap zep-gap-0.5 zep-px-1 hover:zep-bg-greyscale-200',
                        {
                          'zep-bg-greyscale-300': active,
                          '!zep-bg-greyscale-300 zep-text-greyscale-900': selected,
                        },
                      )}
                    >
                      <span className="zep-flex zep-gap-0.5 zep-items-center">
                        <Icon
                          aria-hidden
                          country={option.value}
                          label={selectedOption?.label}
                          aspectRatio={unicodeFlags ? 1 : undefined}
                        />

                        {option.label}
                        {option.value && <span>+{getCountryCallingCode(option.value as any)}</span>}
                      </span>

                      {selected && <CheckmarkIcon />}
                    </li>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </>
        )}
      </Listbox>
    </div>
  );
};
