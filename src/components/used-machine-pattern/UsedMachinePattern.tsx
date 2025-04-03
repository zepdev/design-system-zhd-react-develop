import { FC, useMemo } from 'react';
import { UsedMachinePatternProps } from './UsedMachinePattern.interface';
import { Layout } from '../layout';
import { UsedMachineFilters } from './used-machine-filters';
import { usedMachineLocales } from './used-machine-locales';
import { UsedMachineCard } from '@/components/used-machine-pattern/used-machine-card';
import { Button, ZpsButtonVariant } from '@/components/zps-button';

export const UsedMachinePattern: FC<UsedMachinePatternProps> = ({
  setFilters,
  locale,
  filters,
  powerOptions,
  cards,
  total,
  currentTotal,
  setCurrentTotal,
  onContactExpertsClick,
}) => {
  const translations = useMemo(() => usedMachineLocales[locale], [locale]);
/*  const sortItems = Object.values(MachineSort).map((item) => ({ id: item, name: translations[item] }));

  const onSortChange = (value: DropDownItem) => {
    setFilters((prevState) => ({ ...prevState, sort: value.id as MachineSort }));
  }*/

  const onLoadMore = () => {
    setCurrentTotal((prevState) => prevState + 10);
  }

  return (
    <Layout
      testId="zep-used-machine-pattern"
      className="md:zep-flex xl:zep-gap-5 md:zep-gap-3 zep-py-3 sm:zep-py-4 md:zep-py-5"
      wrapperClassname="zep-bg-greyscale-200"
    >
      <UsedMachineFilters
        className="zep-hidden md:zep-flex"
        setFilters={setFilters}
        locale={locale}
        filters={filters}
        powerOptions={powerOptions}
      />
      <div className="zep-grow zep-flex zep-flex-col zep-gap-2">
        <div
          className="md:zep-hidden zep-flex zep-w-full zep-justify-between md:zep-items-end zep-items-center zep-text-primary-default"
        >
          {/*<span className="zep-typography-bodyStrong">{`${total} ${translations.results}`}</span>*/}
          <UsedMachineFilters
            setFilters={setFilters}
            locale={locale}
            filters={filters}
            powerOptions={powerOptions}
          />
          {/*<DropDown*/}
          {/*  label={translations.sortBy}*/}
          {/*  required*/}
          {/*  className="!zep-w-[334px] zep-hidden md:zep-block"*/}
          {/*  items={sortItems}*/}
          {/*  placeholder={translations.sortBy}*/}
          {/*  onChange={onSortChange}*/}
          {/*  value={{ id: filters.sort ? filters.sort : '', name: filters.sort ? translations[filters.sort] : translations.sortBy }}*/}
          {/*/>*/}
        </div>
        {total > 0 ? cards.map((card, index) => (
          <UsedMachineCard key={index} {...card} />
        )) : (
          <div className="zep-flex zep-flex-col zep-gap-3">
            <div className="zep-text-primary-default zep-flex zep-flex-col zep-gap-2.5">
              <h3 className="zep-typography-headlineLG-fluid-cqi">{translations.zeroResultsFoundTitle}</h3>
              <p className="zep-typography-bodyText">{translations.zeroResultsFoundDescription}</p>
            </div>
            <Button onClick={onContactExpertsClick} className="sm:!zep-w-fit" variant={ZpsButtonVariant.Primary}>
              {translations.contactExperts}
            </Button>
          </div>)}
        {currentTotal < total &&
          <Button
            className="sm:!zep-w-fit zep-self-center" variant={ZpsButtonVariant.SecondaryZps}
            onClick={onLoadMore}
          >
            {translations.loadMore}
          </Button>}
      </div>
    </Layout>
  );
}
