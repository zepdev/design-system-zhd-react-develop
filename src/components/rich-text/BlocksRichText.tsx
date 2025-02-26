import { FC, PropsWithChildren, ReactNode } from 'react';
import { LinkMode, LinkTarget, List } from '@zepdev/design-system-component-library-react';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { Link } from '../zsd-link';
import { BlocksRichTextProps, HeaderProps, ListProps } from './RichText.interface';

const Header: FC<HeaderProps> = ({
  level,
  children,
}) => {
  return level <= 3 ? (
    <h3 className="zep-typography-headlineSM-fluid-cqi zep-text-typography-dark-100 zep-font-500">{children}</h3>
  ) : (
    <h4 className="zep-typography-headlineXS-fluid-cqi zep-text-typography-dark-100 zep-font-500">{children}</h4>
  );
};

// Paragraph Component
const Paragraph: FC<PropsWithChildren> = ({ children }) => (
  <p className="zep-typography-bodyText zep-text-typography-dark-100">{children}</p>
);

// List Component
const ListComponent: FC<ListProps> = ({ ordered, items }) => (
  <List type={ordered ? 'numeric' : 'bullet'}>
    {items}
  </List>
);

export const BlocksRichText: FC<BlocksRichTextProps> = ({ content }) => (
  <div className="zep-flex zep-flex-col zep-gap-2">
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => <Paragraph>{children}</Paragraph>,
        heading: ({ children, level }) => <Header level={level}>{children}</Header>,
        link: ({ children, url }) => (
          <Link
            as="span"
            className="zep-inline-flex"
            href={url}
            label={children as string}
            mode={LinkMode.Inline}
            target={LinkTarget.Blank}
          />
        ),
        'list-item': ({ children }) => (
          <List.Item className="!zep-p-[0]">
            <span className="zep-break-all zep-w-full zep-inline-block zep-text-typography-dark-100">
              {children}
            </span>
          </List.Item>
        ),
        list: ({ children, format }) => (
          <ListComponent ordered={format === 'ordered'} items={children as ReactNode[]} />
        )
      }}
      modifiers={{
        bold: ({ children }) => <span className="zep-typography-bodyStrong">{children}</span>,
        italic: ({ children }) => <span className="zep-italic">{children}</span>,
      }}
    />
  </div>
)
