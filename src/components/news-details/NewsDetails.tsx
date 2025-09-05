import { HeaderLongComponent } from '@/components/header-long-component';
import { Layout } from '@/components/layout';
import { RichText } from '@/components/rich-text';
import { FC } from 'react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { NewsDetailsProps } from './NewsDetails.interface';

export const NewsDetails: FC<NewsDetailsProps> = ({
  imageSrc,
  imageAlt,
  imageDescription,
  content,
  variant = GlobalVariants.Zps,
  date,
  location,
  description,
}) => {
  return (
    <Layout
      testId="zep-news-details"
      className="zep-flex zep-flex-col xl:zep-gap-4 md:zep-gap-3 sm:zep-gap-2 zep-gap-1"
    >
      {date && location && (
        <HeaderLongComponent headline={`${date} | ${location}`} variant={variant} description={description} />
      )}
      <div className="zep-flex xl:zep-gap-6 md:zep-gap-2.5 md:zep-flex-row zep-flex-col sm:zep-gap-2 zep-gap-1">
        <div className="md:zep-w-[30%] zep-w-full">
          <div className="zep-aspect-[3/4]">
            <img loading="lazy" src={imageSrc} alt={imageAlt} className="zep-w-full zep-h-full zep-object-cover" />
          </div>
          {imageDescription && (
            <div className="zep-bg-background-medium zep-hyphens-auto zep-break-normal zep-py-0.5 zep-px-1 zep-w-full zep-text-typography-dark-70 zep-typography-bodyText">
              <span className="zep-opacity-70">{imageDescription}</span>
            </div>
          )}
        </div>
        <RichText content={content} className="zep-max-w-[944px]" />
      </div>
    </Layout>
  );
};
