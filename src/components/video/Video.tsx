import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { HeaderLongComponent } from '../header-long-component';
import { Layout } from '../layout';
import ResponsivePlayer from './ResponsivePlayer';
import { SingleVideo, VideoProps } from './video.interface';

const videoComponentStyles = '!md:zep-flex !zep-px-[0] !md:zep-max-h-[600px] !lg:zep-max-h-[850px] zep-overflow-hidden';

export const Video = ({ id, videos }: VideoProps) => {
  const [selectedVideo, setSelectedVideo] = useState<SingleVideo>(videos[0]);
  const [key, setKey] = useState(uuidv4() + videos[0]?.url);

  useEffect(() => {
    setKey(uuidv4() + selectedVideo?.url);
  }, [selectedVideo]);

  return (
    <div id={id}>
      <Layout wrapperClassname={'!zep-mb-[0] zep-bg-background-medium'} className="zep-py-3 sm:zep-py-4 md:zep-py-5">
        <HeaderLongComponent
          tagline={selectedVideo?.tagline}
          headline={selectedVideo?.title || ''}
          description={[{ type: 'paragraph', children: [{ type: 'text', text: selectedVideo?.description || '' }] }]}
          linkHref={selectedVideo?.linkHref}
          linkText={selectedVideo?.linkText}
        />
      </Layout>
      <Layout className={videoComponentStyles}>
        <div className={clsx('zep-w-full zep-relative', videos?.length > 1 && 'md:zep-w-[80%]')}>
          <ResponsivePlayer
            label={selectedVideo?.cookiesResetLabel}
            description={selectedVideo?.cookiesLayerDescription}
            thumbnailAlt={selectedVideo?.thumbnailAlt || ''}
            key={key}
            url={selectedVideo?.url || ''}
            thumbnail={selectedVideo?.thumbnail || ''}
          />
          {videos.length > 1 && (
            <div
              className={clsx(
                'zep-hidden md:zep-flex zep-w-full md:zep-w-[25%] zep-flex-col zep-cursor-pointer zep-absolute zep-right-[-25%] zep-top-[0px] zep-h-full zep-overflow-scroll',
                'md:zep-bg-[unset] md:zep-bg-none',
              )}
            >
              {videos.map((v, index) => (
                <div
                  style={{ transform: `translateY(-${16 * index}px)` }}
                  key={uuidv4() + v.title}
                  className="zep-flex zep-items-center zep-gap-1"
                >
                  <div
                    onClick={() => setSelectedVideo(v)}
                    className={clsx(
                      'zep-pr-1 md:zep-pr-[0px] md:zep-pl-1 zep-pb-1 zep-pt-1 relative zep-max-w-[186px] md:zep-max-w-[unset] zep-h-full zep-max-h-[127px] md:zep-max-h-[unset] zep-w-full',
                      selectedVideo === v && 'zep-bg-indigo-500',
                    )}
                  >
                    <div className="zep-relative">
                      <img
                        alt={v.title}
                        src={v.thumbnail}
                        className="zep-max-w-[170px] md:zep-max-w-[unset] zep-max-h-[95px] md:zep-max-h-[unset] zep-w-full zep-object-cover zep-aspect-[16/9]"
                      />
                      {selectedVideo === v ? (
                        <div className="zep-absolute zep-inset-[0px] zep-bg-[#000000] zep-opacity-70"></div>
                      ) : (
                        <div className="zep-absolute zep-inset-[0px] zep-bg-[#000000] zep-opacity-40"></div>
                      )}
                      <div className="zep-hidden zep-top-[0px] zep-absolute md:zep-flex zep-items-center zep-h-full zep-w-full zep-px-[8px] md:zep-px-[24px]">
                        <h3
                          className={clsx(
                            'zep-typography-headlineSM-fluid-cqi zep-top-[0px] zep-line-clamp-2 zep-text-typography-light-100',
                          )}
                        >
                          {v?.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <h3
                    className={clsx(
                      'md:zep-hidden zep-typography-headlineSM-fluid-cqi zep-line-clamp-2 zep-text-typography-light-100',
                    )}
                  >
                    {v?.title}
                  </h3>
                </div>
              ))}
            </div>
          )}
        </div>
        {videos?.length > 1 && (
          <div className={clsx('zep-w-full md:zep-hidden md:zep-bg-[unset] md:zep-bg-none')}>
            {videos.map((v, index) => (
              <div
                style={{ transform: `translateY(-${16 * index}px)` }}
                key={uuidv4() + v.title}
                className="zep-flex zep-items-center zep-gap-1 "
                onClick={() => setSelectedVideo(v)}
              >
                <div
                  className={clsx(
                    'zep-pr-1 md:zep-pr-[0px] md:zep-pl-1 zep-pb-1 zep-pt-1 relative zep-max-w-[186px] sm:zep-max-w-[266px] md:zep-max-w-[unset] zep-h-full zep-max-h-[127px] sm:zep-max-h-[172px] md:zep-max-h-[unset]',
                    selectedVideo === v && 'zep-bg-indigo-500',
                  )}
                >
                  <div className="zep-relative">
                    <img
                      alt={v?.title}
                      src={v?.thumbnail}
                      className="zep-w-[170px] zep-h-[95px] sm:zep-w-[250px] sm:zep-h-[140px] zep-object-cover zep-aspect-[16/9]"
                    />
                    {selectedVideo === v ? (
                      <div className="zep-absolute zep-inset-[0px] zep-bg-[#000000] zep-opacity-70"></div>
                    ) : (
                      <div className="zep-absolute zep-inset-[0px] zep-bg-[#000000] zep-opacity-40"></div>
                    )}
                  </div>
                </div>
                <h3
                  className={clsx(
                    'md:zep-hidden zep-typography-headlineSM-fluid-cqi zep-line-clamp-3 zep-w-1/2 zep-pr-1',
                  )}
                >
                  {v?.title}
                </h3>
              </div>
            ))}
          </div>
        )}
      </Layout>
    </div>
  );
};
