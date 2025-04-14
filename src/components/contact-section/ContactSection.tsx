import { MultiLinkList } from '@/components/multi-link-list';
import { SingleLinkList } from '@/components/single-link-list';
import { FC } from 'react';
import { ContactSectionProps } from './ContactSection.interface';

export const ContactSection: FC<ContactSectionProps> = ({ id, linkLists, headline }) => {
  if (linkLists.length === 0) {
    return null;
  }

  if (linkLists.length === 1) {
    return <SingleLinkList title={headline} {...linkLists[0]} />;
  }

  return <MultiLinkList id={id} headline={headline} linkLists={linkLists} />;
};
