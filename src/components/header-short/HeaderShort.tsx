import React from 'react';
import { clsx } from 'clsx';
import { HeaderShortProps } from './headershort.interface';
import { HeaderShortComponent } from '../header-short-component';
import { Layout } from '../layout';

export const HeaderShort: React.FC<HeaderShortProps> = ({ className, ...props }) => {
  const colSpanByArrow = props.showArrow ? 'md:zep-w-[40%]' : 'md:zep-w-[35%]';

  return (
    <Layout className={className} testId="header-short">
      <HeaderShortComponent
        {...props}
        className={clsx('zep-w-full', colSpanByArrow)}
      />
    </Layout>
  );
};
