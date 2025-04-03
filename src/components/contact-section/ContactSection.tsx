import { FC } from 'react';
import { ContactSectionProps } from './ContactSection.interface';
import { MultiLinkList } from '@/components/multi-link-list';
import { SingleLinkList } from '@/components/single-link-list';
import { GlobalVariants } from '../../interfaces/global-variants';

export const ContactSection: FC<ContactSectionProps> = ({ id, variant = GlobalVariants.Zps, linkLists, headline }) => {
  if (linkLists.length === 0) {
    return null;
  }

  if (linkLists.length === 1) {
    return <SingleLinkList title={headline} {...linkLists[0]} variant={variant} />
  }

  return (
    <MultiLinkList
      id={id}
      headline={headline}
      linkLists={linkLists}
      variant={variant}
    />
  );
}
