import { render } from '@testing-library/react';
import { DownloadCard } from './DownloadCard';

// Mock ResizeObserver after imports
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe('Download card component', () => {
  it('should renders download card component', () => {
    const Child = (
      <DownloadCard
        downloadCard={{
          fileImagePreview: '',
          fileName: '',
          fileSize: '',
          fileUrl: '',
          cardDescription: '',
          cardHeadline: '',
        }}
      />
    );
    const { getByTestId } = render(Child);
    const contactCardElement = getByTestId('zep-download-card');
    expect(contactCardElement).toBeInTheDocument();
  });
});
