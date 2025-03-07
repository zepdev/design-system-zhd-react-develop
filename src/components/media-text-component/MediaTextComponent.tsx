import clsx from 'clsx';
import ResponsivePlayer from '../video/ResponsivePlayer';
import { Button, ZsdButtonVariant } from '../zsd-button';
import { Link } from '../zsd-link/ZsdLink';
import { MediaTextComponentProps } from './media-text-component.interface';

export const MediaTextComponent = ({
  mediaUrl,
  mediaType,
  imageOrientation,
  imageAlt,
  mediaPosition,
  headline,
  description,
  buttonText,
  videoThumbnail = '',
  links = [],
}: MediaTextComponentProps) => {
  const imageAlignmentClass = mediaPosition === 'right' ? 'md:zep-order-1' : 'md:zep-order-0';
  const imageHeightClass =
    mediaType === 'image' && imageOrientation === 'vertical'
      ? 'sm:zep-w-[448px] md:zep-w-[348px] lg:zep-w-auto lg:zep-max-w-[740px]  xl:zep-w-[740px] zep-aspect-[4/5]'
      : 'zep-aspect-[16/9]';

  return (
    <div className={'zep-w-full zep-relative zep-mx-auto'}>
      <div className={`zep-flex zep-flex-col md:zep-flex-row zep-gap-1.5 md:zep-gap-2.5 xl:zep-gap-5`}>
        <div className={`${imageAlignmentClass} zep-w-full md:zep-w-[1/2] zep-mx-auto`}>
          <div className={`${imageHeightClass} zep-h-auto zep-mx-auto`}>
            {mediaType === 'image' ? (
              <img src={mediaUrl} alt={imageAlt} className={`zep-w-full zep-h-full zep-object-cover`} />
            ) : (
              <ResponsivePlayer url={mediaUrl} thumbnail={videoThumbnail} />
            )}
          </div>
        </div>

        <div
          className={clsx(
            'zep-w-full',
            'zep-items-start',
            'md:zep-w-[1/2]',
            'zep-flex',
            'zep-flex-col',
            'zep-justify-center',
            'zep-px-1',
            'sm:zep-px-1.5',
            'md:zep-px-[0px]',
          )}
        >
          <h2 className="zep-typography-headlineMD-fluid-cqi zep-mb-1 zep-break-all">{headline}</h2>
          {description && (
            <p className="zep-text-typography-dark-100 zep-typography-body zep-break-all">
              {description}
            </p>
          )}

          <div className={clsx('zep-flex', 'zep-flex-col', 'zep-mb-1.5', 'zep-gap-1')}>
            {links.map((link, index) => (
              <Link key={index} label={link.label} icon={link.icon} iconPlacement="before" />
            ))}
          </div>

          {buttonText && (
            <Button
              label={buttonText}
              variant={ZsdButtonVariant.SecondaryDark}
              className="zep-w-full sm:zep-max-w-max"
            />
          )}
        </div>
      </div>
    </div>
  );
};
