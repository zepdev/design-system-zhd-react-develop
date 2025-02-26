import { FC } from 'react';
import { LinkMode, LinkTarget } from '@zepdev/design-system-component-library-react';
import { CardEventProps } from './CardEvent.interface';
import { Link } from '../../zsd-link';
import clsx from 'clsx';

export const CardEvent: FC<CardEventProps> = ({
  linkUrl,
  linkLabel,
  externalLinkLabel,
  externalLinkUrl,
  headline,
  dates: { startDay, endDay, year, month },
  location: { country, city },
  description,
  imageAlt,
  imageSrc,
}) => {
  const formatDay = (day: number) => day < 10 ? `0${day}` : day;

  return (
    <div className="zep-flex xl:zep-flex-row zep-flex-col zep-border-1 zep-w-full zep-border-greyscale-400 zep-bg-greyscale-0">
      <div className="zep-flex zep-flex-col sm:zep-flex-row">
        <div
          className={clsx(
            'sm:zep-border-r-1 sm:zep-border-r-greyscale-400 zep-border-b-1 zep-border-b-greyscale-400 sm:zep-border-b-[0]',
            'zep-flex zep-items-center',
            'xl:zep-w-[30%] md:zep-w-[40%] sm:zep-w-[50%] zep-w-full',
            'zep-aspect-[16/9]',
          )}
        >
          <img className="zep-w-auto zep-h-auto zep-object-cover" src={imageSrc} alt={imageAlt} />
        </div>
        <div className={clsx(
          'xl:zep-w-[30%] md:zep-w-[60%] sm:zep-w-[50%] zep-w-full',
          'md:zep-px-2.5 md:zep-p-2 sm:zep-p-1.5 zep-p-1',
          'zep-flex zep-grow zep-flex-col sm:zep-justify-between zep-gap-0.5',
        )}>
          <div>
            <h3
              className="zep-text-typography-dark-100 zep-typography-headlineXL-fluid-cqi">{`${formatDay(startDay)} - ${formatDay(endDay)}`}</h3>
            <h4 className="zep-text-typography-dark-100 zep-typography-headlineMD-fluid-cqi">{`${month} ${year}`}</h4>
          </div>
          <p className="zep-typography-bodyText zep-text-typography-dark-70 zep-opacity-70">{`${city}, ${country}`}</p>
        </div>
      </div>
      <div
        className={clsx(
          'xl:zep-border-l-greyscale-400 xl:zep-border-l-1 zep-border-t-1 zep-border-t-greyscale-400',
          'zep-grow zep-flex zep-flex-col xl:zep-justify-between md:zep-gap-2 zep-gap-1.5',
          'md:zep-px-2.5 md:zep-py-2 sm:zep-p-1.5 zep-p-1',
        )}
      >
        <div className="zep-flex zep-flex-col zep-gap-0.5">
          <h4 className="zep-typography-headlineMD-fluid-cqi zep-text-typography-dark-100">{headline}</h4>
          <p className="zep-typography-bodyText zep-text-typography-dark-100">{description}</p>
        </div>
        <div className="zep-flex zep-flex-col zep-gap-1">
          <Link label={linkLabel} href={linkUrl} mode={LinkMode.Standalone} />
          <Link label={externalLinkLabel} href={externalLinkUrl} target={LinkTarget.Blank} mode={LinkMode.Standalone} />
        </div>
      </div>
    </div>
  );
}
