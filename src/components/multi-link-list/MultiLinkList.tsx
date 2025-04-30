import { HeaderLongComponent } from '@/components/header-long-component';
import { clsx } from 'clsx';
import { FC } from 'react';
import { Layout } from '../layout';
import { LinkListItem } from '../link-list-item';
import { MultiLinkListProps } from './MultiLinkList.interface';

const MultiLinkListComponent: FC<MultiLinkListProps> = ({
  headline,
  linkLists,
  linkListItemClassname,
  isFooterList,
  ...headerLongProps
}) => {
  return (
    <>
      {headline ? <HeaderLongComponent headline={headline} {...headerLongProps} /> : null}
      <div
        className={clsx('zep-grid', 'zep-gap-1', {
          'xl:zep-grid-cols-4': [4, 7, 8, 11, 12].includes(linkLists.length),
          'xl:zep-grid-cols-5': [5, 9, 10].includes(linkLists.length) || linkLists.length >= 13,
          'lg:zep-grid-cols-2': linkLists.length === 2,
          'lg:zep-grid-cols-3': [3, 5, 6].includes(linkLists.length),
          'lg:zep-grid-cols-4': linkLists.length === 4 || linkLists.length >= 7,
          'lg:zep-gap-2 md:zep-gap-1.5': !isFooterList,
          'lg:zep-gap-x-2 md:zep-gap-x-1.5 md:zep-gap-y-3 xl:zep-gap-y-3.5': isFooterList,
          'md:zep-grid-cols-2': [2, 4].includes(linkLists.length),
          'md:zep-grid-cols-3': linkLists.length === 3 || linkLists.length >= 5,
        })}
      >
        {linkLists.map((linkListProps) => (
          <LinkListItem
            key={linkListProps.headline}
            className={clsx('zep-w-full', linkListItemClassname, { '!zep-py-[0]': isFooterList })}
            {...linkListProps}
            isMultiListItem
            isFooterList={isFooterList}
            gtmId={headerLongProps?.id}
            gtmHeadline={linkListProps.headline}
          />
        ))}
      </div>
    </>
  );
};

export const MultiLinkList: FC<MultiLinkListProps> = ({
  isFooterList = false,
  isPatternPart = false,
  className,
  id,
  ...rest
}) => {
  if (isPatternPart) {
    return (
      <div className={clsx('zep-flex-col', 'zep-flex', 'zep-gap-2', 'sm:zep-gap-3', 'xl:zep-gap-4', className)}>
        <MultiLinkListComponent {...rest} isPatternPart={isPatternPart} isFooterList={isFooterList} />
      </div>
    );
  }

  return (
    <Layout
      id={id}
      className={clsx('zep-flex-col', 'zep-flex', 'zep-gap-2', 'sm:zep-gap-3', 'xl:zep-gap-4', className)}
    >
      <MultiLinkListComponent {...rest} isPatternPart={isPatternPart} isFooterList={isFooterList} />
    </Layout>
  );
};
