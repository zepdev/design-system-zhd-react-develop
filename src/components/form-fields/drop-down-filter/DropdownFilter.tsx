import { FunctionalIcon } from '@zepdev/design-system-component-library-react';
import classNames from 'classnames';
import clsx from 'clsx';
import { forwardRef, useCallback, useMemo, useState } from 'react';
import { DropdownFilterItem, DropdownFilterProps } from './DropdownFilter.interface';

export const DropdownFilter = forwardRef<HTMLInputElement, DropdownFilterProps>(
  (
    {
      onChange,
      options = [],
      name,
      value = [],
      placeholder,
      className,
      label,
      error,
      dropdownClassname,
      disabled,
      required,
      notRequiredHint = '(optional)',
    },
    ref,
  ) => {
    const [search, setSearch] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(placeholder);

    const filteredOptions = useMemo(() => {
      if (search) return options.filter((el) => el.label.toLowerCase().includes(search.toLowerCase()));

      return options;
    }, [options, search]);

    const handleChange = useCallback(
      (item: DropdownFilterItem) => {
        onChange({ target: { value: item.value, name } });
        setSelectedItem(item.value);
        setSearch('');
        setIsDropdownOpen(!isDropdownOpen);
      },
      [name, onChange, value],
    );

    return (
      <div className="zep-relative zep-flex zep-flex-col zep-mb-2 zep-z-30" ref={ref}>
        {label && (
          <label htmlFor={name} className="zep-mb-0.5 zep-text-primary-default">
            {label}
            {!required && (
              <span data-testid="zep-input-label-hint" className="zep-ml-0.25">
                {notRequiredHint}
              </span>
            )}
          </label>
        )}
        <div
          key={name}
          id="dropdownSearchButton"
          data-dropdown-toggle={`dropdownSearch-${name}`}
          data-dropdown-placement="top"
          className={classNames(
            `zep-relative zep-max-h-[48px] zep-border zep-border-primary-default zep-text-primary-default zep-w-full zep-options-center zep-flex zep-justify-between zep-transition-all zep-cursor-pointer zep-overflow-auto ${className}`,
            {
              'zep-pointer-events-none zep-cursor-not-allowed': disabled,
            },
          )}
        >
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={clsx(
              'zep-w-full zep-text-typography-dark-70 zep-border-1 zep-border-solid zep-px-1 zep-py-0.75',
              { 'zep-border-2 zep-border-error': error },
              { 'zep-border-primary-default': !error },
            )}
          >
            <div className="zep-relative">
              <input
                type="text"
                value={search}
                id="input-group-search"
                className="zep-block zep-w-full zep-outline-none placeholder:zep-text-typography-dark-70 zep-cursor-pointer"
                placeholder={selectedItem}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <FunctionalIcon
            color="zep-bg-primary-default"
            name={isDropdownOpen ? 'chevron-up' : 'chevron-down'}
            className={'zep-absolute zep-right-1 zep-top-[15px]'}
          />
        </div>

        <div
          id={`dropdownSearch-${name}`}
          className={classNames(
            'zep-absolute zep-top-[70px] zep-z-10 zep-mt-1 zep-w-full zep-overflow-hidden zep-left-[0px] zep-border-primary-default zep-max-h-[300px] zep-bg-[#fff] zep-rounded-4 zep-shadow-md',
            { 'zep-hidden': !isDropdownOpen },
            dropdownClassname,
          )}
        >
          <ul
            className={classNames('zep-h-[360px] zep-pb-1 zep-overflow-y-auto zep-bg-[#fff]')}
            aria-labelledby="dropdownSearchButton"
          >
            {filteredOptions.map((item) => {
              return (
                <li
                  key={item.value}
                  className="zep-cursor-pointer"
                  onClick={() => {
                    handleChange(item);
                  }}
                >
                  <div
                    className={classNames(
                      'zep-cursor-pointer zep-px-1 zep-py-1 zep-transition-all hover:zep-bg-greyscale-200',
                    )}
                  >
                    {item.label}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {error && (
          <p
            className={classNames('zep-mt-0.25 zep-mb-0.25', {
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
