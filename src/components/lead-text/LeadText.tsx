import React from 'react';
import clsx from 'clsx';
import { LeadTextProps } from '@/components/lead-text/lead-text.interface';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { Link, LinkTarget } from '@zepdev/design-system-component-library-react';

export const LeadText: React.FC<LeadTextProps> = ({ headline, content, theme = 'power-systems' }) => (
  <div className={clsx('md:zep-grid md:zep-grid-cols-16 md:zep-gap-1.5 xl:zep-gap-2')}>
    <div
      className={clsx(
        'xl:zep-max-w-[944px]',
        'md:zep-grid',
        'md:zep-col-end-12',
        'xl:zep-col-end-10',
        'md:zep-col-start-2',
        'zep-w-full',
        'zep-flex',
        'zep-flex-col',
        'zep-gap-y-1.5',
        'sm:zep-gap-y-2',
        'md:zep-gap-y-2.5',
        'xl:zep-gap-y-4',
        { 'zep-text-typography-dark-100': theme === 'cat', 'zep-text-primary-default': theme === 'power-systems' },
      )}
      data-testid="lead-text"
    >
      {headline && (
        <h4
          className="zep-typography-headlineLG-fluid-cqi zep-break-words"
          data-testid="lead-text-headline"
        >
          {headline}
        </h4>
      )}
      <BlocksRenderer
        content={content}
        blocks={{
          /* NOTE: add components for rendering ordered/unordered lists, code, image, quote*/
          paragraph: ({ children }) => (
            <p className="zep-typography-bodyTextLG" data-testid="lead-text-body">{children}</p>
          ),
          heading: ({ children }) => (
            <h5 className="zep-typography-headlineXS-fluid-cqi">{children}</h5>
          ),
          link: ({ children, url }) => (
            <Link className="zep-typography-link" target={LinkTarget.Blank} href={url} label={children as string} />
          ),
        }}
        modifiers={{
          bold: ({ children }) => <span className="zep-typography-bodyStrong">{children}</span>,
        }}
      />
    </div>
  </div>
);
