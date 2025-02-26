import { FC } from 'react';
import download from '../../assets/download.svg';
import { DownloadCardProps } from './download-card.interface';

const DownloadCard: FC<DownloadCardProps> = ({ downloadCard }) => {
  const { fileImagePreview, fileName, fileSize, fileUrl, cardDescription, cardHeadline } = downloadCard;
  return (
    <div
      data-testid="zep-download-card"
      className="zep-p-1.5 md:zep-p-2 lg:zep-p-3 zep-min-w-[290px] md:zep-min-w-[330px] lg:zep-min-w-[538px] zep-bg-greyscale-0"
    >
      <img
        src={fileImagePreview}
        alt={fileName}
        className="zep-h-[345px] lg:zep-h-[536px] zep-object-cover zep-mb-1.5"
      />
      <p className="zep-typography-headlineXS-fluid-cqi zep-text-typography-dark-100 zep-mb-1">{cardHeadline}</p>
      <p className="zep-typography-bodyText zep-text-typography-dark-100 zep-mb-1.5 md:zep-mb-2">{cardDescription}</p>
      <a href={fileUrl} download target="_blank" rel="noreferrer">
        <div className="md:hover:zep-underline md:zep-cursor-pointer zep-flex zep-gap-0.5">
          <p className="zep-text-primary-default">
            {fileName} | {fileSize}
          </p>
          <img src={download} alt="download" />
        </div>
      </a>
    </div>
  );
};
export { DownloadCard };
