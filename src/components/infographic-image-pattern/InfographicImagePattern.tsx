import React from 'react';
import { GlobalVariantExtended } from '../../interfaces/global-variants';
import { HeaderLongComponent } from '../header-long-component';
import { InfographicImage } from '../infographic-image';
import { Layout } from '../layout';
import { InfographicImagePatternProps } from './infographic-image-pattern.interface';

export const InfographicImagePattern: React.FC<InfographicImagePatternProps> = ({ header, infographic, id }) => {
  return (
    <Layout id={id} wrapperClassname={GlobalVariantExtended.ZpsBg} className="zep-py-3 sm:zep-py-4 md:zep-py-5">
      {header && header.headline && <HeaderLongComponent {...header} variant={GlobalVariantExtended.ZpsBg} />}
      <InfographicImage
        className="zep-mt-1 sm:zep-mt-1.5 md:zep-mt-2 xl:zep-mt-4"
        imageUrl={infographic.imageUrl}
        imageAlt={infographic.imageAlt}
        points={infographic.points}
      />
    </Layout>
  );
};
