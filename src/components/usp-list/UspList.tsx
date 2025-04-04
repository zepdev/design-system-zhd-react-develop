import { cva } from 'class-variance-authority';
import React from 'react';
import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';
import { backgroundColor } from '../../utils/commonCSS';
import { USP } from '../USP/Usp';
import { HeaderShortComponent } from '../header-short-component';
import { Layout } from '../layout';
import { Scrollbar } from '../scrollbar';
import { USPListProps } from './usp-list.interface';

export const USPList: React.FC<USPListProps> = ({
  uspCards,
  variant = GlobalVariants.Cat,
  headerTitle,
  tagline,
  id,
}: USPListProps) => {
  const uspListVariants = {
    [GlobalVariants.Zps]: '',
    [GlobalVariants.Cat]: '',
  };

  const uspListCva = cva(
    [`zep-flex zep-flex-col zep-gap-2.5 sm:zep-gap-3 md:zep-gap-4 zep-py-3 sm:zep-py-4 md:zep-py-5`],
    {
      variants: {
        variant: uspListVariants,
      },
      defaultVariants: {
        variant: GlobalVariants.Zps,
      },
    },
  );

  const uspListWrapperVariants = {
    [GlobalVariants.Zps]: backgroundColor[GlobalVariantExtended.ZpsBg],
    [GlobalVariants.Cat]: backgroundColor[GlobalVariantExtended.CatBg],
  };

  const uspListWrapperCva = cva([``], {
    variants: {
      variant: uspListWrapperVariants,
    },
    defaultVariants: {
      variant: GlobalVariants.Zps,
    },
  });

  return (
    <Layout id={id} wrapperClassname={uspListWrapperCva({ variant })} className={uspListCva({ variant })}>
      <HeaderShortComponent
        className="zep-p-[0px] zep-w-[40%]"
        variant={variant === GlobalVariants.Zps ? GlobalVariantExtended.ZpsBg : GlobalVariantExtended.CatBg}
        headline={headerTitle}
        showArrow
        tagline={tagline}
      />
      <Scrollbar
        scrollOrientation="horizontal"
        theme="light"
        controlId="USP-list-scrollbar"
        dataTestId="zep-usp-list"
        className="zep-flex zep-w-full zep-gap-1 md:zep-gap-1.5 lg:zep-gap-3.5"
      >
        {uspCards?.map((card, index) => (
          <USP
            key={card.headline}
            count={card?.count || `${index + 1}.`}
            headline={card.headline}
            description={card.description}
            iconName={card.iconName}
            variant={variant}
          />
        ))}
      </Scrollbar>
    </Layout>
  );
};
