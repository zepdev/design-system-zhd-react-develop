import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { Link, LinkMode, LinkTarget, List } from '@zepdev/design-system-component-library-react';
import { clsx } from 'clsx';
import React from 'react';
import { getUrlWithTrailingSlash } from '../../utils/getUrlWithTrailingSlash';
import { Button, ZsdButtonVariant } from '../zsd-button';
import { HeaderProps, ImageProps, ListProps, RichTextBaseProps, RichTextProps } from './RichText.interface';

const Header: React.FC<HeaderProps> = ({ level, children, className }) => {
  switch (level) {
    case 1:
    case 2:
      return <h2 className={clsx('zep-typography-headlineMD-fluid-cqi', 'zep-text-start', className)}>{children}</h2>;
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

//Paragraph Component
const Paragraph: React.FC<RichTextBaseProps> = ({ children, className }) => {
  // const lines = children.split('\n');

  return <p className={clsx('zep-typography-bodyText', 'zep-text-start', className)}>{children}</p>;
};

//List Component
const ListComponent: React.FC<ListProps> = ({ ordered, items }) => (
  <List className="zep-w-full zep-flex zep-flex-col zep-gap-1 zep-justify-start" type={ordered ? 'numeric' : 'bullet'}>
    {items}
  </List>
);

const Image: React.FC<ImageProps & { isSingle: boolean }> = ({ url, description, alt, isSingle }) => (
  <div
    className={clsx(
      isSingle ? 'zep-w-full zep-object-cover' : 'sm:zep-max-w-[calc(50%-16px)]',
      'zep-flex zep-flex-col',
    )}
  >
    <div className="zep-aspect-[16/9]">
      <img src={url} alt={alt} className="zep-w-full zep-aspect-[16/9] zep-object-cover" />
    </div>
    {description && (
      <span className="zep-hyphens-auto zep-break-normal zep-bg-greyscale-200 zep-w-full zep-text-typography-dark-70 zep-opacity-70 zep-py-0.5 zep-px-1 zep-typography-bodyText">
        {description}
      </span>
    )}
  </div>
);

const RichText = ({
  content,
  children,
  className,
  button,
  buttonIcon,
  type,
  buttonIconPosition,
  buttonAction,
  buttonUrl,
}: RichTextProps) => {
  if (content.length === 1 && content[0].children[0]?.type === 'text' && content[0].children[0]?.text === '') {
    return null;
  }

  const images = content.filter((block) => block.type === 'image'); // Extract image blocks
  const isSingleImage = images.length === 1;

  return (
    <div
      className={clsx(
        'zep-container',
        'zep-max-w-[944px]',
        'zep-flex',
        'sm:zep-flex-row',
        'zep-flex-col',
        'sm:zep-flex-wrap',
        'zep-gap-1',
        'zep-leading-[0px]',
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
            <Image url={url} alt={alternativeText ?? name} description={caption} isSingle={isSingleImage} />
          ),
        }}
        modifiers={{
          bold: ({ children }) => <span className="zep-typography-bodyStrong zep-font-600">{children}</span>,
          italic: ({ children }) => <span className="zep-italic">{children}</span>,
        }}
      />
      {children && <div className="zep-w-full">{children}</div>}
      {button && (
        <a
          className="zep-max-w-max zep-inline-block zep-h-auto zep-items-center"
          href={buttonUrl}
          target={buttonAction === 'open-external-link' ? '_blank' : '_self'}
          rel="noreferrer"
          download={buttonAction === 'download-file'}
        >
          <Button
            label={button}
            title={button}
            variant={type === 'primary-dark' ? ZsdButtonVariant.PrimaryDark : ZsdButtonVariant.SecondaryDark}
            className="zep-w-full sm:zep-max-w-max zep-mt-0.5 !zep-h-[40px] !zep-items-center"
            icon={buttonIcon}
            iconPosition={buttonIconPosition}
          />
        </a>
      )}
    </div>
  );
};

export { RichText };
