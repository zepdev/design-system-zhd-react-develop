import { FC } from 'react';
import clsx from 'clsx';
import { InstagramFeedProps } from './InstagramFeed.interface';
import { Layout } from '../layout';
import { HeaderLongComponent } from '../header-long-component';
import { Scrollbar } from '../scrollbar';

const Images: FC<Pick<InstagramFeedProps, 'feed'>> = ({ feed }) => {
  return feed.map(({ src, alt }, index) => (
    <div
      className={clsx(
        'zep-aspect-[1/1]',
        'md:zep-flex-[30%]',
        'md:zep-grow',
        'md:zep-w-auto',
        'sm:zep-w-[328px]',
        'zep-w-[290px]',
        'zep-shrink-0',
      )}
    >
      <img
        key={`instagram-image-${index}`}
        className="zep-w-full zep-h-full zep-object-cover"
        src={src}
        alt={alt}
      />
    </div>
  ));
}

export const InstagramFeed: FC<InstagramFeedProps> = ({ feed, ...headerProps }) => {
  return (
    <Layout testId="zep-instagram-feed" className="zep-flex zep-flex-col xl:zep-gap-5 md:zep-gap-4 sm:zep-gap-3 zep-gap-2.5">
      <HeaderLongComponent {...headerProps} />
      <div className="md:zep-flex zep-flex-row zep-flex-wrap zep-gap-1 zep-hidden">
        <Images feed={feed} />
      </div>
      <Scrollbar scrollOrientation="horizontal" controlId="instagram-feed-scrollbar" className="md:zep-hidden">
        <div className="zep-flex zep-flex-row zep-gap-1">
          <Images feed={feed} />
        </div>
      </Scrollbar>
    </Layout>
  );
}
