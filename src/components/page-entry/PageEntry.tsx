import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import carouselArrow from '../../assets/carousel-left.svg';
import play from '../../assets/play.svg';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import '../../styles/globals.css';
import { HeaderLongComponent } from '../header-long-component';
import { Layout } from '../layout';
import { Button, ZsdButtonVariant } from '../zsd-button';
import { PageEntryProps } from './page-entry.interface';

const PageEntry: React.FC<PageEntryProps> = ({
  headline,
  media,
  tagline,
  description,
  primaryButtonClick,
  primaryButtonText,
  secondaryButtonText,
  secondaryButtonClick,
}) => {
  const { width } = useWindowDimensions();

  const renderThumbnailWidth = () => {
    if (width < 768) {
      return 141;
    } else if (width < 1024 && width >= 768) {
      return 208;
    } else if (width < 1600 && width >= 1024) {
      return 142;
    } else if (width < 1920 && width >= 1600) {
      return 208;
    } else if (width >= 1920) return 250;
  };

  return (
    <Layout>
      <div className="zep-flex zep-flex-col md:zep-flex-row md:zep-gap-3 lg:zep-gap-5">
        <Carousel
          emulateTouch
          showStatus={false}
          showIndicators={false}
          thumbWidth={renderThumbnailWidth()}
          showThumbs={media.length > 1}
          renderArrowPrev={(onClick, hasPrev) =>
            hasPrev && (
              <div
                onClick={onClick}
                className="zep-w-[48px] zep-h-[48px] zep-z-10 zep-absolute zep-rounded-full md:zep-top-[50%] md:zep-translate-y-[-50%] md:zep-left-[10px] zep-right-[25%] sm:zep-right-[15%] zep-top-[10px] md:zep-right-[unset] zep-bg-[#ffffff] zep-border-1 zep-border-[#C3C3C3] zep-flex zep-justify-center zep-items-center zep-pr-0.25 md:zep-cursor-pointer"
              >
                <img src={carouselArrow} alt={'arrow'} className="zep-w-[20px] zep-h-[24px]" />
              </div>
            )
          }
          renderArrowNext={(onClick, hasNext) =>
            hasNext && (
              <div
                onClick={onClick}
                className="zep-w-[48px] zep-h-[48px] zep-z-10 zep-absolute zep-rounded-full md:zep-top-[50%] md:zep-translate-y-[-50%] zep-top-[10px] md:zep-right-[10px] zep-right-[8%] sm:zep-right-[6%] zep-bg-[#ffffff] zep-border-1 zep-border-[#C3C3C3] zep-flex zep-justify-center zep-items-center zep-pl-0.25 md:zep-cursor-pointer"
              >
                <img src={carouselArrow} alt={'arrow'} className="zep-w-[20px] zep-h-[24px] zep-rotate-[180deg]" />
              </div>
            )
          }
          renderThumbs={(c) => {
            return media.map((item) => (
              <div className="zep-h-[66px] sm:zep-h-[104px] md:zep-h-[76px] lg:zep-h-[140px] zep-relative">
                <img className="zep-object-cover zep-w-full zep-h-full" src={item.thumbnail} alt={item.thumbnail}></img>
                {item.type === 'video' && (
                  <img
                    src={play}
                    alt="play"
                    className="zep-absolute zep-top-[50%] zep-translate-y-[-50%]  zep-left-[0px] zep-w-[40px] zep-h-[40px]"
                  />
                )}
              </div>
            ));
          }}
          className="zep-max-w-[328px] sm:zep-max-w-[720px] md:zep-max-w-[439px] lg:zep-max-w-[831px]"
        >
          {media.map((item, index) => {
            if (item.type === 'image') {
              return (
                <img
                  key={index}
                  src={item.source}
                  alt={item.source}
                  className="zep-object-cover zep-w-full zep-h-full"
                />
              );
            } else {
              return (
                <video
                  key={index}
                  src={item.source}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="zep-h-full zep-object-cover"
                ></video>
              );
            }
          })}
        </Carousel>
        <div className="zep-flex zep-flex-col zep-justify-center">
          <HeaderLongComponent headline={headline} tagline={tagline} description={description} />
          <div className="zep-flex zep-flex-col sm:zep-flex-row zep-mt-1.5 zep-gap-1">
            <Button
              label={primaryButtonText}
              title={primaryButtonText}
              variant={ZsdButtonVariant.PrimaryDark}
              onClick={primaryButtonClick}
              className="sm:zep-max-w-max"
            />
            <Button
              label={secondaryButtonText}
              title={secondaryButtonText}
              variant={ZsdButtonVariant.SecondaryDark}
              onClick={secondaryButtonClick}
              className="sm:zep-max-w-max"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export { PageEntry };
