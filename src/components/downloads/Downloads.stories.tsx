import type { Meta, StoryObj } from '@storybook/react';
import { Downloads } from './Downloads';
import { DownloadsProps } from './downloads.interface';

const meta = {
  title: 'Patterns/Downloads',
  component: Downloads,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Downloads>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: 'Headline',
    tagline: 'Tagline',
    linkText: 'standalone link',
    linkHref: 'https://www.google.com/',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.',
    downloads: [
      {
        cardDescription: 'This is a card description of a one download card that is longer than it should be',
        cardHeadline: 'Download card',
        fileImagePreview: 'https://images.wondershare.com/pdfelement/pdf-editor-mac/open-pdf-in-preview-mac.png',
        fileName: 'Herunterladen PDF',
        fileSize: '1MB',
        fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      },
      {
        cardDescription: 'This is a card description of a one download card that is longer than it should be',
        cardHeadline: 'Download card',
        fileImagePreview: 'https://images.wondershare.com/pdfelement/pdf-editor-mac/open-pdf-in-preview-mac.png',
        fileName: 'Herunterladen PDF',
        fileSize: '1MB',
        fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      },
      {
        cardDescription: 'This is a card description of a one download card that is longer than it should be',
        cardHeadline: 'Download card',
        fileImagePreview: 'https://images.wondershare.com/pdfelement/pdf-editor-mac/open-pdf-in-preview-mac.png',
        fileName: 'Herunterladen PDF',
        fileSize: '1MB',
        fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      },
    ],
  } as DownloadsProps,
};
