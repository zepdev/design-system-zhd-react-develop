import { RichText } from '@/components/rich-text';
import { Accordion, Link, LinkMode, LinkTarget } from '@zepdev/design-system-component-library-react';
import clsx from 'clsx';
import React from 'react';
import { getDataLayer } from '../../utils/getDataLayer';
import { getUrlWithTrailingSlash } from '../../utils/getUrlWithTrailingSlash';
import { LinkListItemProps } from '../link-list-item';

const Headline = ({ headline }: Partial<LinkListItemProps>) => {
  if (headline) {
    return (
      <h4
        data-testid="link-list-headline"
        className={clsx(
          'zep-typography-headlineSM-fluid-cqi',
          'zep-hyphens-auto',
          'zep-break-normal',
          'zep-text-darkgrey-500',
        )}
      >
        {headline}
      </h4>
    );
  }

  return null;
};

const Description = ({ description }: Partial<LinkListItemProps>) => {
  if (description) {
    return <RichText content={description} />;
  }

  return null;
};

const Links = ({ links, variant, headline, isFooterList, gtmHeadline }: LinkListItemProps) => {
  const datalayer = getDataLayer();
  return (
    <div
      data-testid="link-list-links"
      className={clsx(
        'zep-flex',
        'zep-flex-col',
        'zep-items-start',
        'zep-gap-1',
        'zep-text-typography-primary-default',
      )}
    >
      {links.map((link, index) => (
        <Link
          target={link.href?.startsWith('http') ? LinkTarget.Blank : LinkTarget.Self}
          key={index}
          label={link.label}
          icon={link.icon}
          download={type === 'download'}
          href={getUrlWithTrailingSlash(link.href)}
          iconPlacement="before"
          onClickCapture={() => {
            let event = 'interaction_linklist';
            if (isFooterList) {
              event = 'interaction_footer';
            }
            if (link.href?.startsWith('tel:') || link.href?.startsWith('mailto:')) {
              event = 'interaction_contact';
            }
            datalayer.push({
              event,
              link_text: link.label,
              link_context: headline,
              link_section: isFooterList ? 'footer' : gtmHeadline,
            });
          }}
          mode={LinkMode.Inline}
        />
      ))}
    </div>
  );
};

export const LinkListItem: React.FC<LinkListItemProps> = ({
  headline,
  description,
  links,
  isMultiListItem = false,
  className,
  isFooterList = false,
  gtmId,
  gtmHeadline,
}) => {
  const widthClass = isMultiListItem
    ? 'md:zep-flex zep-hidden zep-min-w-[210px]'
    : 'zep-flex md:zep-max-w-[774px] zep-min-w-[290px]';

  return (
    <>
      <div
        className={clsx(
          'zep-gap-1.5',
          'zep-flex-col',
          'zep-items-start',
          'zep-p-1.5',
          'sm:zep-p-2',
          'md:zep-p-2.5',
          'zep-text-typography-dark-100',
          'zep-bg-background-medium',
          widthClass,
          { 'md:zep-min-w-[280px]': !isFooterList },
          className,
        )}
        data-testid="zep-link-list"
      >
        <Headline headline={headline} />
        <Description description={description} />
        <Links links={links} headline={headline} isFooterList={isFooterList} gtmId={gtmId} gtmHeadline={gtmHeadline} />
      </div>
      <Accordion
        className={clsx(
          'zep-w-full',
          {
            'zep-hidden': !isMultiListItem,
            'md:zep-hidden zep-min-w-[280px] zep-border-none': isMultiListItem,
          },
          'zep-text-typography-dark-100',
          'zep-bg-background-medium',
          className,
          {
            '!zep-px-[0] [&>button]:!zep-px-[0] [&>div]:!zep-px-[0]': isFooterList,
          },
        )}
        items={[
          {
            title: headline || '',
            content: (
              <div className="zep-flex zep-flex-col zep-gap-1">
                <Description description={description} />
                <Links links={links} headline={headline} isFooterList={isFooterList} gtmId={gtmId} gtmHeadline={gtmHeadline} />
              </div>
            ),
          },
        ]}
      />
    </>
  );
};
