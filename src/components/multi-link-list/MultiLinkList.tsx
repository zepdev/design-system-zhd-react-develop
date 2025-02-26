import { clsx } from 'clsx';
import { FC } from 'react';
import { HeaderShortComponent } from '../header-short-component';
import { LinkListItem } from '../link-list-item';
import { MultiLinkListProps } from './MultiLinkList.interface';

export const MultiLinkList: FC<MultiLinkListProps> = ({
  headline,
  className,
  linkLists,
}) => {
  const linkListCards = linkLists.length > 15 ? linkLists.slice(0, 15) : linkLists;

  return (
    <div className={clsx('zep-flex-col', 'zep-flex', 'zep-gap-2', 'sm:zep-gap-3', 'xl:zep-gap-4', className)}>
      {headline ? <HeaderShortComponent className="md:zep-w-[35%] zep-w-full" headline={headline} /> : null}
      <div
        className={clsx('zep-grid', 'zep-gap-1', 'md:zep-gap-1.5', 'xl:zep-gap-2', {
          'xl:zep-grid-cols-2': linkLists.length === 2,
          'xl:zep-grid-cols-4': [4, 7, 8, 11, 12].includes(linkLists.length),
          'xl:zep-grid-cols-5': [5, 9, 10, 13, 14, 15].includes(linkLists.length),
          'md:zep-grid-cols-2': [2, 4].includes(linkLists.length),
          'md:zep-grid-cols-3': [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].includes(linkLists.length),
        })}
      >
        {linkListCards.map((linkListProps) => (
          <LinkListItem
            key={linkListProps.headline}
            className="zep-w-full"
            {...linkListProps}
            isMultiListItem
          />
        ))}
      </div>
    </div>
  );
};
