import type { Meta, StoryObj } from '@storybook/react';
import { DownloadCard } from './DownloadCard';
import { DownloadCardProps } from './download-card.interface';

const meta = {
  title: 'Components/DownloadCard',
  component: DownloadCard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DownloadCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    downloadCard: {
      cardDescription: 'This is a card description of a one download card that is longer than it should be',
      cardHeadline: 'Download card',
      fileImagePreview: 'https://images.wondershare.com/pdfelement/pdf-editor-mac/open-pdf-in-preview-mac.png',
      fileName: 'Herunterladen PDF',
      fileSize: '1MB',
      fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    },
  } as DownloadCardProps,
};
