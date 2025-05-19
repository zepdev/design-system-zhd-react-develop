import { FunctionalIcon, Link, LinkMode, Radio, RadioVariant } from '@zepdev/design-system-component-library-react';
import { FC, useEffect, useState } from 'react';
import { getDataLayer } from '../../utils/getDataLayer';
import { LanguageSwitcherProps, Locale } from './navigation.interface';

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({
  selectedLocale,
  setLocaleSwitcherMenu,
  locales,
  header,
  labelBack,
  setLanguageSwitcher,
  setSelectedLocale,
}: LanguageSwitcherProps) => {
  const [expanded, setExpanded] = useState(false);
  const [backAnimation, setBackAnimation] = useState(false);
  const datalayer = getDataLayer();

  useEffect(() => {
    setExpanded(true);
  }, []);

  /* Handle body scroll */
  useEffect(() => {
    if (expanded) {
      document.body.classList.add('zep-overflow-hidden');
    } else {
      document.body.classList.remove('zep-overflow-hidden');
    }
    return () => {
      document.body.classList.remove('zep-overflow-hidden');
    };
  }, [expanded]);

  const closeSidebar = () => {
    setTimeout(() => {
      if (setLocaleSwitcherMenu) setLocaleSwitcherMenu(false);
    }, 500);
    setExpanded(false);
  };

  const groupedByCountry = locales?.reduce((acc, locale) => {
    if (!acc[locale.country]) {
      acc[locale.country] = [];
    }
    acc[locale.country].push(locale);
    return acc;
  }, {});

  return (
    <>
      {/* Mobile Navbar */}
      <div className={`${backAnimation ? 'zep-animate-slide-out' : ''} md:zep-hidden`}>
        <div className="zep-text-typography-dark-100 zep-mb-2.5 zep-flex zep-gap-0.5 zep-items-center">
          <Link
            mode={LinkMode.Standalone}
            label={labelBack}
            iconPlacement="before"
            icon="arrow-long-left"
            onClick={(e) => {
              e.preventDefault();
              setBackAnimation(true);
              datalayer?.push({
                event: 'interaction_nav',
                link_text: `BACK_ARROW`,
                link_type: 'language_switcher_close', // main_nav, logo, sub_nav, search, language_switcher, etc.
                link_section: 'language_switcher',

              });
              setTimeout(() => {
                setBackAnimation(false);
                if (setLanguageSwitcher) {
                  setLanguageSwitcher(false);
                }
              }, 300);
            }}
          />
        </div>
        <h4 className="zep-text-headlineXS-fluid-cqi zep-text-typography-dark-100 zep-mb-1.5 md:zep-mb-3">{header}</h4>
        {groupedByCountry &&
          Object.keys(groupedByCountry)
            ?.sort()
            ?.map((key, index) => (
              <div className="zep-mb-2 zep-flex zep-flex-col zep-gap-1" key={`${key}${index}`}>
                <p className="zep-typography-bodyText zep-text-typography-dark-100">{key}</p>
                {groupedByCountry[key]?.map((locale: Locale) => (
                  <Radio
                    id={locale.value}
                    name={locale.label}
                    label={locale?.label}
                    onChange={() => {
                      if (setSelectedLocale) {
                        setSelectedLocale(locale);
                        datalayer?.push({
                          event: 'interaction_nav',
                          link_text: `${locale?.label}`,
                          link_type: 'language_switcher_item', // main_nav, logo, sub_nav, search, language_switcher, etc.
                          link_section: 'language_switcher',
                        });
                      }
                    }}
                    checked={selectedLocale?.value === locale?.value}
                    variant={RadioVariant.Zsd}
                  />
                ))}
              </div>
            ))}
      </div>

      {/* Desktop Navbar */}
      <div className="zep-hidden md:zep-block">
        <div
          className={`zep-fixed zep-top-[0px] zep-right-[0px] md:zep-w-[440px] lg:zep-w-[480px] zep-pl-3 zep-pt-2 zep-pr-2 zep-bg-background-light zep-ease-out zep-w-[0px] zep-duration-500 zep-h-screen zep-z-[1000] ${
            expanded ? 'zep-translate-x-0 ' : 'zep-translate-x-full'
          }`}
        >
          <div className={`${expanded ? 'zep-block zep-overflow-hidden' : ''}`}>
            <div className="zep-flex zep-justify-end zep-mb-2">
              <FunctionalIcon
                name="close"
                color="#262626"
                size={24}
                onClick={closeSidebar}
                className="zep-cursor-pointer"
                onClickCapture={() => {
                  datalayer?.push({
                    event: 'interaction_nav',
                    link_text: `CLOSE_LANGUAGE_SWITCHER`,
                    link_type: 'language_switcher_close', // main_nav, logo, sub_nav, search, language_switcher, etc. 
                    link_section: 'language_switcher',

                  });
                }}
              />
            </div>
            <h4 className="zep-text-headlineXS-fluid-cqi zep-text-typography-dark-100 zep-mb-3">{header}</h4>
            {groupedByCountry &&
              Object.keys(groupedByCountry)
                ?.sort()
                ?.map((key, index) => (
                  <div className="zep-mb-3 zep-flex zep-flex-col zep-gap-1" key={`${key}${index}`}>
                    <p className="zep-typography-bodyText zep-text-typography-dark-100">{key}</p>
                    {groupedByCountry[key]?.map((locale: Locale) => (
                      <Radio
                        id={locale.value}
                        name={locale.label}
                        label={locale?.label}
                        onChange={() => {
                          if (setSelectedLocale) {
                            setSelectedLocale(locale);
                            datalayer?.push({
                              event: 'interaction_nav',
                              link_text: `${locale?.label}`,
                              link_type: 'language_switcher_item', // main_nav, logo, sub_nav, search, language_switcher, etc.
                              link_section: 'language_switcher',
                            });
                          }
                        }}
                        checked={selectedLocale?.value === locale?.value}
                        variant={RadioVariant.Zsd}
                      />
                    ))}
                  </div>
                ))}
          </div>
        </div>
        <div
          onClick={closeSidebar}
          onClickCapture={() => {
            datalayer?.push({
              event: 'interaction_nav',
              link_text: `CLOSE_LANGUAGE_SWITCHER`,
              link_type: 'language_switcher_close', // main_nav, logo, sub_nav, search, language_switcher, etc.
              link_section: 'language_switcher',
            });
          }}
          className={`zep-fixed zep-top-[0px] zep-left-[0px] zep-bg-[#000] transition-all zep-duration-500  zep-w-screen zep-h-screen zep-z-[500] ${
            expanded ? 'zep-opacity-70' : 'zep-opacity-[0]'
          }`}
        ></div>
      </div>
    </>
  );
};
