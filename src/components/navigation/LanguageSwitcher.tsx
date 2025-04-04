import { FunctionalIcon, Link, LinkMode } from '@zepdev/design-system-component-library-react';
import { useEffect, useState } from 'react';
import { LanguageSwitcherProps, Locale } from './navigation.interface';

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
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
        <div className="zep-text-typography-light-100 zep-mb-2.5 zep-flex zep-gap-0.5 zep-items-center">
          <Link
            mode={LinkMode.Standalone}
            label={labelBack}
            iconPlacement="before"
            icon="arrow-long-left"
            onClick={(e) => {
              e.preventDefault();
              setBackAnimation(true);
              setTimeout(() => {
                setBackAnimation(false);
                if (setLanguageSwitcher) {
                  setLanguageSwitcher(false);
                }
              }, 300);
            }}
          />
        </div>

        <h4 className="zep-text-headlineXS-fluid-cqi zep-text-typography-light-100 zep-mb-2">{header}</h4>
        {groupedByCountry &&
          Object.keys(groupedByCountry)?.map((key, index) => (
            <div className="zep-mb-3" key={`${key}${index}`}>
              <p className="zep-mb-1.5 zep-typography-bodyText zep-text-typography-light-100">{key}</p>
              {groupedByCountry[key]?.map((locale: Locale) => (
                <div
                  key={locale.value}
                  className="zep-flex zep-gap-1 zep-mb-1.5 zep-items-center"
                  onClick={() => setSelectedLocale && setSelectedLocale(locale)}
                >
                  <div className="zep-w-1.5 zep-h-1.5 zep-bg-typography-light-100 zep-flex zep-justify-center zep-items-center zep-rounded-full">
                    {selectedLocale?.value === locale?.value && (
                      <div className="zep-w-0.75 zep-h-0.75 zep-bg-neutral-dark-default zep-rounded-full" />
                    )}
                  </div>
                  <p className="zep-typography-bodyText zep-text-typography-light-100">{locale?.label}</p>
                </div>
              ))}
            </div>
          ))}
      </div>

      {/* Desktop Navbar */}
      <div className="zep-hidden md:zep-block">
        <div
          className={`zep-fixed zep-top-[0px] zep-right-[0px] md:zep-w-[440px] lg:zep-w-[480px] zep-pl-3 zep-pt-2 zep-pr-2 zep-bg-background-dark zep-ease-out zep-w-[0px] zep-duration-500 zep-h-screen zep-z-[1000] ${
            expanded ? 'zep-translate-x-0 ' : 'zep-translate-x-full'
          }`}
        >
          <div className={`${expanded ? 'zep-block zep-overflow-hidden' : ''}`}>
            <div className="zep-flex zep-justify-end zep-mb-2">
              <FunctionalIcon
                name="close"
                color="#fff"
                size={24}
                onClick={closeSidebar}
                className="zep-cursor-pointer"
              />
            </div>
            <h4 className="zep-text-headlineXS-fluid-cqi zep-text-typography-light-100 zep-mb-3">{header}</h4>
            {groupedByCountry &&
              Object.keys(groupedByCountry)?.map((key, index) => (
                <div className="zep-mb-3" key={`${key}${index}`}>
                  <p className="zep-mb-1.5 zep-typography-bodyText zep-text-typography-light-100">{key}</p>
                  {groupedByCountry[key]?.map((locale: Locale) => (
                    <div
                      key={locale.value}
                      className="zep-flex zep-gap-1 zep-mb-1.5 zep-items-center zep-cursor-pointer"
                      onClick={() => setSelectedLocale && setSelectedLocale(locale)}
                    >
                      <div className="zep-w-1.5 zep-h-1.5 zep-bg-typography-light-100 zep-flex zep-justify-center zep-items-center zep-rounded-full">
                        {selectedLocale?.value === locale?.value && (
                          <div className="zep-w-0.75 zep-h-0.75 zep-bg-neutral-dark-default zep-rounded-full" />
                        )}
                      </div>
                      <p className="zep-typography-bodyText zep-text-typography-light-100">{locale?.label}</p>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
        <div
          onClick={closeSidebar}
          className={`zep-fixed zep-top-[0px] zep-left-[0px] zep-bg-[#000] transition-all zep-duration-500  zep-w-screen zep-h-screen zep-z-[500] ${
            expanded ? 'zep-opacity-70' : 'zep-opacity-[0]'
          }`}
        ></div>
      </div>
    </>
  );
};
