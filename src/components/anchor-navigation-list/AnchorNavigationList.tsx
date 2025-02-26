import { FC, useState } from 'react';
import { AnchorNavigationListProps } from './anchor-navigation-list.interface';
import { AnchorNavigationTab, Tab } from './anchor-navigation-tab';

export const AnchorNavigationList: FC<AnchorNavigationListProps> = ({
  tabs,
  handleButtonClick,
  buttonText,
}: AnchorNavigationListProps) => {
  const [activeTab, setSelectedTab] = useState<Tab | null>(null);
  return (
    <div
      className="zep-flex zep-flex-col sm:zep-flex-row zep-justify-between zep-w-full sm:zep-border-b-1 zep-border-greyscale-400"
      data-testid="zep-anchor-navigation-list"
    >
      <div
        className={`zep-flex zep-items-center zep-gap-1 md:zep-gap-1.5 lg:zep-gap-2 zep-overflow-x-auto zep-w-full zep-border-b-1 sm:zep-border-none zep-border-greyscale-400`}
      >
        {tabs?.map((tab) => (
          <AnchorNavigationTab setSelectedTab={() => setSelectedTab(tab)} activeTab={activeTab} tab={tab} />
        ))}
      </div>
      {handleButtonClick && (
        <div className="sm:zep-p-0.25">
          <button
            onClick={handleButtonClick}
            className="zep-w-full sm:zep-w-max zep-mt-0.25 sm:zep-mt-[0px] zep-py-[10px] zep-px-1 sm:zep-max-w-max zep-bg-primary-default zep-flex zep-justify-center zep-items-center hover:zep-bg-primary-hover md:zep-cursor-pointer"
          >
            <p className="zep-text-[14px] zep-text-typography-light-100 zep-leading-[20px] zep-font-500">
              {buttonText}
            </p>
          </button>
        </div>
      )}
    </div>
  );
};
