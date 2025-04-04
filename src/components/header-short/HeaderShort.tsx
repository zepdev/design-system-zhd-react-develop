import { clsx } from 'clsx';
import React from 'react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { HeaderShortComponent } from '../header-short-component';
import { HeaderShortProps } from './headershort.interface';
import { Layout } from '../layout';
import { backgroundColor } from '../../utils/commonCSS';

export const HeaderShort: React.FC<HeaderShortProps> = ({
  className,
  variant = GlobalVariants.Zps,
  ...props
}) => {
  const colSpanByArrow = props.showArrow ? 'md:zep-w-[40%]' : 'md:zep-w-[35%]';

  return (
    <Layout
      className={clsx(
        backgroundColor[variant],
        className,
        'zep-py-3',
        'sm:zep-py-4',
        'md:zep-py-5',
      )}
      testId="header-short"
    >
      <HeaderShortComponent
        {...props}
        variant={variant}
        className={clsx('zep-w-full', colSpanByArrow)}
      />
    </Layout>
  );
};
