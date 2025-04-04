import { HTMLAttributes } from 'react';
import { LinkListItemProps } from '@/components/link-list-item';
import { HeaderShortProps } from '@/components/header-short';

export interface SingleLinkListProps extends HTMLAttributes<HTMLDivElement>, HeaderShortProps, LinkListItemProps {
  title: string,
  id?: string;
}
