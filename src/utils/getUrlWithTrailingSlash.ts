export const getUrlWithTrailingSlash = (url?: string) => {
  if (!url) return url;
  if (url.endsWith('/') || url.startsWith('https://')) return url;
  if (url.startsWith('tel:') || url.startsWith('mailto:')) return url;
  //Check if URL ends with a common file extension
  const commonExtensions = [
    '.pdf',
    '.jpg',
    '.jpeg',
    '.png',
    '.gif',
    '.doc',
    '.docx',
    '.xls',
    '.xlsx',
    '.txt',
    '.html',
    '.htm',
    '.mp4',
    '.mp3',
    '.zip',
    '.rar',
    '.csv',
  ];
  if (commonExtensions.some((ext) => url.endsWith(ext))) return url;
  return `${url}/`;
};
