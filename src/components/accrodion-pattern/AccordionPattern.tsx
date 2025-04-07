import { Button } from '@/components/zsd-button';
import { Accordion, Table, TableThemes } from '@zepdev/design-system-component-library-react';
import clsx from 'clsx';
import React from 'react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { textColor } from '../../utils/commonCSS';
import { HeaderLongComponent } from '../header-long-component';
import { HeaderShortComponent } from '../header-short-component';
import { Layout } from '../layout';
import { RichText } from '../rich-text';
import { AccordionPatternProps } from './accordion.interface';

export const AccordionPattern: React.FC<AccordionPatternProps> = ({
  topDescription,
  bottomDescription,
  contents,
  headline,
  variant = GlobalVariants.Zps,
  headerPosition = 'top',
  buttonVariant,
  buttonOnClick,
  buttonIcon,
  buttonText,
  id,
  buttonUrl,
  ...headerProps
}) => {
  return (
    <Layout
      id={id}
      className={clsx('zep-flex', {
        'zep-flex-col zep-items-start zep-gap-2 sm:zep-gap-2.5 md:zep-gap-3 xl:zep-gap-4': headerPosition === 'top',
        'md:zep-flex-row zep-flex-col zep-items-start zep-gap-2 sm:zep-gap-2.5 md:zep-gap-1.5 xl:zep-gap-5':
          headerPosition === 'left',
      })}
    >
      {headline && headerPosition === 'top' && (
        <HeaderLongComponent variant={variant} headline={headline} {...headerProps} />
      )}
      {headline && headerPosition === 'left' && (
        <HeaderShortComponent headline={headline} {...headerProps} className="zep-w-full" />
      )}
      <div className="zep-relative zep-w-full" data-testid="zep-accordion-pattern">
        {/* Top Description */}
        {topDescription && (
          <div className="zep-block zep-pb-1.5 md:zep-pb-2" data-testid="accordion-pattern-topDescription">
            <RichText content={topDescription} />
          </div>
        )}
        {/* Accordion */}
        <div data-testid="accordion-pattern-titleContent">
          <Accordion
            className={textColor[variant]}
            items={contents?.map((item) => ({
              title: item?.title,
              content: (
                <div className="zep-relative zep-flex zep-flex-col zep-items-start zep-justify-start zep-gap-2.5">
                  {item?.accordionContent && <RichText content={item?.accordionContent} />}
                  {item?.table && (
                    <div className="zep-flex zep-w-full zep-flex-col zep-gap-1.5">
                      <Table
                        variant={variant === GlobalVariants.Zps ? TableThemes.Zps : TableThemes.Cat}
                        columns={item?.table?.columns || []}
                        dataSource={item?.table?.dataSource || []}
                      />
                      {item?.table?.message && (
                        <span
                          className={clsx(
                            'zep-typography-supportText',
                            `${variant === GlobalVariants.Zps ? 'zep-text-indigo-500' : 'zep-text-typography-dark-100'}`,
                          )}
                        >
                          {item?.table?.message}
                        </span>
                      )}
                    </div>
                  )}
                  {item?.message && (
                    <span
                      className={clsx(
                        'zep-typography-bodyText',
                        `${variant === GlobalVariants.Zps ? 'zep-text-indigo-500' : 'zep-text-typography-dark-100'}`,
                      )}
                    >
                      {item?.message}
                    </span>
                  )}
                  {item.buttonText && (
                    <Button
                      href={item?.buttonUrl}
                      icon={item?.buttonIcon}
                      onClick={item?.buttonOnClick}
                      variant={item?.buttonVariant}
                    >
                      {item?.buttonText}
                    </Button>
                  )}
                </div>
              ),
            }))}
          />
        </div>
        {/* Bottom Description */}
        {bottomDescription && (
          <div className="zep-block zep-pt-1.5 md:zep-pt-2" data-testid="accordion-pattern-bottomDescription">
            <RichText content={bottomDescription} />
          </div>
        )}
        {buttonText && (
          <Button
            href={buttonUrl}
            className="md:zep-mt-2.5 sm:zep-mt-2 zep-mt-1.5"
            onClick={buttonOnClick}
            variant={buttonVariant}
            icon={buttonIcon}
          >
            {buttonText}
          </Button>
        )}
      </div>
    </Layout>
  );
};
