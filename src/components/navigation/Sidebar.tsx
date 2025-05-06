import { FunctionalIcon, Link, LinkMode } from '@zepdev/design-system-component-library-react';
import { useEffect, useState } from 'react';
import languageIcon from '../../assets/language-icon.svg';
import { getDataLayer } from '../../utils/getDataLayer';
import { LanguageSwitcher } from './LanguageSwitcher';
import { NavigationItem, NavigationMenuProps, SidebarProps } from './navigation.interface';

export const Sidebar: React.FC<SidebarProps> = ({
  navItems,
  setOpen,
  initialPath,
  setInitialPath,
  selectedLocale,
  locales,
  header = '',
  labelBack,
  setSelectedLocale,
  navigationUtilityItems,
}: SidebarProps) => {
  const [expanded, setExpanded] = useState(false);
  const [languageSwitcher, setLanguageSwitcher] = useState(false);
  const [animateMobileLanguage, setAnimateMobileLanguage] = useState(false);

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
      setInitialPath([]);
      setOpen(false);
    }, 500);
    setExpanded(false);
  };

  const datalayer = getDataLayer();

  const NavigationMenu: React.FC<NavigationMenuProps> = ({ items, children }) => {
    const [activePath, setActivePath] = useState<string[]>(initialPath || []);
    const [parent, setParent] = useState<string>(initialPath ? initialPath[0] : '1');
    const [animate, setAnimate] = useState(false);
    const [backAnimation, setBackAnimation] = useState(false);

    useEffect(() => {
      if (initialPath && initialPath?.length > 0) {
        setActivePath(initialPath);
      }
    }, []);

    const handleClick = (id: string, level: number) => {
      setActivePath((prevPath) => {
        const newPath = prevPath.slice(0, level);
        return [...newPath, id];
      });
    };

    const handleBack = () => {
      setActivePath((prevPath) => {
        const newPath = prevPath.slice(0, -1);
        setParent(newPath.length > 0 ? newPath[newPath.length - 1] : '1'); // Update parent
        return newPath;
      });
    };

    const getCurrentLevelItems = (items: NavigationItem[], path: string[]): NavigationItem[] => {
      let currentItems = items;
      for (const navId of path) {
        const foundItem = currentItems.find((item) => item.navId === navId);
        if (foundItem && foundItem.children) {
          currentItems = foundItem.children;
        } else {
          break;
        }
      }
      return currentItems;
    };

    const currentItems = getCurrentLevelItems(items, activePath);
    const homeItems = getCurrentLevelItems(items, activePath.slice(0, -1));

    return (
      <div className={animate ? 'zep-animate-slide-in' : backAnimation ? 'zep-animate-slide-out' : ''}>
        {activePath.length > 0 && (
          <div className={`zep-text-typography-light-100 zep-mb-2.5 zep-flex zep-gap-0.5 zep-items-center`}>
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
                  link_text: homeItems[Number(parent) - 1]?.label,
                  link_type: 'nav_back_button', // main_nav, logo, sub_nav, search, language_switcher, etc.
                });
                setTimeout(() => {
                  setBackAnimation(false);
                  handleBack();
                }, 300);
              }}
            />
          </div>
        )}
        <ul>
          {activePath.length > 0 && (
            <li className="zep-flex zep-gap-0.5">
              {/* plese do not use handleBack() this has to navigate to the particular homepage not for back */}
              <Link
                label={homeItems[Number(parent) - 1]?.label}
                href={homeItems[Number(parent) - 1]?.link}
                onClickCapture={() => {
                  datalayer?.push({
                    event: 'interaction_nav',
                    link_text: homeItems[Number(parent) - 1]?.label,
                    link_type: 'nav_parent_link', // main_nav, logo, sub_nav, search, language_switcher, etc.
                  });
                }}
                className="zep-mb-1.5 zep-text-typography-light-100"
                icon="home"
                iconPlacement="before"
                mode={LinkMode.Standalone}
              />
            </li>
          )}
          {currentItems.map((item) => (
            <li key={`${item.navId}-${item.label}`} className={`${activePath.length > 0 ? 'zep-pl-2' : ''}`}>
              {item.children && item.children.length > 0 ? (
                <div className="zep-flex zep-gap-0.5 zep-items-center zep-mb-1.5 ">
                  <Link
                    label={item.label}
                    className="zep-text-typography-light-100"
                    mode={LinkMode.Standalone}
                    href={item.link} // Navigates to the level 1 page
                    iconPlacement="before"
                    icon="arrow-long-right"
                    onClick={(e) => {
                      e.preventDefault();
                      setParent(item.navId);
                      setAnimate(true);
                      handleClick(item.navId, activePath.length); // Update activePath here

                      datalayer?.push({
                        event: 'interaction_nav',
                        link_text: item.label,
                        link_type: 'main_nav', // main_nav, logo, sub_nav, search, language_switcher, etc.
                      });

                      setTimeout(() => setAnimate(false), 300);
                    }}
                  />
                </div>
              ) : (
                <Link
                  label={item.label}
                  className="zep-mb-1.5 zep-text-typography-light-100  zep-justify-end"
                  iconPlacement="before"
                  mode={LinkMode.Standalone}
                  onClickCapture={() => {
                    datalayer?.push({
                      event: 'interaction_nav',
                      link_text: item.label,
                      link_type: 'main_nav', // main_nav, logo, sub_nav, search, language_switcher, etc.
                      link_section: homeItems[Number(parent) - 1]?.label, // ID of 1st level section in the html body
                    });
                  }}
                  href={item.link}
                />
              )}
            </li>
          ))}
        </ul>
        {/* Render children content here */}
        {children && <div>{children}</div>}
      </div>
    );
  };

  return (
    <>
      {/* Mobile sidebar */}
      <div className={`md:zep-hidden`}>
        <div
          className={`zep-fixed zep-top-[0px] zep-left-[0px] zep-py-1 sm:zep-py-2 zep-bg-background-dark zep-z-[1000] zep-ease-in-out zep-h-screen zep-duration-500 ${
            expanded
              ? 'zep-w-full md:zep-transform zep-translate-x-0 lg:zep-transform zep-translate-x-0'
              : '-zep-translate-x-full'
          }`}
        >
          <div className={`${expanded ? 'zep-block' : ''} zep-h-[calc(100svh-40px)] zep-overflow-auto`}>
            <div className="zep-flex zep-justify-end zep-mb-1 zep-mr-1 sm:zep-mr-2">
              <FunctionalIcon
                name="close"
                color="#fff"
                size={24}
                onClick={closeSidebar}
                onClickCapture={() => {
                  datalayer?.push({
                    event: 'interaction_nav',
                    link_text: 'close_sidebar',
                    link_type: 'close_sidebar', // main_nav, logo, sub_nav, search, language_switcher, etc.
                  });
                }}
              />
            </div>
            <div className={`${animateMobileLanguage ? 'zep-animate-slide-in' : ''}`}>
              {languageSwitcher ? (
                <div className="zep-px-1.5 sm:zep-px-3">
                  <LanguageSwitcher
                    locales={locales}
                    header={header}
                    labelBack={labelBack}
                    selectedLocale={selectedLocale}
                    setLanguageSwitcher={setLanguageSwitcher}
                    setSelectedLocale={setSelectedLocale}
                  />
                </div>
              ) : (
                <div>
                  <div className="zep-px-1.5 sm:zep-px-3">
                    <NavigationMenu items={navItems}>
                      <div className="zep-w-full zep-h-[1px] zep-bg-greyscale-700 zep-mt-2.5 zep-mb-2.5" />
                      <div className="">
                        {navigationUtilityItems?.map((item, index) => (
                          <Link
                            key={`${item.label}${index}`}
                            label={item.label}
                            href={item.link || ''}
                            mode={LinkMode.Standalone}
                            onClickCapture={() => {
                              datalayer?.push({
                                event: 'interaction_nav',
                                link_text: item.label,
                                link_type: 'top_nav', // main_nav, logo, sub_nav, search, language_switcher, etc.
                              });
                            }}
                            className={'zep-text-typography-light-100 zep-mb-1.5'}
                          />
                        ))}
                      </div>
                      <div
                        className="zep-flex zep-gap-0.5 zep-items-center zep-mb-3"
                        onClick={(e) => {
                          e.preventDefault();
                          setLanguageSwitcher(true);
                          setAnimateMobileLanguage(true);
                          setTimeout(() => setAnimateMobileLanguage(false), 300);
                        }}
                      >
                        <img alt="Language switch icon" src={languageIcon} className="zep-w-1" />
                        <p className="zep-text-typography-light-100 zep-font-500">
                          {`${selectedLocale?.country} | ${selectedLocale?.langAbbrev?.toUpperCase()}`}
                        </p>
                      </div>
                    </NavigationMenu>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="zep-hidden md:zep-block">
        <div
          className={`zep-fixed zep-top-[0px] zep-left-[0px] md:zep-w-[440px] lg:zep-w-[500px] zep-pt-2 zep-bg-background-dark zep-ease-in-out zep-w-[0px] zep-duration-500 zep-h-screen zep-z-[1000] ${
            expanded ? 'md:zep-transform zep-translate-x-0 lg:zep-transform zep-translate-x-0' : '-zep-translate-x-full'
          }`}
        >
          <div className={`${expanded ? 'zep-block' : ''} zep-h-[calc(100svh-40px)] zep-overflow-auto`}>
            <div className="zep-flex zep-justify-end zep-pr-2 zep-mb-2">
              <FunctionalIcon
                name="close"
                color="#fff"
                size={24}
                onClick={closeSidebar}
                onClickCapture={() => {
                  datalayer?.push({
                    event: 'interaction_nav',
                    link_text: 'close_sidebar',
                    link_type: 'close_sidebar', // main_nav, logo, sub_nav, search, language_switcher, etc.
                  });
                }}
                className="zep-cursor-pointer"
              />
            </div>
            <div className="zep-px-3">
              <NavigationMenu items={navItems} />
            </div>
          </div>
        </div>
        <div
          onClick={closeSidebar}
          onClickCapture={() => {
            datalayer?.push({
              event: 'interaction_nav',
              link_text: 'close_sidebar',
              link_type: 'close_sidebar', // main_nav, logo, sub_nav, search, language_switcher, etc.
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
