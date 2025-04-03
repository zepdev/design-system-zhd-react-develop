import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
  className?: string;
  testId?: string;
  wrapperClassname?: string;
  id?: string;
}
