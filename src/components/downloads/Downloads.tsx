import { FC } from 'react';
import { DownloadCard } from '../download-card';
import { HeaderLongComponent } from '../header-long-component';
import { Layout } from '../layout';
import { Scrollbar } from '../scrollbar';
import { DownloadsProps } from './downloads.interface';

const Downloads: FC<DownloadsProps> = ({
  headline,
  tagline,
  description,
  linkHref,
  linkText,
  downloads,
}: DownloadsProps) => {
  return (
    <Layout wrapperClassname="zep-bg-greyscale-200" testId="zep-downloads-section">
      <HeaderLongComponent
        type="link"
        headline={headline}
        tagline={tagline}
        description={description}
        linkText={linkText}
        linkHref={linkHref}
      />
      <Scrollbar
        className="zep-flex zep-gap-1 sm:zep-gap-1.5 lg:zep-gap-2 zep-overflow-auto zep-mt-[40px] sm:zep-mt-3 md:zep-mt-4 lg:zep-mt-5"
        controlId={'zep-downloads-section-scrollbar'}
      >
        {downloads.map((downloadCard) => (
          <DownloadCard downloadCard={downloadCard} />
        ))}
      </Scrollbar>
    </Layout>
  );
};

export { Downloads };
