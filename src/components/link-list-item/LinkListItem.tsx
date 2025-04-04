import { RichText } from '@/components/rich-text';
import { Accordion, Link, LinkMode, LinkTarget } from '@zepdev/design-system-component-library-react';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import React from 'react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { textColor } from '../../utils/commonCSS';
import { getDataLayer } from '../../utils/getDataLayer';
import { getUrlWithTrailingSlash } from '../../utils/getUrlWithTrailingSlash';
import { LinkListItemProps } from '../link-list-item';

const textColorClass = cva([], {
  variants: {
    variant: textColor,
  },
  defaultVariants: {
    variant: GlobalVariants.Zps,
  },
});

const Headline = ({ variant, headline }: Partial<LinkListItemProps>) => {
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

const Description = ({ variant, description }: Partial<LinkListItemProps>) => {
  if (description) {
    return <RichText content={description} />;
  }

  return null;
};

const Links = ({ links, variant, type, headline, isFooterList }: LinkListItemProps) => {
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
            datalayer.push({
              event: isFooterList ? 'interaction_footer' : 'interaction_linklist',
              link_text: link.label,
              link_context: headline,
              link_section: isFooterList ? 'footer' : headline,
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
  variant = GlobalVariants.Zps,
  links,
  isMultiListItem = false,
  className,
  isFooterList = false,
}) => {
  const widthClass = isMultiListItem
    ? 'md:zep-flex zep-hidden zep-min-w-[210px]'
    : 'zep-flex md:zep-max-w-[774px] zep-min-w-[290px]';
  const linkListItemBg =
    variant === GlobalVariants.Cat || variant === GlobalVariants.Zps ? 'zep-bg-background-medium' : '';

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
          textColorClass({ variant }),
          linkListItemBg,
          widthClass,
          { 'md:zep-min-w-[280px]': !isFooterList },
          className,
        )}
        data-testid="zep-link-list"
      >
        <Headline headline={headline} variant={variant} />
        <Description description={description} variant={variant} />
        <Links links={links} variant={variant} headline={headline} isFooterList={isFooterList} />
      </div>
      <Accordion
        className={clsx(
          'zep-w-full',
          {
            'zep-hidden': !isMultiListItem,
            'md:zep-hidden zep-min-w-[280px] zep-border-none': isMultiListItem,
          },
          textColorClass({ variant }),
          linkListItemBg,
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
                <Description description={description} variant={variant} />
                <Links links={links} variant={variant} headline={headline} isFooterList={isFooterList} />
              </div>
            ),
          },
        ]}
      />
    </>
  );
};
