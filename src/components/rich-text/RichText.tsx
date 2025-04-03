import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { Link, LinkMode, LinkTarget, List } from '@zepdev/design-system-component-library-react';
import { clsx } from 'clsx';
import React from 'react';
import { getUrlWithTrailingSlash } from '../../utils/getUrlWithTrailingSlash';
import { HeaderProps, ImageProps, ListProps, RichTextBaseProps, RichTextProps } from './RichText.interface';

const Header: React.FC<HeaderProps> = ({ level, children, className }) => {
  switch (level) {
    case 1:
    case 2:
    case 3:
      return <h3 className={clsx('zep-typography-headlineSM-fluid-cqi', 'zep-text-start', className)}>{children}</h3>;
    case 4:
      return <h4 className={clsx('zep-typography-headlineXS-fluid-cqi', 'zep-text-start', className)}>{children}</h4>;
    case 5:
      return <h5 className={clsx('zep-typography-headlineXS-fluid-cqi', 'zep-text-start', className)}>{children}</h5>;
    default:
      return <h6 className={clsx('zep-typography-headlineXS-fluid-cqi', 'zep-text-start', className)}>{children}</h6>;
  }
};

// Paragraph Component
const Paragraph: React.FC<RichTextBaseProps> = ({ children, className }) => (
  <p className={clsx('zep-typography-bodyText', 'zep-text-start', className)}>{children}</p>
);

// List Component
const ListComponent: React.FC<ListProps> = ({ ordered, items }) => (
  <List
    className="zep-w-full zep-flex zep-flex-col zep-gap-0.25 zep-justify-start"
    type={ordered ? 'numeric' : 'bullet'}
  >
    {items}
  </List>
);

const Image: React.FC<ImageProps> = ({ url, description, alt }) => (
  <div className="sm:zep-max-w-[calc(50%-16px)] zep-flex zep-flex-col">
    <div className="zep-aspect-[4/3]">
      <img src={url} alt={alt} className="zep-w-full zep-h-full zep-object-cover" />
    </div>
    <span className="zep-hyphens-auto zep-break-normal zep-bg-greyscale-200 zep-w-full zep-text-typography-dark-70 zep-opacity-70 zep-py-0.5 zep-px-1 zep-typography-bodyText">
      {description}
    </span>
  </div>
);

const RichText = ({ content, children, className }: RichTextProps) => {
  if (content.length === 1 && content[0].children[0]?.type === 'text' && content[0].children[0]?.text === '') {
    return null;
  }

  return (
    <div
      className={clsx(
        'zep-container',
        'zep-max-w-[944px]',
        'zep-flex',
        'sm:zep-flex-row',
        'zep-flex-col',
        'sm:zep-flex-wrap',
        'zep-gap-0.5',
        className,
      )}
      data-testid="zep-richtext"
    >
      <BlocksRenderer
        content={content}
        blocks={{
          /* NOTE: add components for rendering ordered/unordered lists, code, image, quote*/
          paragraph: ({ children }) => <Paragraph className={clsx('zep-w-full')}>{children}</Paragraph>,
          heading: ({ children, level }) => (
            <Header className={clsx('zep-w-full', 'zep-font-500')} level={level}>
              {children}
            </Header>
          ),
          link: ({ children, url }) => (
            <Link
              target={url?.startsWith('http') ? LinkTarget.Blank : LinkTarget.Self}
              className={clsx('zep-inline-flex')}
              href={getUrlWithTrailingSlash(url)}
              label={children as string}
              mode={LinkMode.Inline}
            />
          ),
          'list-item': ({ children }) => (
            <List.Item className="zep-py-[0]">
              <span className="zep-hyphens-auto zep-break-normal zep-w-full zep-inline-block">{children}</span>
            </List.Item>
          ),
          list: ({ children, format }) => (
            <ListComponent ordered={format === 'ordered'} items={children as React.ReactNode[]} />
          ),
          image: ({ image: { alternativeText, name, url, caption } }) => (
            <Image url={url} alt={alternativeText ?? name} description={caption ?? name} />
          ),
        }}
        modifiers={{
          bold: ({ children }) => <span className="zep-typography-bodyStrong">{children}</span>,
          italic: ({ children }) => <span className="zep-italic">{children}</span>,
        }}
      />
      {children && <div className="zep-w-full">{children}</div>}
    </div>
  );
};

export { RichText };
