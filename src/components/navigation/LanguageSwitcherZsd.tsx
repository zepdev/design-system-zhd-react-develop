import { Menu, Transition } from '@headlessui/react';
import { FunctionalIcon } from '@zepdev/design-system-component-library-react';
import clsx from 'clsx';
import * as Flags from 'country-flag-icons/react/1x1';
import { FC, Fragment, useMemo } from 'react';
import { getDataLayer } from '../../utils/getDataLayer';
import { LanguageSwitcherZsdProps, Locale } from './navigation.interface';

type CountryCode = 'DE' | 'FR' | 'GB' | 'IT' | 'IN' | 'US';

interface CountryConfig {
  code: CountryCode;
  name: string;
  locales: Locale[];
}

const COUNTRY_CODE_MAP: Record<string, CountryCode> = {
  Germany: 'DE',
  Deutschland: 'DE',
  France: 'FR',
  Frankreich: 'FR',
  'Great Britain': 'GB',
  Großbritannien: 'GB',
  'United Kingdom': 'GB',
  Italy: 'IT',
  Italien: 'IT',
  India: 'IN',
  Indien: 'IN',
  'United States': 'US',
  USA: 'US',
  US: 'US',
  America: 'US',
  'Vereinigte Staaten': 'US',
  VSA: 'US',
};

const FlagIcon: FC<{ countryCode: CountryCode; className?: string }> = ({ countryCode, className }) => {
  const FlagComponent = (Flags as any)[countryCode];
  if (!FlagComponent) return null;
  return <FlagComponent className={clsx('zep-w-[20px] zep-h-[20px] zep-rounded-full', className)} />;
};

export const LanguageSwitcherZsd: FC<LanguageSwitcherZsdProps> = ({ selectedLocale, locales, setSelectedLocale }) => {
  const datalayer = getDataLayer();

  const countriesWithLocales = useMemo(() => {
    if (!locales) return [];

    const grouped = locales.reduce<Record<string, CountryConfig>>((acc, locale) => {
      const countryCode = COUNTRY_CODE_MAP[locale.country];
      if (!countryCode) return acc;

      if (!acc[locale.country]) {
        acc[locale.country] = {
          code: countryCode,
          name: locale.country,
          locales: [],
        };
      }
      acc[locale.country].locales.push(locale);
      return acc;
    }, {});

    return Object.values(grouped);
  }, [locales]);

  const selectedCountryCode = selectedLocale?.country ? COUNTRY_CODE_MAP[selectedLocale.country] : undefined;

  const handleLocaleSelect = (locale: Locale) => {
    if (setSelectedLocale) {
      setSelectedLocale(locale);
      datalayer?.push({
        event: 'interaction_nav',
        link_text: `${locale.country} | ${locale.langAbbrev?.toUpperCase()}`,
        link_type: 'language_switcher_item',
        link_section: 'language_switcher',
      });
    }
  };

  return (
    <Menu as="div" className="zep-relative zep-inline-block zep-text-left">
      {({ open }) => (
        <>
          <Menu.Button
            className="zep-flex zep-items-center zep-gap-0.5 zep-cursor-pointer zep-group zep-bg-transparent zep-border-none zep-p-0"
            onClick={() => {
              datalayer?.push({
                event: 'interaction_nav',
                link_text: `${selectedLocale?.country} | ${selectedLocale?.langAbbrev?.toUpperCase()}`,
                link_type: 'language_switcher',
                link_section: 'nav',
              });
            }}
          >
            {selectedCountryCode && <FlagIcon countryCode={selectedCountryCode} />}
            <span className="zep-typography-bodyText zep-text-typography-dark-100 zep-font-600 zep-text-0.875 group-hover:zep-underline">
              {`${selectedLocale?.country} | ${selectedLocale?.langAbbrev?.toUpperCase()}`}
            </span>
            <FunctionalIcon
              name="chevron-down"
              size={20}
              className={clsx('zep-transition-transform zep-duration-200', {
                'zep-rotate-180': open,
              })}
            />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="zep-transition zep-ease-out zep-duration-100"
            enterFrom="zep-transform zep-opacity-0 zep-scale-95"
            enterTo="zep-transform zep-opacity-100 zep-scale-100"
            leave="zep-transition zep-ease-in zep-duration-75"
            leaveFrom="zep-transform zep-opacity-100 zep-scale-100"
            leaveTo="zep-transform zep-opacity-0 zep-scale-95"
          >
            <Menu.Items className="zep-absolute zep-right-0 zep-mt-0.5 zep-w-[200px] zep-origin-top-right zep-bg-background-light zep-shadow-lg zep-ring-1 zep-ring-greyscale-400 zep-focus:outline-none zep-z-[1000] zep-rounded-sm zep-overflow-hidden">
              <div className="zep-py-0.5">
                {countriesWithLocales.map((country) => {
                  const isGermany = country.code === 'DE';

                  if (isGermany) {
                    return (
                      <div key={country.code} className="zep-flex zep-flex-col">
                        <div className="zep-flex zep-items-center zep-gap-0.75 zep-px-1 zep-py-0.5 zep-border-b zep-border-greyscale-300">
                          <FlagIcon countryCode={country.code} />
                          <span className="zep-typography-bodyText zep-text-typography-dark-100 zep-font-600">
                            {country.name}
                          </span>
                        </div>
                        {country.locales.map((locale) => (
                          <Menu.Item key={locale.value}>
                            {({ active }) => (
                              <button
                                type="button"
                                onClick={() => handleLocaleSelect(locale)}
                                className={clsx(
                                  'zep-w-full zep-text-left zep-pl-[56px] zep-pr-1 zep-py-0.5 zep-cursor-pointer zep-border-none zep-typography-bodyText',
                                  {
                                    'zep-bg-greyscale-200': active,
                                    'zep-bg-transparent': !active,
                                    'zep-font-600 zep-text-typography-dark-100': selectedLocale?.value === locale.value,
                                    'zep-font-400 zep-text-typography-dark-100': selectedLocale?.value !== locale.value,
                                  }
                                )}
                              >
                                {locale.label}
                              </button>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    );
                  }

                  const locale = country.locales[0];
                  return (
                    <Menu.Item key={country.code}>
                      {({ active }) => (
                        <button
                          type="button"
                          onClick={() => handleLocaleSelect(locale)}
                          className={clsx(
                            'zep-w-full zep-flex zep-items-center zep-gap-0.75 zep-px-1 zep-py-0.5 zep-cursor-pointer zep-border-none zep-typography-bodyText zep-text-typography-dark-100',
                            {
                              'zep-bg-greyscale-200': active,
                              'zep-bg-transparent': !active,
                              'zep-font-600': selectedLocale?.value === locale.value,
                              'zep-font-400': selectedLocale?.value !== locale.value,
                            }
                          )}
                        >
                          <FlagIcon countryCode={country.code} />
                          <span>{country.name}</span>
                        </button>
                      )}
                    </Menu.Item>
                  );
                })}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};
