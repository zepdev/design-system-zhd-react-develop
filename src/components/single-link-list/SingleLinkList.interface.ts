import { HTMLAttributes } from 'react';
import { LinkListItemProps } from '@/components/link-list-item';

export interface SingleLinkListProps extends HTMLAttributes<HTMLDivElement>, LinkListItemProps {
  title: string,
}
