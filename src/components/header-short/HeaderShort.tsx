import { clsx } from 'clsx';
import React from 'react';
import { HeaderShortComponent } from '../header-short-component';
import { Layout } from '../layout';
import { HeaderShortProps } from './headershort.interface';

export const HeaderShort: React.FC<HeaderShortProps> = ({ className, ...props }) => {
  const colSpanByArrow = 'md:zep-w-[35%]';

  return (
    <Layout className={clsx(className, 'zep-py-3', 'sm:zep-py-4', 'md:zep-py-5')} testId="header-short">
      <HeaderShortComponent {...props} className={clsx('zep-w-full', colSpanByArrow)} />
    </Layout>
  );
};
