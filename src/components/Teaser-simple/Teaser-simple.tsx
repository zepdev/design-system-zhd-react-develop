import React from 'react';
import clsx from 'clsx';
import { Button, ZpsButtonVariant } from '../zps-button';
import { TeaserSimpleProps } from './teaser-simple.interface';
import { backgroundColor } from '../../utils/commonCSS';
import { GlobalVariantExtended } from '../../interfaces/global-variants';
import { Layout } from '@/components/layout';

export const TeaserSimple: React.FC<TeaserSimpleProps> = ({ teaserText, buttonText, onClick }) => {
  return (
    <Layout
      wrapperClassname={clsx(backgroundColor[GlobalVariantExtended.ZpsBg])}
      className={clsx(
        'zep-flex',
        'zep-flex-col',
        'zep-w-[360px]',
        'zep-items-center',
        'zep-justify-center',
        'zep-w-full',
        'md:zep-flex-row',
        'zep-py-3',
        'sm:zep-py-4',
        'md:zep-py-5',
      )}
    >
      <h3
        className={clsx(
          'zep-text-center md:zep-text-start',
          'zep-text-typography-light-100',
          'zep-typography-headlineMD-fluid-cqi',
          'zep-w-auto',
        )}
      >
        {teaserText}
      </h3>
      <Button
        className={clsx(
          'zep-mt-1.5',
          'md:zep-ml-[80px]',
          'md:zep-mt-[0]',
          'xl:zep-ml-[120px]',
          'md:zep-whitespace-nowrap',
        )}
        label={buttonText}
        title={buttonText}
        variant={ZpsButtonVariant.Primary}
        onClick={onClick}
      />
    </Layout>
  );
};
