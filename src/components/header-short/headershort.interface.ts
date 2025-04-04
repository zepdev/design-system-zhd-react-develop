import { HeaderShortComponentProps } from '@/components/header-short-component';

export interface HeaderShortProps extends Omit<HeaderShortComponentProps, 'className'> {
  className?: string,
}
