import { Layout } from '@/components/layout';
import clsx from 'clsx';
import React from 'react';
import { Button, ZsdButtonVariant } from '../zsd-button';
import { TeaserSimpleProps } from './teaser-simple.interface';

export const TeaserSimple: React.FC<TeaserSimpleProps> = ({ teaserText, buttonText, onClick }) => {
  return (
    <Layout
      wrapperClassname={'zep-bg-primary-default'}
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
          'zep-max-w-max',
        )}
        label={buttonText}
        title={buttonText}
        variant={ZsdButtonVariant.PrimaryLight}
        onClick={onClick}
      />
    </Layout>
  );
};
