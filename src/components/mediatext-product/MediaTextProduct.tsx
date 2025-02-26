import { Accordion } from '@zepdev/design-system-component-library-react';
import React from 'react';
import { Button } from '../zsd-button/ZsdButton';
import { ZsdButtonVariant } from '../zsd-button/zsd-button.interface';
import { MediaTextProductProps } from './mediatext-product.interface';

export const MediaTextProduct: React.FC<MediaTextProductProps> = ({
  headline,
  subline,
  description,
  contents = [],
  imageSrc,
  imageAlt,
  buttonLabel,
  hasButton ,
}) => {
  return (
    <div className="zep-grid zep-w-full md:zep-flex zep-gap-1.5 sm:zep-gap-2.5 xl:zep-gap-5">
      <div style={{ height: 'fit-content' }} className="md:zep-w-5/12 zep-inline-grid md:zep-flex zep-aspect-16.9">
        <img className=" zep-w-full" src={imageSrc} alt={imageAlt} />
      </div>
      <div className="md:zep-w-7/12 md:zep-flex-1 zep-w-full md:zep-flex-col">
        <h2 className="zep-mb-1 zep-typography-headlineMD-fluid-cqi">{headline}</h2>
        <h4 className="zep-mb-1 zep-typography-headlineXS-fluid-cqi">{subline}</h4>
        <p className="zep-mb-1.5 zep-typography-body-fluid-cqi">{description}</p>

        {/* Accordion */}
        <Accordion
          items={contents.map((item) => ({
            title: item.title,
            content: item.content,
          }))}
        />

        {/* Button */}
      {hasButton && <Button
            className="sm:zep-max-w-[321px] zep-mt-2.5"
            label={buttonLabel}
            icon="download"
            iconPosition="right"
            onClick={() => {}}
            title="Button title"
            variant={ZsdButtonVariant.SecondaryDark}
        />
      } 
      </div>
    </div>
  );
};
