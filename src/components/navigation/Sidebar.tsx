import { FunctionalIcon, Link, LinkMode } from '@zepdev/design-system-component-library-react';
import { useEffect, useState } from 'react';
import languageIcon from '../../assets/language-icon.svg';
import { LanguageSwitcher } from './LanguageSwitcher';
import { NavigationItem, SidebarProps } from './navigation.interface';

export const Sidebar: React.FC<SidebarProps> = ({
  navItems,
  setOpen,
  initialPath,
  setInitialPath,
  selectedLocale,
  locales,
  setSelectedLocale,
  navigationUtilityItems,
}: SidebarProps) => {
  const [expanded, setExpanded] = useState(false);
  const [languageSwitcher, setLanguageSwitcher] = useState(false);

  useEffect(() => {
    setExpanded(true);
  }, []);

  const closeSidebar = () => {
    setInitialPath([]);
    setTimeout(() => {
      setOpen(false);
    }, 500);
    setExpanded(false);
  };

  const NavigationMenu: React.FC<{ items: NavigationItem[] }> = ({ items }) => {
    const [activePath, setActivePath] = useState<string[]>(initialPath || []);
    const [parent, setParent] = useState<string>(initialPath ? initialPath[0] : '1');

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
      setActivePath((prevPath) => prevPath.slice(0, -1));
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
      <div>
        {activePath.length > 0 && (
          <div className="zep-text-typography-dark-100 zep-mb-1.5 zep-flex zep-gap-0.5 zep-items-center">
            <FunctionalIcon name="arrow-long-left" size={20} />
            <Link mode={LinkMode.Standalone} label="Züruck" onClick={handleBack} />
          </div>
        )}
        <ul className="zep-flex zep-flex-col zep-items-start">
          {activePath.length > 0 && (
            <li className="zep-flex zep-gap-0.5">
              <FunctionalIcon name="home" color="#262626" />
              <Link
                label={homeItems[Number(parent) - 1]?.label}
                className="zep-mb-1.5 zep-text-typography-dark-100"
                mode={LinkMode.Standalone}
                onClick={(e) => {
                  e.preventDefault();
                  handleBack();
                }}
              ></Link>
            </li>
          )}
          {currentItems.map((item) => (
            <li key={`${item.navId}-${item.label}`} className={`${activePath.length > 0 ? 'zep-pl-2' : ''}`}>
              {item.children ? (
                <Link
                  label={item.label}
                  className="zep-mb-1.5 zep-text-typography-dark-100"
                  iconPlacement="before"
                  mode={LinkMode.Standalone}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.children) {
                      setParent(item.navId);
                      handleClick(item.navId, activePath.length);
                    }
                  }}
                ></Link>
              ) : (
                <Link
                  label={item.label}
                  className="zep-mb-1.5 zep-text-typography-dark-100"
                  iconPlacement="before"
                  mode={LinkMode.Standalone}
                  href={item.link}
                ></Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      {/* Mobile sidebar */}
      <div className="md:zep-hidden">
        <div
          className={`zep-fixed zep-top-[0px] zep-left-[0px] zep-bg-typography-light-100 zep-w-screen zep-duration-500 ${
            expanded ? 'zep-h-screen' : 'zep-h-[0px]'
          }`}
        >
          <div className={`${expanded ? 'zep-block zep-overflow-hidden' : 'zep-hidden'}`}>
            <div className="zep-flex zep-justify-end zep-mb-1 zep-pt-1 zep-pr-1 sm:zep-pt-2 sm:zep-pr-2">
              <FunctionalIcon name="close" color="#262626" size={24} onClick={closeSidebar} />
            </div>
            {languageSwitcher ? (
              <div className="zep-pl-2 zep-pt-1 zep-pr-1  sm:zep-pt-2 sm:zep-pr-2">
                <LanguageSwitcher
                  locales={locales}
                  selectedLocale={selectedLocale}
                  setLanguageSwitcher={setLanguageSwitcher}
                  setSelectedLocale={setSelectedLocale}
                />
              </div>
            ) : (
              <>
                <div className="zep-pl-2 zep-pt-1 zep-pr-1  sm:zep-pt-2 sm:zep-pr-2">
                  <NavigationMenu items={navItems} />
                </div>
                <div className="zep-w-full zep-h-[1px] zep-bg-greyscale-700 zep-mt-3.5"></div>
                <div
                  className="zep-flex zep-gap-0.5 zep-items-center zep-pl-2 zep-pt-1.5 sm:zep-pt-2 zep-pr-1 sm:zep-pr-2 zep-mb-3"
                  onClick={() => setLanguageSwitcher(true)}
                >
                  <img alt="Language switch icon" src={languageIcon} className="zep-w-1" />
                  <p className="zep-text-typography-dark-100 zep-font-500">{selectedLocale?.label}</p>
                </div>
                <div className="zep-pl-2 zep-pr-1">
                  {navigationUtilityItems?.map((item) => (
                    <Link
                      key={item.label}
                      label={item.label}
                      href={''}
                      mode={LinkMode.Standalone}
                      className={'zep-text-typography-dark-100 zep-mb-1.5'}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="zep-hidden md:zep-block">
        <div
          className={`zep-fixed zep-top-[0px] zep-left-[0px] zep-bg-typography-light-100 zep-ease-out zep-w-[0px] zep-duration-500 zep-h-screen zep-z-10 ${
            expanded ? 'md:zep-w-[440px] lg:zep-w-[578px] zep-pl-3 zep-pt-2 zep-pr-2' : 'zep-w-[0px]'
          }`}
        >
          <div className={`${expanded ? 'zep-block zep-overflow-hidden' : 'zep-hidden'}`}>
            <div className="zep-flex zep-justify-end zep-mb-6">
              <FunctionalIcon
                name="close"
                color="000"
                size={24}
                onClick={closeSidebar}
                className="zep-cursor-pointer"
              />
            </div>
            <NavigationMenu items={navItems} />
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
