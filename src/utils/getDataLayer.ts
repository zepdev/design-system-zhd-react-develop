export const getDataLayer = () => {
  if (typeof window !== 'undefined') {
    // @ts-expect-error - dataLayer is not defined on the window object in the server
    return window.dataLayer;
  }
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dataLayer: any[] = [];
  return dataLayer;
};
