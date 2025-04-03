import React from 'react';
import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';
import { backgroundColor } from '../../utils/commonCSS';
import { HeaderLongComponent } from '../header-long-component';
import { InfographicImage } from '../infographic-image';
import { Layout } from '../layout';
import { InfographicImagePatternProps } from './infographic-image-pattern.interface';

export const InfographicImagePattern: React.FC<InfographicImagePatternProps> = ({
  variant = GlobalVariants.Zps,
  header,
  infographic,
  id,
}) => {
  const renderBgVariants = () => {
    switch (variant) {
      case GlobalVariants.Zps:
        return GlobalVariantExtended.ZpsBg;

      case GlobalVariants.Cat:
        return GlobalVariantExtended.CatBg;
    }
  };

  return (
    <Layout id={id} wrapperClassname={backgroundColor[renderBgVariants()]} className="zep-py-3 sm:zep-py-4 md:zep-py-5">
      {header && header.headline && <HeaderLongComponent {...header} variant={renderBgVariants()} />}
      <InfographicImage
        className="zep-mt-1 sm:zep-mt-1.5 md:zep-mt-2 xl:zep-mt-4"
        imageUrl={infographic.imageUrl}
        imageAlt={infographic.imageAlt}
        points={infographic.points}
        variant={variant}
      />
    </Layout>
  );
};
