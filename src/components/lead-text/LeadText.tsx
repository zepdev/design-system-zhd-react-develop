import clsx from 'clsx';
import React from 'react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { HeaderShortComponent } from '../header-short-component';
import { Layout } from '../layout';
import { RichText } from '../rich-text';
import { LeadTextProps } from './lead-text.interface';

export const LeadText: React.FC<LeadTextProps> = ({ headline, tagline, content, variant = GlobalVariants.Zps }) => (
  <Layout>
    <div
      className={clsx(
        'md:zep-pr-[220px]',
        'lg:zep-pr-[0]',
        'lg:zep-max-w-[944px]',
        'zep-flex',
        'zep-flex-col',
        'zep-gap-y-1.5',
        'sm:zep-gap-y-2',
        'md:zep-gap-y-2.5',
        'xl:zep-gap-y-4',
      )}
      data-testid="lead-text"
    >
      {headline && (
        <HeaderShortComponent variant={variant} tagline={tagline} headline={headline} className="!zep-max-w-full" />
      )}
      <RichText content={content} />
    </div>
  </Layout>
);
