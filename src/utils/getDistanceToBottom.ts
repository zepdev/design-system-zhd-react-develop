export const getDistanceToBottom = (el: HTMLElement | null) => {
  if (!el) {
    return 0;
  }

  const rect = el.getBoundingClientRect();
  const elemBottom = rect.bottom;

  return window.innerHeight - elemBottom;
};
