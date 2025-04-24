import { render } from '@testing-library/react';
import { InstagramFeed } from './InstagramFeed';

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe('Instagram Feed component', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <InstagramFeed feed={[]} cookiesLayerDescription="" cookiesResetLabel="" headline="" />,
    );
    const instagramFeed = getByTestId('video-cookie-layer');
    expect(instagramFeed).toBeInTheDocument();
  });
});
