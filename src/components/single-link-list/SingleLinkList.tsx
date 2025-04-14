import { FC } from 'react';
import { HeaderShortComponent } from '../header-short-component';
import { Layout } from '../layout';
import { LinkListItem } from '../link-list-item';
import { SingleLinkListProps } from './SingleLinkList.interface';

export const SingleLinkList: FC<SingleLinkListProps> = ({ headline, tagline, links, description, id, title }) => {
  return (
    <Layout
      id={id}
      testId="zep-single-link-list"
      className="zep-flex xl:zep-px-[244px] md:zep-flex-row zep-flex-col md:zep-justify-center md:zep-items-start xl:zep-gap-5 md:zep-gap-3 sm:zep-gap-2 zep-gap-1.5"
    >
      <HeaderShortComponent
        className="md:zep-w-[40%] zep-w-full zep-flex-grow zep-flex-shrink-0"
        headline={title}
        tagline={tagline}
      />
      <div className="zep-w-full md:zep-flex-grow">
        <LinkListItem
          className="zep-bg-background-medium"
          links={links}
          headline={headline}
          description={description}
        />
      </div>
    </Layout>
  );
};
