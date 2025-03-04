import { Accordion, LinkMode, LinkTarget } from '@zepdev/design-system-component-library-react';
import clsx from 'clsx';
import React from 'react';
import { Link } from '../zsd-link';
import { LinkListItemProps } from './LinkListItem.interface';

const Headline = ({ headline }: Partial<LinkListItemProps>) => {
  if (headline) {
    return (
      <h4
        data-testid="link-list-headline"
        className={clsx('zep-typography-headlineSM-fluid-cqi', 'zep-break-all', 'zep-text-typography-dark-100')}
      >
        {headline}
      </h4>
    );
  }

  return null;
};

const Description = ({ description }: Partial<LinkListItemProps>) => {
  if (description) {
    return (
      <p
        data-testid="link-list-description"
        className={clsx('zep-typography-bodyText', 'zep-break-all', 'zep-text-typography-dark-100')}
      >
        {description}
      </p>
    );
  }

  return null;
};

const Links = ({ links }: LinkListItemProps) => {
  return (
    <div data-testid="link-list-links" className={clsx('zep-flex', 'zep-flex-col', 'zep-gap-1')}>
      {links.map((link, index) => (
        <Link
          key={index}
          label={link.label}
          icon={link.icon}
          href={link.href}
          iconPlacement="before"
          target={LinkTarget.Blank}
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
}) => {
  const linkList = links.length > 15 ? links.slice(0, 15) : links;
  const widthClass = isMultiListItem
    ? 'md:zep-flex zep-hidden zep-min-w-[280px]'
    : 'zep-flex zep-max-w-[774px] zep-min-w-[290px]';

  return (
    <>
      <div
        className={clsx(
          'zep-gap-1.5',
          'zep-p-1.5',
          'sm:zep-p-2',
          'md:zep-p-2.5',
          'zep-flex-col',
          'zep-items-start',
          'zep-bg-background-medium',
          widthClass,
          className,
        )}
        data-testid="zep-link-list"
      >
        <Headline headline={headline} />
        <Description description={description} />
        <Links links={linkList} />
      </div>
      <Accordion
        className={clsx(
          'zep-w-full',
          {
            'zep-hidden': !isMultiListItem,
            'md:zep-hidden zep-min-w-[280px] zep-border-none': isMultiListItem,
          },
          'zep-bg-background-medium',
          'zep-text-typography-dark-100',
          className,
        )}
        items={[
          {
            title: headline || '',
            content: (
              <div className="zep-flex zep-flex-col zep-gap-1">
                <Description description={description} />
                <Links links={linkList} />
              </div>
            ),
          },
        ]}
      />
    </>
  );
};
