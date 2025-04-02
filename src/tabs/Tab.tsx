import { Tab as UITab } from '@headlessui/react';

import clsx from 'clsx';
import { TabGroupProps, TabListProps, TabPanelProps, TabPanelsProps, TabProps } from './tab.interface';

import { focusRing } from '../tailwind/styles/focus';

const TabGroup = ({ children }: TabGroupProps) => {
  return (
    <UITab.Group data-testid="zep-tab-group" as="div">
      {children}
    </UITab.Group>
  );
};

const Tab = ({ disabled, children }: TabProps) => {
  return (
    <UITab
      className="zep-group zep-flex zep-flex-col zep-justify-between zep-gap-0.5 zep-outline-none"
      disabled={disabled}
      data-testid="zep-tab"
    >
      {({ selected }) => (
        <>
          <span
            className={clsx(
              'zep-typography-bodyText zep-rounded-4 zep-px-1 zep-outline-none zep-ring-focus  group-focus-visible:zep-text-typography-dark-100 group-focus-visible:zep-ring',
              {
                'zep-text-typography-dark-100': selected,
                'zep-text-typography-dark-70/70': !selected,
                'zep-text-typography-neutral-dark-disabled/40': disabled,
              },
            )}
          >
            {children}
          </span>
          <span
            className={clsx('zep-w-full', {
              'zep-h-0.25 zep-bg-primary-default': selected,
              'zep-h-[1px] zep-bg-transparent group-hover:zep-bg-primary-default': !selected && !disabled,
            })}
          />
        </>
      )}
    </UITab>
  );
};

const TabList = ({ children }: TabListProps) => {
  return (
    <UITab.List
      className="zep-relative zep-flex zep-w-full zep-flex-col zep-overflow-x-scroll zep-bg-greyscale-0 zep-pt-0.75 sm:zep-overflow-visible"
      data-testid="zep-tab-list"
    >
      <span className="zep-absolute zep-bottom-[0] zep-flex zep-w-full zep-border-b-1 zep-border-solid zep-border-greyscale-400" />
      <div className="zep-relative zep-flex zep-gap-0.5 zep-whitespace-nowrap">{children}</div>
    </UITab.List>
  );
};

const TabPanel = ({ children }: TabPanelProps) => {
  return (
    <UITab.Panel className={clsx(focusRing, 'zep-rounded-4')} data-testid="zep-tab-panel">
      {children}
    </UITab.Panel>
  );
};

const TabPanels = ({ children }: TabPanelsProps) => {
  return (
    <UITab.Panels className="zep-pt-1" data-testid="zep-tab-panels">
      {children}
    </UITab.Panels>
  );
};

Tab.Group = TabGroup;
Tab.List = TabList;
Tab.Panel = TabPanel;
Tab.Panels = TabPanels;

export { Tab };
