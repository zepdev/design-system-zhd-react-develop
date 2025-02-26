import clsx from 'clsx';
import { AnchorNavigationTabProps } from './anchor-navigation-tab.interface';

export const AnchorNavigationTab: React.FC<AnchorNavigationTabProps> = ({
  activeTab,
  tab,
  setSelectedTab,
}: AnchorNavigationTabProps) => {
  return (
    <div
      onClick={() => setSelectedTab && setSelectedTab(tab)}
      data-testid="zep-anchor-navigation-tab"
      className="zep-relative zep-group"
    >
      <a href={`#${tab.scrollToIdLink}`}>
        <p
          className={clsx(
            'zep-px-1 zep-pt-1 zep-pb-0.5 md:zep-cursor-pointer zep-w-max',
            tab === activeTab ? 'zep-text-typography-dark-100' : 'zep-text-typography-dark-70/70',
          )}
        >
          {tab.linkLabel}
        </p>
        <div
          className={clsx(
            'zep-absolute zep-bottom-[0px] zep-left-[0px] zep-right-[0px] zep-h-[1px] zep-bg-primary-default zep-opacity-[0] group-hover:zep-opacity-[100] group-hover:zep-h-[1px] ',
            activeTab === tab && 'zep-h-[4px] zep-opacity-[100]',
          )}
        ></div>
      </a>
    </div>
  );
};
