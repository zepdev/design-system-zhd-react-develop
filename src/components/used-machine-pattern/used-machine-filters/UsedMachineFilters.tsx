import { FC, ReactElement, useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import { Checkbox, Link, Radio } from '@zepdev/design-system-component-library-react';
import { MachineSort, UsedMachineFiltersProps } from './UsedMachineFilters.interface';
import { usedMachineLocales } from '../used-machine-locales';
import { MachineCategory, MachineFuel, MachineGenSetType, MachineRating } from '../used-machine-card';
import { Slider } from '../../slider';
import { Button, ZpsButtonVariant } from '../../zps-button';
import { useScreenSize } from '../../../hooks/useScreenSize';

const Filter: FC<{ children: ReactElement | ReactElement[], label: string, className?: string }> = ({ children, label, className }) => {
  return (
    <div className={clsx('zep-flex zep-flex-col zep-gap-1.5', className)}>
      <p className="zep-typography-headlineMD-fluid-cqi">{label}</p>
      <div className="zep-flex zep-flex-col zep-gap-1.5">
        {children}
      </div>
    </div>
  )
}

export const UsedMachineFilters: FC<UsedMachineFiltersProps> = ({
  locale,
  filters,
  powerOptions: {
    min,
    max,
    step,
  } = { min: 0, max: 100, step: 1},
  setFilters,
  className,
}) => {
  const [localFilters, setLocalFilters] = useState(filters);
  const {
    power,
    fuel,
    rating,
    category,
    type,
    sort,
  } = localFilters;
  const translations = useMemo(() => usedMachineLocales[locale], [locale]);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const { width } = useScreenSize();

  const onResetFilters = () => {
    setLocalFilters({ category, power: { min, max }, type: [], rating: [], fuel: [], sort: undefined });
  }

  const getNewList = (list: unknown[], value: unknown) => {
    let newList: unknown[] = list;
    if (newList.includes(value)) {
      newList = newList.filter((i) => i !== value);
    } else {
      newList = [...newList, value];
    }
    return newList;
  }

  const onHideFilters = () => {
    setLocalFilters(filters);
    setShowFilters(false);
  }

  const onShowFilters = () => {
    setShowFilters(true);
  }

  const onChangeCategory = (value: MachineCategory) => {
    setLocalFilters(() => ({ category: value, power: { min, max }, type: [], rating: [], fuel: [], sort: undefined }));
  }

  const onChangePower = (value: { min: number, max: number }) => {
    setLocalFilters((prevState) => ({ ...prevState, power: value }));
  }
  const onChangeFuel = (value: MachineFuel) => {
    const newFuel: MachineFuel[] = getNewList(fuel, value) as MachineFuel[];
    setLocalFilters((prevState) => ({ ...prevState, fuel: newFuel }));
  }

  const onChangeRating = (value: MachineRating) => {
    const newRating: MachineRating[] = getNewList(rating, value) as MachineRating[];
    setLocalFilters((prevState) => ({ ...prevState, rating: newRating }));
  }

  const onChangeType = (value: MachineGenSetType) => {
    const newType: MachineGenSetType[] = getNewList(type, value) as MachineGenSetType[];
    setLocalFilters((prevState) => ({ ...prevState, type: newType }));
  }

  const onChangeSort = (value: MachineSort) => {
    setLocalFilters((prevState) => ({ ...prevState, sort: value }));
  }

  const onApplyFilters = () => {
    setFilters({ category, power, fuel, sort, type, rating });
    if (width < 1024 ) {
      setShowFilters(false);
    }
  }

  useEffect(() => {
    if (width >= 1024) {
      onApplyFilters();
    }
  }, [localFilters, width]);

  return (
    <div className={clsx('zep-relative md:zep-static md:zep-w-[25%] md:zep-max-w-[500px]', className)} data-testid="zep-used-machine-filters">
      <Button
        variant={ZpsButtonVariant.SecondaryZps}
        iconPosition="right"
        onClick={onShowFilters}
        className="zep-block md:zep-hidden !zep-w-fit sm:!zep-w-[122px] zep-py-0.625 [&svg]:zep-w-0.75"
        icon="tune"
      >
        {translations.filter}
      </Button>
      <div
        className={clsx('md:zep-block md:zep-h-auto md:zep-bg-transparent md:zep-static zep-pb-[0] md:zep-flex-grow', {
          'zep-hidden': !showFilters,
          'zep-fixed zep-bg-greyscale-0 zep-z-[1000] zep-flex zep-flex-col zep-gap-2 zep-h-screen zep-top-[0] zep-left-[0] zep-right-[0] zep-overflow-y-scroll zep-pb-[208px]': showFilters,
        })}
      >
        <div className="md:zep-hidden zep-flex zep-flex-row zep-justify-between zep-pt-1 zep-px-1 md:zep-p-[0]">
          <Button variant={ZpsButtonVariant.SecondaryZps} className="!zep-w-fit sm:!zep-w-fit" icon="arrow-left" onClick={onHideFilters} />
          <Button variant={ZpsButtonVariant.Tertiary} className="!zep-w-fit sm:!zep-w-fit" onClick={onResetFilters}>{translations.resetFilters}</Button>
        </div>
        <div className="zep-flex zep-px-1 sm:zep-px-2 md:zep-p-[0] zep-flex-col md:zep-gap-4 zep-gap-2 zep-text-primary-default zep-w-full">
          <Filter label={translations.category}>
            {Object.values(MachineCategory).map((item) => (
              <Link
                className={clsx('zep-self-start', 'zep-text-primary-default', { 'zep-text-primary-active zep-link-filter-active': category === item })}
                iconPlacement="before"
                label={translations[item]}
                key={item}
                onClick={() => onChangeCategory(item)}
              />
            ))}
          </Filter>
          <Filter label={translations.sort} className="md:zep-hidden zep-py-2 zep-border-y-1 zep-border-y-greyscale-400">
            {Object.values(MachineSort).map((item) => (
              <Radio
                key={item}
                id={item}
                name={item}
                label={translations[item]}
                checked={sort === item}
                onChange={() => onChangeSort(item)}
              />
            ))}
          </Filter>
          {category !== MachineCategory.ACCESSORY && (
            <>
              <Filter label={translations.fuel}>
                {Object.values(MachineFuel).map((item) => (
                  <Checkbox
                    className="zep-mb-[0]"
                    key={item}
                    id={item}
                    checked={fuel.includes(item)}
                    onChange={() => onChangeFuel(item)}
                    label={translations[item]}
                  />
                ))}
              </Filter>
              <Filter label={translations.power}>
                <Slider
                  onChange={onChangePower}
                  label={category === MachineCategory.GEN_SET ? translations.powerInKVA : translations.powerInKW}
                  max={max}
                  min={min}
                  value={power}
                  step={step}
                />
              </Filter>
              {category === MachineCategory.GEN_SET && (
                <Filter label={translations.rating}>
                  {Object.values(MachineRating).map((item) => (
                    <Checkbox
                      className="zep-mb-[0]"
                      key={item}
                      id={item}
                      checked={rating.includes(item)}
                      onChange={() => onChangeRating(item)}
                      label={translations[item]}
                    />
                  ))}
                </Filter>
              )}
              <Filter label={translations.type}>
                {Object.values(MachineGenSetType).map((item) => (
                  <Checkbox
                    className="zep-mb-[0]"
                    key={item}
                    id={item}
                    checked={type.includes(item)}
                    onChange={() => onChangeType(item)}
                    label={translations[item]}
                  />
                ))}
              </Filter>
            </>
          )}
        </div>
        <div className="md:zep-hidden zep-z-[1020] zep-fixed zep-bottom-[0] zep-left-[0] zep-right-[0] zep-bg-greyscale-0 zep-shadow-[0_0_4px_rgba(0,0,0,0.24)] zep-p-1">
          <Button variant={ZpsButtonVariant.Primary} className="sm:zep-w-full" onClick={onApplyFilters}>{translations.apply}</Button>
        </div>
      </div>
    </div>
  );
}
