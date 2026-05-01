import { clsx } from 'clsx';
import React from 'react';
import { HeaderShortComponent } from '../header-short-component';
import { Layout } from '../layout';
import { HeaderShortProps } from './headershort.interface';

export const HeaderShort: React.FC<HeaderShortProps> = ({
  className,
  backgroundVariant = 'white',
  disableBottomPadding = false,
  ...props
}) => {
  const colSpanByArrow = 'md:zep-w-[35%]';

  const wrapperBg = backgroundVariant === 'gray' ? 'zep-bg-background-medium' : undefined;

  const paddingClasses = disableBottomPadding
    ? ['zep-pt-3', 'sm:zep-pt-4', 'md:zep-pt-5']
    : ['zep-py-3', 'sm:zep-py-4', 'md:zep-py-5'];

  return (
    <Layout className={clsx(className, ...paddingClasses)} wrapperClassname={wrapperBg} testId="header-short">
      <HeaderShortComponent {...props} headlineSize="xl" className={clsx('zep-w-full', colSpanByArrow)} />
    </Layout>
  );
};
