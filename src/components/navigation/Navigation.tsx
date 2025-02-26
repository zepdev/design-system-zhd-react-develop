import { Link, LinkMode } from '@zepdev/design-system-component-library-react';
import { useState } from 'react';
import burger from '../../assets/burger.svg';
import languageIcon from '../../assets/language-icon.svg';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Sidebar } from './Sidebar';
import { Locale, NavigationProps } from './navigation.interface';

export const Navigation: React.FC<NavigationProps> = ({
  navigationUtilityItems,
  selectedLocale,
  logo,
  navigationItems,
  locales,
}: NavigationProps) => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [initialPath, setInitialPath] = useState<string[]>([]);
  const [locale, setSelectedLocale] = useState<Locale>(
    selectedLocale || { label: 'Deutsch (DE)', value: 'de', country: 'Germany (Deutschland)' },
  );
  const [localeSwitcherMenu, setLocaleSwitcherMenu] = useState<boolean>(false);

  return (
    <div>
      <div className="zep-hidden md:zep-flex zep-justify-end md:zep-px-4 lg:zep-px-7.5 md:zep-py-0.75 zep-border-b-1 zep-border-greyscale-400">
        <div className="zep-flex zep-gap-2 zep-mr-3">
          {navigationUtilityItems?.map((item) => (
            <Link
              key={item.label}
              label={item.label}
              href={''}
              mode={LinkMode.Standalone}
              className={'zep-text-typography-dark-100'}
            />
          ))}
        </div>
        <div
          className="zep-flex zep-gap-0.5 zep-items-center zep-cursor-pointer zep-group"
          onClick={() => setLocaleSwitcherMenu(true)}
        >
          <img alt="Language switch icon" src={languageIcon} />
          <p className="zep-text-typography-dark-100 zep-font-500 group-hover:zep-underline">{locale?.label}</p>
        </div>
      </div>
      <div className="zep-p-1 sm:zep-px-1.5 md:zep-px-2 md:zep-py-1.5 lg:zep-px-7.5 zep-flex zep-justify-between md:zep-justify-start zep-items-center zep-border-b-1 zep-border-greyscale-400">
        <img alt="logo" src={logo} className="md:zep-mr-3 lg:zep-mr-4" />
        <img alt="hamburger_menu" src={burger} className="md:zep-hidden" onClick={() => setOpenSidebar(true)} />
        <div className="zep-hidden md:zep-flex md:zep-gap-2.5 xl:zep-gap-3.5">
          {navigationItems?.map((item) => (
            <div
              key={item.label}
              onClick={() => {
                setOpenSidebar(true);
                if (item.children) setInitialPath([item.navId]);
              }}
              className="zep-group zep-relative zep-cursor-pointer"
            >
              <p className="zep-typography-navigation zep-text-typography-dark-100 zep-uppercase zep-py-0.25">
                {item.label}
              </p>
              <div className="zep-hidden group-hover:zep-block group-hover:zep-absolute zep-w-full">
                <div className="zep-w-[24px] zep-h-[2px] zep-bg-primary-default zep-mx-auto"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* TODO: Add breadcrumbs until we resolve the routes // Update breadcrumbs */}
      {/* <div className="zep-px-1 zep-py-0.5 sm:zep-px-1.5 md:zep-px-2 md:zep-py-0.5 lg:zep-px-7.5 zep-flex zep-justify-between md:zep-justify-start zep-items-center">
        <Breadcrumb
          items={[
            <Link
              label={'Start'}
              href={''}
              mode={LinkMode.Standalone}
              className={'zep-text-typography-light-100'}
            />,
            <Link
              label={'End'}
              href={''}
              mode={LinkMode.Standalone}
              className={'zep-text-typography-light-100'}
            />,
          ]}
        />
      </div> */}
      {openSidebar && (
        <Sidebar
          initialPath={initialPath}
          setInitialPath={setInitialPath}
          navItems={navigationItems}
          open={openSidebar}
          setOpen={setOpenSidebar}
          selectedLocale={locale}
          locales={locales}
          setSelectedLocale={setSelectedLocale}
          navigationUtilityItems={navigationUtilityItems}
        />
      )}
      {localeSwitcherMenu && (
        <LanguageSwitcher
          setLocaleSwitcherMenu={setLocaleSwitcherMenu}
          locales={locales}
          selectedLocale={locale}
          setSelectedLocale={setSelectedLocale}
        />
      )}
    </div>
  );
};
