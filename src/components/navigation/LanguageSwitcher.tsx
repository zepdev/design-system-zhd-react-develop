import { FunctionalIcon, Link, LinkMode } from '@zepdev/design-system-component-library-react';
import { useEffect, useState } from 'react';
import { LanguageSwitcherProps, Locale } from './navigation.interface';

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  selectedLocale,
  setLocaleSwitcherMenu,
  locales,
  setLanguageSwitcher,
  setSelectedLocale,
}: LanguageSwitcherProps) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(true);
  }, []);

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
      <div className="md:zep-hidden">
        <div className="zep-text-typography-dark-100 zep-mb-1.5 zep-flex zep-gap-0.5 zep-items-center">
          <FunctionalIcon name="arrow-long-left" size={20} />
          <Link
            mode={LinkMode.Standalone}
            label="Züruck"
            onClick={() => setLanguageSwitcher && setLanguageSwitcher(false)}
          />
        </div>

        {groupedByCountry &&
          Object.keys(groupedByCountry)?.map((key) => (
            <div key={key}>
              <p className="zep-mb-1.5 zep-typography-bodyText zep-text-typography-dark-100">{key}</p>

              {groupedByCountry[key]?.map((locale: Locale) => (
                <div
                  key={locale.value}
                  className="zep-flex zep-gap-1 zep-mb-1.5 zep-items-center"
                  onClick={() => setSelectedLocale && setSelectedLocale(locale)}
                >
                  <div className="zep-w-1.5 zep-h-1.5 zep-bg-typography-light-100 zep-flex zep-justify-center zep-items-center zep-rounded-full">
                    {selectedLocale?.value === locale?.value && (
                      <div className="zep-w-0.75 zep-h-0.75 zep-bg-neutral-light-default zep-rounded-full" />
                    )}
                  </div>
                  <p className="zep-typography-bodyText zep-text-typography-dark-100">{locale?.label}</p>
                </div>
              ))}
            </div>
          ))}
      </div>

      <div className="zep-hidden md:zep-block">
        <div
          className={`zep-fixed zep-top-[0px] zep-right-[0px] zep-bg-typography-light-100 zep-ease-out zep-w-[0px] zep-duration-500 zep-h-screen zep-z-10 ${
            expanded ? 'md:zep-w-[440px] lg:zep-w-[480px] zep-pl-3 zep-pt-2 zep-pr-2' : 'zep-w-[0px]'
          }`}
        >
          <div className={`${expanded ? 'zep-block zep-overflow-hidden' : 'zep-hidden'}`}>
            <div className="zep-flex zep-justify-end zep-mb-6">
              <FunctionalIcon
                name="close"
                color="#262626"
                size={24}
                onClick={closeSidebar}
                className="zep-cursor-pointer"
              />
            </div>
            {groupedByCountry &&
              Object.keys(groupedByCountry)?.map((key) => (
                <div key={key}>
                  <p className="zep-mb-1.5 zep-typography-bodyText zep-text-typography-dark-100">{key}</p>

                  {groupedByCountry[key]?.map((locale: Locale) => (
                    <div
                      key={locale.value}
                      className="zep-flex zep-gap-1 zep-mb-1.5 zep-items-center"
                      onClick={() => setSelectedLocale && setSelectedLocale(locale)}
                    >
                      <div className="zep-w-1.5 zep-h-1.5 zep-border-darkgrey-500 zep-border-1 zep-flex zep-justify-center zep-items-center zep-rounded-full">
                        {selectedLocale?.value === locale?.value && (
                          <div className="zep-w-0.75 zep-h-0.75 zep-bg-darkgrey-500 zep-rounded-full" />
                        )}
                      </div>
                      <p className="zep-typography-bodyText zep-text-typography-dark-100">{locale?.label}</p>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
        <div
          onClick={closeSidebar}
          className={`zep-fixed zep-top-[0px] zep-left-[0px] zep-bg-[#000] transition-all zep-duration-500  zep-w-screen zep-h-screen ${
            expanded ? 'zep-opacity-70' : 'zep-opacity-[0]'
          }`}
        ></div>
      </div>
    </>
  );
};
