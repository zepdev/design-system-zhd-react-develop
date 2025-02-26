export interface DownloadCard {
  fileName: string;
  fileSize: string;
  fileUrl: string;
  fileImagePreview: string;
  cardHeadline: string;
  cardDescription: string;
}

export interface DownloadCardProps {
  downloadCard: DownloadCard;
}
