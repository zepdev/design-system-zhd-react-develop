import { CookieLayer } from '@/components/cookie-layer/CookieLayer';
import clsx from 'clsx';
import { FC } from 'react';
import { HeaderLongComponent } from '../header-long-component';
import { Layout } from '../layout';
import { Scrollbar } from '../scrollbar';
import { OneTrustType } from '../video/ResponsivePlayer';
import useVideoCookieCheck from '../video/useVideoComplianceCheck';
import { InstagramFeedProps } from './InstagramFeed.interface';

const Images: FC<Pick<InstagramFeedProps, 'feed'>> = ({ feed }) => {
  return feed.map(({ src, alt, url }, index) => (
    <div
      className={clsx(
        'zep-aspect-[4/5]',
        'md:zep-flex-[30%]',
        'md:zep-grow',
        'md:zep-w-auto',
        'sm:zep-w-[328px]',
        'zep-w-[290px]',
        'zep-shrink-0',
      )}
    >
      {url ? (
        <a href={url} target="_blank" rel="noreferrer">
          <img
            key={`instagram-image-${index}`}
            className="zep-w-full zep-h-full zep-object-cover"
            src={src}
            alt={alt}
          />
        </a>
      ) : (
        <img key={`instagram-image-${index}`} className="zep-w-full zep-h-full zep-object-cover" src={src} alt={alt} />
      )}
    </div>
  ));
};

export const InstagramFeed: FC<InstagramFeedProps> = ({
  feed,
  cookiesLayerDescription,
  cookiesResetLabel,
  ...headerProps
}) => {
  const { canPlay } = useVideoCookieCheck();
  const resetCookies = () => {
    if (
      typeof window !== 'undefined' &&
      typeof (window as Window & typeof globalThis & { OneTrust: OneTrustType }).OneTrust !== 'undefined'
    ) {
      const OneTrust = (window as Window & typeof globalThis & { OneTrust: OneTrustType }).OneTrust;
      OneTrust?.OnConsentChanged(() => {
        window.location.reload();
      });
      OneTrust?.ToggleInfoDisplay();
    }
  };
  return (
    <>
      <Layout
        wrapperClassname="zep-bg-greyscale-200 zep-py-1 md:zep-py-1.5 lg:zep-py-2.5"
        testId="zep-instagram-feed"
        className="zep-flex zep-flex-col xl:zep-gap-5 md:zep-gap-4 sm:zep-gap-3 zep-gap-2.5"
      >
        <HeaderLongComponent {...headerProps} />
        {!canPlay ? (
          <CookieLayer label={cookiesResetLabel} description={cookiesLayerDescription} onClickCookies={resetCookies} />
        ) : (
          <>
            <div className="md:zep-flex zep-flex-row zep-flex-wrap zep-gap-1 zep-hidden">
              <Images feed={feed} />
            </div>

            <Scrollbar scrollOrientation="horizontal" controlId="instagram-feed-scrollbar" className="md:zep-hidden">
              <div className="zep-flex zep-flex-row zep-gap-1">
                <Images feed={feed} />
              </div>
            </Scrollbar>
          </>
        )}
        
      </Layout>
    </>
  );
};
