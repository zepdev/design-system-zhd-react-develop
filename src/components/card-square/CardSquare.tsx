import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import { FC, useRef } from 'react';
import { useContainerDimensions } from '../../hooks/useContainerDimensions';
import { getDataLayer } from '../../utils/getDataLayer';
import { getUrlWithTrailingSlash } from '../../utils/getUrlWithTrailingSlash';
import { CardSquareProps } from './card-square.interface';

export const cardSquareCardCva = cva(
  [
    `zep-flex
     zep-bg-indigo-500
     zep-justify-between
     zep-items-center
     zep-absolute
     zep-bottom-1
     zep-left-1
     zep-right-1
     zep-p-1.5
     zep-gap-1
     md:zep-gap-1.5`,
  ],
);

const CardSquare: FC<CardSquareProps> = ({
  imageSrc,
  description,
  headline,
  imageAlt,
  variant,
  url,
  gtmHeadline,
  gtmId,
}) => {
  const componentRef = useRef<HTMLDivElement | null>(null);
  const { width } = useContainerDimensions(componentRef);

  const paddingDescription = {
    'zep-py-1 zep-pr-1 zep-pl-1': width < 400,
    'zep-py-1.5 zep-pr-1.5 zep-pl-1.5': width < 500 && width >= 400,
    'zep-py-2 zep-pr-2 zep-pl-2': width >= 500,
  };
  const datalayer = getDataLayer();

  return (
    <a
      href={getUrlWithTrailingSlash(url)}
      target="_self"
      className={clsx(
        'zep-relative',
        'zep-group',
        'zep-w-full',
        'zep-max-w-[700px]',
        'zep-min-w-[290px]',
        'sm:zep-min-w-[348px]',
        'lg:zep-min-w-[330px]',
        'zep-aspect-[1/1]',
        'zep-@container',
        'xl:zep-@container-normal',
      )}
      onClickCapture={() => {
        datalayer.push({
          event: 'interaction_tile',
          link_text: headline,
          link_context: gtmHeadline,
          link_section: gtmId,
        });
      }}
      data-testid="zep-card-square"
    >
      <div tabIndex={0} ref={componentRef}>
        <img
          className="zep-object-cover zep-aspect-[1/1] zep-w-full zep-h-auto group-hover:zep-transition-opacity zep-duration-1000 group-hover:zep-brightness-90"
          src={imageSrc}
          alt={imageAlt}
          title="construction site"
        />
        <div className={clsx(cardSquareCardCva({  }), paddingDescription)}>
          <div className="zep-flex zep-flex-col zep-items-start zep-w-full zep-gap-0.5">
            <h3
              data-testid="card-square-headline"
              className="zep-text-background-light zep-text-left zep-typography-headlineMD-fluid-cqi zep-hyphens-auto zep-break-normal"
            >
              {headline}
            </h3>
            {description && (
              <p
                data-testid="card-square-description"
                className={clsx(
                  { 'zep-hidden': width < 330 },
                  'zep-typography-bodyText',
                  'zep-text-background-light',
                  'zep-text-left',
                  'zep-hyphens-auto',
                  'zep-break-normal',
                )}
              >
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </a>
  );
};
export { CardSquare };
