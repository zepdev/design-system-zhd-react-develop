import { HeaderLongComponent } from '../header-long-component';
import { Layout } from '../layout/Layout';
import ResponsivePlayer from './ResponsivePlayer';
import { VideoProps } from './video.interface';

export const Video = ({ video }: VideoProps) => {
  const { title, tagline, description, linkHref, type, linkText, url, thumbnail, videoDetails } = video;

  return (
    <Layout>
      <HeaderLongComponent
        headline={title}
        tagline={tagline}
        description={description}
        type={type}
        linkText={linkText}
        linkHref={linkHref}
      />

      <div className={'zep-w-full zep-relative zep-max-w-[1436px] zep-mx-auto zep-mt-2 md:zep-mt-5'}>
        <ResponsivePlayer
          label={video.cookiesResetLabel}
          description={video.cookiesLayerDescription}
          url={url}
          thumbnail={thumbnail}
          thumbnailAlt={video.thumbnailAlt}
        />
        <p className="zep-text-typography-dark-100 zep-mt-0.5 md:zep-mt-1 zep-typography-supportText">{videoDetails}</p>
      </div>
    </Layout>
  );
};
