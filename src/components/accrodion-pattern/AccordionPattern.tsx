import React from 'react';
import clsx from 'clsx';
import { Accordion } from '@zepdev/design-system-component-library-react';
import { AccordionPatternProps } from './accordion.interface';
import { RichText } from '../rich-text';
import { HeaderShortComponent } from '../header-short-component';
import { HeaderLongComponent } from '../header-long-component';
import { Layout } from '../layout';

export const AccordionPattern: React.FC<AccordionPatternProps> = ({
  topDescription,
  bottomDescription,
  contents,
  headline,
  headerPosition = 'top',
  ...headerProps
}) => {
  return (
    <Layout className={clsx('zep-flex', {
      'zep-flex-col zep-gap-2 sm:zep-gap-2.5 md:zep-gap-3 xl:zep-gap-4': headerPosition === 'top',
      'md:zep-flex-row zep-flex-col zep-items-start zep-gap-2 sm:zep-gap-2.5 md:zep-gap-1.5 xl:zep-gap-5': headerPosition === 'left',
    })}>
      {(headline && headerPosition === 'top') && <HeaderLongComponent headline={headline} {...headerProps} />}
      {(headline && headerPosition === 'left') && <HeaderShortComponent headline={headline} {...headerProps} className="zep-w-full" />}
      <div
        data-testid="zep-accordion-pattern"
        className={clsx('zep-relative zep-shrink-0', {
          'md:zep-w-[calc(50%-12px)] xl:zep-w-[888px]': headerPosition === 'left',
        })}
      >
        {/* Top Description */}
        {topDescription && (
          <div className="zep-block zep-pb-1.5 md:zep-pb-2" data-testid="accordion-pattern-topDescription">
            <RichText.BlocksRichText content={topDescription} />
          </div>
        )}
        {/* Accordion */}
        <div data-testid="accordion-pattern-titleContent">
          <Accordion
            className="zep-text-typography-dark-100"
            items={contents.map((item) => ({
              title: item.title,
              content: (
                <div className="zep-relative">
                  <RichText.BlocksRichText content={item.accordionContent} />
                </div>
              ),
            }))}
          />
        </div>
        {/* Bottom Description */}
        {bottomDescription && (
          <div className="zep-block zep-pt-1.5 md:zep-pt-2" data-testid="accordion-pattern-bottomDescription">
            <RichText.BlocksRichText content={bottomDescription} />
          </div>
        )}
      </div>
    </Layout>
  );
};
