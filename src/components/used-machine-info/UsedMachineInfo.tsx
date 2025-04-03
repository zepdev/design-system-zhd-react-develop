import { FC, ReactElement, useMemo } from 'react';
import { Accordion, List } from '@zepdev/design-system-component-library-react';
import { UsedMachineInfoProps } from './UsedMachineInfo.interface';
import { Gallery } from '../gallery';
import { GlobalVariants } from '../../interfaces/global-variants';
import { Layout } from '../layout';
import { ContentRow, UsedMachineDescription, usedMachineLocales } from '../used-machine-pattern';
import { Button, ZpsButtonVariant } from '../zps-button';

const InfoWrapper: FC<{ headline: string, children: ReactElement }> = ({ headline, children }) => {
  return (
    <div className="zep-flex zep-flex-col md:zep-flex-row zep-gap-1.5 sm:zep-gap-2.5 md:zep-gap-1.5 xl:zep-gap-5">
      <h2 className="xl:zep-w-[578px] md:zep-w-[434px] zep-hyphens-auto zep-break-normal zep-w-full zep-typography-headlineMD-fluid-cqi zep-text-primary-default">{headline}</h2>
      <div className="zep-flex-grow">
        {children}
      </div>
    </div>
  );
}

export const UsedMachineInfo: FC<UsedMachineInfoProps> = ({
  items,
  onOfferClick,
  description,
  ...rest
}) => {
  const translations = useMemo(() => usedMachineLocales[rest.locale], [rest.locale]);
  const descriptionList = useMemo(() => description.split(";"), [description]);
  const accordions = ['generalInformation', 'productParameter', 'location'];
  const accordionContent = {
    generalInformation: [
      'manufacturer',
      'serialNumber',
      'gNumber',
      'status',
      'availability',
      'year',
      'operatingHours',
      'certification',
    ],
    productParameter: [
      'fuel',
      'power',
      'electricalPower',
      'frequencyRange',
      'frequency',
      'rating',
      'speed',
      'voltage',
      'weight',
    ],
    location: ['country', 'city', 'postalCode'],
  }

  const formatContentValue = (value: string | number, label: string) => {
    switch (label) {
      case 'power':
        return value ? `${value}kW` : '-'
      case 'electricalPower':
        return value ? `${value}kVA` : '-'
      case 'operatingHours':
        return value ? `${value}h` : '-'
      case 'frequency':
        return value ? `${value || '-'}hz` : '-'
      case 'speed':
        return value ? `${value}u/min` : '-'
      case 'voltage':
        return value ? `${value}V` : '-'
      case 'fuel':
      case 'category':
      case 'type':
      case 'rating':
        return value ? translations[value] : '-';
      default:
        return value || '-';
    }
  }

  return (
    <Layout className="lg:zep-mt-5 zep-mt-2.5 zep-flex zep-flex-col xl:zep-gap-7.5 md:zep-gap-5 sm:zep-gap-4 zep-gap-3.5" testId="zep-used-machine-info">
      <div className="zep-flex md:zep-flex-row zep-flex-col xl:zep-gap-5 sm:zep-gap-2.5 zep-gap-1.5">
        <div className="xl:zep-w-[52%] md:zep-w-[56%] zep-w-full md:zep-aspect-[4/3]">
          <Gallery className="md:zep-h-full" items={items} variant={GlobalVariants.Cat} />
        </div>
        <div className="zep-flex-grow zep-h-fit zep-flex zep-flex-col md:zep-gap-2.5 zep-gap-1">
          <UsedMachineDescription boldLabel {...rest} />
          <div className="zep-flex zep-gap-1 sm:zep-flex-row zep-flex-col">
            {/*<Button
              onClick={onExposeClick}
              variant={ZpsButtonVariant.SecondaryCat}
            >
              {translations.expose}
            </Button>*/}
            <Button
              onClick={onOfferClick}
              variant={ZpsButtonVariant.Primary}
            >
              {translations.requestOffer}
            </Button>
          </div>
        </div>
      </div>
      <InfoWrapper headline={translations.description}>
        <List type="bullet">
          {descriptionList.map((item, index) => (
            <List.Item className="zep-text-primary-default" key={index}>{item}</List.Item>
          ))}
        </List>
      </InfoWrapper>
      <InfoWrapper headline={translations.productSpecification}>
        <Accordion
          className="zep-text-primary-default"
          items={accordions.map((accordion) => ({
            title: translations[accordion],
            content: (
              <table className="zep-w-full">
                {accordionContent[accordion].map((content: string, index: number) => (
                  <ContentRow
                    hideBorder={index === accordionContent[accordion].length - 1}
                    boldLabel
                    key={index}
                    label={translations[content]}
                    value={formatContentValue(rest[content], content)}
                  />
                ))}
              </table>
            )}))}
        />
      </InfoWrapper>
    </Layout>
  );
}
