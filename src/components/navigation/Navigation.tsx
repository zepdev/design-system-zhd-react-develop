import { Link, LinkMode } from '@zepdev/design-system-component-library-react';
import { FC, useState } from 'react';
import burger from '../../assets/burger.svg';
import languageIcon from '../../assets/language-icon.svg';
import { LocaleVariants } from '../../interfaces/global-variants';
import { getDataLayer } from '../../utils/getDataLayer';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Sidebar } from './Sidebar';
import { NavigationProps } from './navigation.interface';

export const Navigation: FC<NavigationProps> = ({
  navigationUtilityItems,
  selectedLocale,
  setSelectedLocale,
  logo,
  header,
  labelBack,
  navigationItems,
  locales,
}: NavigationProps) => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [initialPath, setInitialPath] = useState<string[]>([]);
  const [localeSwitcherMenu, setLocaleSwitcherMenu] = useState<boolean>(false);

  const getHome = () => {
    switch (selectedLocale?.value) {
      case LocaleVariants.EN:
        return '/de/en/';
      default:
        return '/de/de/';
    }
  };
  const datalayer = getDataLayer();
  return (
    <div className="zep-bg-[#fff]">
      <div className="zep-hidden md:zep-flex zep-justify-end zep-px-1 sm:zep-px-1.5 md:zep-px-[66px] lg:zep-px-[122px] md:zep-py-0.75 zep-border-b-1 zep-border-greyscale-400">
        <div className="zep-flex zep-gap-2 zep-mr-3">
          {navigationUtilityItems?.map((item, index) => (
            <Link
              key={`${item.label}${index}`}
              label={item.label}
              href={item.link || ''}
              mode={LinkMode.Standalone}
              onClickCapture={() => {
                datalayer.push({
                  event: 'interaction_nav',
                  link_text: item.label,
                  link_type: 'top_nav', // main_nav, logo, sub_nav, search, language_switcher, etc.
                });
              }}
              className={'zep-text-typography-dark-100 zep-text-0.875'}
            />
          ))}
        </div>
        <div
          className="zep-flex zep-gap-0.5 zep-items-center zep-cursor-pointer zep-group"
          onClick={() => setLocaleSwitcherMenu(true)}
        >
          <img className="zep-size-[18px]" alt="Language switch icon" src={languageIcon} />
          <p className="zep-text-typography-dark-100 zep-font-500 zep-text-0.875 group-hover:zep-underline">
            {`${selectedLocale?.country} | ${selectedLocale?.langAbbrev?.toUpperCase()}`}
          </p>
        </div>
      </div>
      <div className="zep-p-1 sm:zep-px-1.5 md:zep-px-[66px] lg:zep-px-[122px] md:zep-py-1.5 zep-flex zep-justify-between md:zep-justify-start zep-items-center zep-border-b-1 zep-border-greyscale-400">
        <a href={getHome()}>
          <img alt="logo" src={logo} className="md:zep-mr-3 xl:zep-mr-4" />
        </a>
        <img alt="hamburger_menu" src={burger} className="md:zep-hidden" onClick={() => setOpenSidebar(true)} />
        <div className="zep-hidden md:zep-flex md:zep-gap-2.5 lg:zep-gap-3.5">
          {navigationItems?.map((item, index) => (
            <div
              key={`${item.label}${index}`}
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
                <div className="zep-w-[24px] zep-h-[2px] zep-bg-primary-default zep-mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* TODO: Add breadcrumbs until we resolve the routes // Update breadcrumbs */}
      {/* <div className="zep-px-1 zep-py-0.5 sm:zep-px-1.5 md:zep-px-2 md:zep-py-0.5 xl:zep-px-7.5 zep-flex zep-justify-between md:zep-justify-start zep-items-center">
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
          selectedLocale={selectedLocale}
          header={header}
          labelBack={labelBack}
          locales={locales}
          setSelectedLocale={setSelectedLocale}
          navigationUtilityItems={navigationUtilityItems}
        />
      )}
      {localeSwitcherMenu && (
        <LanguageSwitcher
          setLocaleSwitcherMenu={setLocaleSwitcherMenu}
          locales={locales}
          labelBack={labelBack}
          header={header}
          selectedLocale={selectedLocale}
          setSelectedLocale={setSelectedLocale}
        />
      )}
    </div>
  );
};
