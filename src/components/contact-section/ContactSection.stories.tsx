import type { Meta, StoryObj } from '@storybook/react';
import { ContactSection } from './ContactSection';
import { mockRichTextShort } from '../../utils/mocks';

const meta = {
  title: 'Patterns/ContactSection',
  component: ContactSection,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ContactSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    headline: 'Pressekontakt',
    linkLists: [{
      headline: 'Sina Koch',
      description: mockRichTextShort,
      links: [
        { href: '', label: 'inline link' },
        { href: '', label: 'inline link' },
      ],
    }]
  }
}

export const Multi: Story = {
  args: {
    headline: 'Sie brauchen Unterstützung - wir helfen Ihnen gerne',
    linkLists: [
      {
        headline: 'Deutschland',
        links: [{ href: '', label: 'inline link' }],
      },
      {
        headline: 'International',
        links: [{ href: '', label: 'inline link' }],
      },
    ],
  }
}
